import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import styled from 'styled-components';
import ItemInfo from '../../../components/common/ItemInfo'
import SetionHeader from '../../../components/setionheader'

const Rooms = memo((props) => {

  // 从redux中获取数据
  const { roomList,totlePages } = useSelector((state) => ({ roomList: state.entire.roomList,totlePages: state.entire.totlePages}), shallowEqual)
  console.log('roomList', roomList);
  

  return (
    <RoomsWapper>
      <SetionHeader title={`共${totlePages}处住所`}/>
      <div className="list">
        {
          roomList?.list?.map(item => <ItemInfo itemData={item} itemNum={5} key={item.id} />)
        }
      </div>
      
       {/* <div className="ground_cover"></div> */}
      
      
    </RoomsWapper>
  )
})
const RoomsWapper = styled.div`
margin:0 auto;
width:80% ;
position: relative;
.list{
  display:flex;
  flex-wrap:wrap;
}
.ground_cover {
  position:absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color:rgba(255,255,255,.8)
} 



`

export default Rooms