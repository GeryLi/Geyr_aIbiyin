import React, { memo } from 'react'

import styled from 'styled-components'
import HeaderLeft from './c-comp/HeaderLeft'
import HeaderMiddle from './c-comp/HeaderMiddle'
import HeaderRight from './c-comp/HeaderRight'




const index = memo(() => {
  return (
    <HeaderDiv>
      <HeaderLeft />
      <HeaderMiddle />
      <HeaderRight />
    </HeaderDiv>
  )
})

const HeaderDiv = styled.div`
    display:flex;
    height:80px;
    justify-content:space-between;
    align-items:center;
    border-bottom: 1px solid #eee;

`

export default index