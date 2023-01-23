import React, { memo } from 'react'
import styled from 'styled-components'


const HeaderMiddle = memo(() => {
  return (
    <HeaderMiddleDiv>
      <div className="text">
        搜索房源和体验
      </div>
      <div className="btn">
        <div className="icon">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display:'block',fill:'none',height:'12px',width:'12px',stroke:'currentColor',strokeWidth:'5.333333333333333',overflow:'visible'}} aria-hidden="true" role="presentation" focusable="false"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
        </div>
      </div>
    </HeaderMiddleDiv>
  )
})
const HeaderMiddleDiv = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 30px;
    box-sizing:border-box;
    padding:0 5px 0 15px;
    font-size:14px;
    font-weight: 700;
    ${props => props.theme.mixin.boxShadow};




    .btn {
      display:flex;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color:#FF385C;
      box-sizing:border-box;
      
      
      
    }


    .icon {
      margin: auto;
      color:white
    }


`


export default HeaderMiddle