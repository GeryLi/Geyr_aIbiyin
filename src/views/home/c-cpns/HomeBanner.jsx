import React, { memo } from 'react'
import styled from 'styled-components';


const HomeBanner = memo(() => {
  return (
    <HomeBannerWapper></HomeBannerWapper>
  )
})
const HomeBannerWapper = styled.div`
height: 530px;
background: url(${require("@/assets/images/banner_bgc.jpg")}) center/cover;


`
export default HomeBanner