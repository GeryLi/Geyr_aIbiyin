import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import Addressicon from '../../../assets/svg/icon_addressIcon'



const HeaderRight = memo(() => {
  const [showPenal, setshowPenal] = useState(false);

  useEffect(() => {
    function windowclick(){
      setshowPenal(false)
    }
    window.addEventListener('click',windowclick,true)
    return ()=>{
      window.removeEventListener('click',windowclick,true)
    }
  },
  
   []);

  function changeShowPenal(e){
    console.log(e);
    setshowPenal(!showPenal)
    e.nativeEvent.stopImmediatePropagation()
  }
  return (

    <HeaderRightDiv>
      <div className='content'>登录</div>
      <div className='content'>注册</div>
      <div className='content'>
        <Addressicon />
      </div>
      <div className="menu" onClick={(e)=>changeShowPenal(e)}>

        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: '3', overflow: 'visible' }}><g fill="none" fillRule="nonzero"><path d="m2 16h28"></path><path d="m2 24h28"></path><path d="m2 8h28"></path></g></svg>

        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '30px', width: '30px', fill: 'currentcolor' }}><path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path></svg>
        {
          showPenal && (
            <div className="panel">
              <div className="top">
                <div className="regest item">注册</div>
                <div className="login item">登录</div>
              </div>
              <div className="bottom">
                <div className="item">来爱彼迎发布房源</div>
                <div className="item">开展体验</div>
                <div className="item">帮助</div>
              </div>
            </div>
          )
        }

      </div>


    </HeaderRightDiv>
  )
})

const HeaderRightDiv = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
    text-align:center;
    font-size:14px;
    font-weight: 700;
    
    .content {
      height: 18px;
      line-height: 18px;
      padding:12px 15px;
      cursor: pointer;
      border-radius: 22px;
      transition:background-color 200ms ;
      box-sizing: content-box;

      &:hover {
        background-color: #f5f5f5;
      }
      
    }
    .icon {
      text-align: center;
    }

    .menu {
      position: relative;
      display:flex;
      align-items: center;
      width: 65px;
      color:#717171;
      justify-content:space-evenly;
      margin-right: 24px;
      cursor: pointer;
      border:1px solid #ddd;
      border-radius: 22px;
      ${props => props.theme.mixin.boxShadow};
      
    }
    .panel {
      position:absolute;
      padding:15px 0;
      right: 0;
      top: 50px;
      width: 240px;
      background-color:#ffffff;
      box-shadow:0 0 6px rgba(0,0,0,.18);
      border-radius: 10px;
      .top{
        border-bottom:1px solid #ddd;
        padding-bottom:10px;
      }
      .bottom {
        padding-top:10px
      }
      .item{
        height: 40px;
        line-height:40px;
        padding: 0 15px;
        text-align:start;
        &:hover{
          background-color:#f5f5f5;
        }
      }
      
    }

`

export default HeaderRight