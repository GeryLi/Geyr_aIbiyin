// @ts-nocheck
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useSelector,shallowEqual} from 'react-redux'
import RoomList from '../../../components/common/RoomList'
import ShowAll from '../../../components/common/ShowAll'
import SetionHeader from '../../../components/setionheader'

const HighScoreInfo = memo((props) => {
    
    const {hightScoreInfo}= useSelector((state)=>({ hightScoreInfo:state.home.hightScoreInfo }),shallowEqual)
    console.log(hightScoreInfo);
  return (
    <div className='center_wapper' style={{ marginTop:'20px' }}>

      <SetionHeader title={hightScoreInfo?.title}></SetionHeader>
      <RoomList roomslist = {hightScoreInfo.list}></RoomList>
      <ShowAll/>
    </div>
  )
})

HighScoreInfo.propTypes = {
    hightScoreInfo:PropTypes.object

}

export default HighScoreInfo