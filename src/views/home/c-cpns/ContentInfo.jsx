// @ts-nocheck
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '../../../store/modules/home';
import SetionHeader from '../../../components/setionheader'
import styled from 'styled-components';
import RoomList from '../../../components/common/RoomList';
import ShowAll from '../../../components/common/ShowAll';

const ContentInfo = memo(() => {
  // 发送网络请求
  const dispatch =  useDispatch()
  useEffect(() => { 
    dispatch(fetchHomeDataAction())
  }, [dispatch]);

  // 从redux中获取数据
  const {goodPriceInfo}= useSelector((state)=>({ goodPriceInfo:state.home.goodPriceInfo }),shallowEqual)
  

  

  return (
    <ContentInfoWapper className='center_wapper'>
      <SetionHeader title={goodPriceInfo.title} subtitle={goodPriceInfo?.subtitle}></SetionHeader>
      <RoomList roomslist = {goodPriceInfo.list} ></RoomList>
      <ShowAll/>
    </ContentInfoWapper>
  )
})

const ContentInfoWapper = styled.div`
margin-top:20px;


`

export default ContentInfo