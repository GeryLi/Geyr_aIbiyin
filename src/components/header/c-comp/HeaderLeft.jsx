import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import IconLogo from '../../../assets/svg/icon_svg'



const HeaderLeft = memo((props) => {
  const Navigate = useNavigate()
  function gotoHome(){
    Navigate("home")
  }

  return (
    <HeaderLeftDiv>
      <div className='logo' onClick={gotoHome}>
        <IconLogo />
      </div>
    </HeaderLeftDiv>
  )
})



const HeaderLeftDiv = styled.div`
    flex:1;
    /* color:#ff385c;  */
    color:${props => props.theme.color.primaryColor}; 

    display:flex;

    .logo {
      margin-left:24px;
      cursor:pointer;
    }
   

    
`

export default HeaderLeft