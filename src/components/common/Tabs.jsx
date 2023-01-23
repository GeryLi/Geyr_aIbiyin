// @ts-nocheck
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import ScroolView from './ScroolView'


const Tabs = memo((props) => {
    const {tabTitle=[]} = props
    const [current, setCurrent] = useState(0);
    function changeCurrent(index){
      setCurrent(index)
      props.changeRoomList(index)
    }
  return (
    <TabsWapper className='center_wapper'>
        <ScroolView>
        {
            tabTitle?.map((itme,index) => <div key={itme} className={classNames("item",{active:current===index})} onClick={e=>changeCurrent(index)}  >{itme}</div> )
        } 
        </ScroolView>
    </TabsWapper>
  )
})

Tabs.propTypes = {
    tabTitle:PropTypes.array
}
const TabsWapper = styled.div`


.item {
  min-width:120px;
  height:48px;
  line-height:48px;
  text-align: center;
  margin:10px 5px;
  font-size:17px;
  font-weight:700;
  color:black;
  border: solid 0.5px #D8D8D8;
  border-radius:4px;
  transition: all 0.5s;
  padding:0 5px;
  box-sizing:content-box;
  box-shadow: 0px 3px 6px rgb(0 0 0 / 15%);



  &:hover{
    box-shadow: 0px 3px 6px rgb(0 0 0 / 15%);
    color:#fff ;
  background-color:#00848A ;

  }
  &:first-child{
    margin-left:0px;
  }
  

}
.item.active {
  color:#fff ;
  background-color:#00848A ;

}

`

export default Tabs