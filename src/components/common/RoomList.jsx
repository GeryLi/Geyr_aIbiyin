// @ts-nocheck
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import ItemInfo from './ItemInfo'
import styled from 'styled-components'

const RoomList = memo((props) => {
    const {roomslist=[]} = props
    return (
            <RoomlistWapper >
                {roomslist?.slice(0, 8)?.map((item) => <ItemInfo itemData={item} key={item.id} {...props}/>)}
            </RoomlistWapper>     
    )
})

const RoomlistWapper = styled.div`

  display:flex; 
  flex-wrap:wrap;
  margin-left:-8px;
`
// @ts-ignore
RoomList.propTypes = {
    roomslist: PropTypes.array
}

export default RoomList