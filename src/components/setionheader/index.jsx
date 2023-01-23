// @ts-nocheck
import React, { memo } from 'react'
import styled from 'styled-components'


const SetionHeader = memo((props) => {
    const {title,subtitle} = props
  return (

    <SetionHeaderWapper>
        <div className='title'>{title}</div>
       {subtitle && <div className='subtitle'>{subtitle}</div>}
    </SetionHeaderWapper>
  )
})

const SetionHeaderWapper = styled.div`
color:rgb(34,34,34);
font-size: 22px;
font-weight:600;
.subtitle {
  font-size: 16px;
  font-weight:300;
  margin:10px 0;
}

`
export default SetionHeader