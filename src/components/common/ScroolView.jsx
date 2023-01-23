// @ts-nocheck

import React, { memo, useRef, useState, useEffect } from 'react'
import styled from 'styled-components'


const ScroolView = memo((props) => {
  const [leftShow, setleftShow] = useState(false);
  const [rightShow, setrightShow] = useState(false);

  const posIndex = useRef(0);
  const totolwidths = useRef(0);
  const contentRef = useRef()
  useEffect(() => {
    const scroolwidth = contentRef.current.scrollWidth // 可滚动的宽度
    const currentwidth = contentRef.current.clientWidth // 可滚动的宽度
    const totolwidth = scroolwidth - currentwidth
    totolwidths.current = totolwidth
    console.log('totolwidth', totolwidth);
    setrightShow(totolwidth > 0)




  }, [props.children]);
  function ClickHandle(index) {
    const newIndex = posIndex.current + index
    posIndex.current = newIndex

    console.log('newIndex', newIndex);

    const newElm = contentRef.current.children[newIndex]
    contentRef.current.style.transform = `translate(-${newElm.offsetLeft}px)`


    setrightShow(totolwidths.current > newElm.offsetLeft)
    setleftShow(newElm.offsetLeft > 0)


  }

  return (
    <ScroolViewWapper>
      {leftShow && (<div className='buttonitem left' onClick={e => ClickHandle(-1)}>
        <svg viewBox="0 0 18 18" role="img" aria-hidden="false" aria-label="previous" focusable="false" style={{ height: '12px', width: '12px', display: 'block', fill: 'currentcolor' }}><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"></path></svg>
      </div>)}
      {
        rightShow && (<div className='buttonitem right' onClick={e => ClickHandle(1)}>
          <svg viewBox="0 0 18 18" role="img" aria-hidden="false" aria-label="next" focusable="false" style={{ height: '12px', width: '12px', display: 'block', fill: 'currentcolor' }}><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path></svg>
        </div>)
      }

      <div className="scrollWapper">
        <div className="content" ref={contentRef}>
          {props.children}
        </div>
      </div>
    </ScroolViewWapper>
  )
})

const ScroolViewWapper = styled.div`
position: relative;
margin:10px 0;
.scrollWapper {
overflow:hidden; 
.content {
  display:flex;
  transition:transform 250ms ease; 
  
  
}

  
}



.buttonitem {
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius:50%;
  border:1px solid #ededed;
  box-shadow:0 0 4px rgba(0,0,0,.18);
  line-height:28px;
  text-align: center;
  display:flex; 
  background-color:#fff;
  z-index:1;
  top:50%;
  transform: translate(0,-50%);
  
  svg {
    margin: auto;

  }
}

.left {
  left:-14px;
}
.right {
  right:-14px;

}

`

export default ScroolView