import React, { memo, Suspense, } from 'react'
import styled from 'styled-components';
import HomeBanner from './c-cpns/HomeBanner';
import ContentInfo from './c-cpns/ContentInfo';
import HighScoreInfo from './c-cpns/HighScoreInfo';
import DiscuntInfo from './c-cpns/DiscuntInfo';
import RecommendInfo from './c-cpns/RecommendInfo';
import WantToDoInfo from './c-cpns/WantToDoInfo';




const Home = memo(() => {

  return (
    <HomeWapper>
      <Suspense fallback={<div>loading...</div>}></Suspense>
        <HomeBanner></HomeBanner>
        <DiscuntInfo></DiscuntInfo>
        <RecommendInfo></RecommendInfo>
        <WantToDoInfo></WantToDoInfo>
        <HighScoreInfo></HighScoreInfo>
        <ContentInfo></ContentInfo>
      <Suspense />
    </HomeWapper>
  )
})

const HomeWapper = styled.div`
`

export default Home