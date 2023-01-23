// @ts-nocheck
import React, { memo ,useCallback,useState} from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import RoomList from '../../../components/common/RoomList'
import ShowAll from '../../../components/common/ShowAll'
import Tabs from '../../../components/common/Tabs'
import SetionHeader from '../../../components/setionheader'

const DiscuntInfo = memo((props) => {
    const {discountInfo}= useSelector((state)=>({ discountInfo:state.home.discountInfo }),shallowEqual)
    const [tabIndex, setTabIndex] = useState(0);
    const tabTitle = discountInfo?.dest_address?.map(item=>item.name)
    const tabclick = useCallback((index)=>{
      setTabIndex(index)
    },[])
    const title = tabTitle?.[tabIndex]

    
  return (
    <div className='center_wapper'>
        <SetionHeader title={discountInfo?.title} subtitle={discountInfo?.subtitle}></SetionHeader>
        <Tabs tabTitle={tabTitle} changeRoomList={tabclick} ></Tabs>
        <RoomList roomslist={discountInfo.dest_list?.[title].slice(0,6)} itemNum={3} ></RoomList>
        <ShowAll title={title}/>
    </div>
  )
})


export default DiscuntInfo