// @ts-nocheck
import React, { memo ,useCallback,useState} from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import RoomList from '../../../components/common/RoomList'
import ShowAll from '../../../components/common/ShowAll'
import Tabs from '../../../components/common/Tabs'
import SetionHeader from '../../../components/setionheader'

const RecommendInfo = memo((props) => {
    const {recommendInfio}= useSelector((state)=>({ recommendInfio:state.home.recommendInfio }),shallowEqual)
    const [tabIndex, setTabIndex] = useState(0);
    const tabTitle = recommendInfio?.dest_address?.map(item=>item.name)
    const tabclick = useCallback((index)=>{
      setTabIndex(index)
    },[])

    const title = tabTitle?.[tabIndex]

    
  return (
    <div className='center_wapper'>
        <SetionHeader title={recommendInfio?.title} subtitle={recommendInfio?.subtitle}></SetionHeader>
        <Tabs tabTitle={tabTitle} changeRoomList={tabclick} ></Tabs>
        <RoomList roomslist={recommendInfio.dest_list?.[title].slice(0,6)} itemNum={3} ></RoomList>
        <ShowAll title={title}/>
    </div>
  )
})


export default RecommendInfo