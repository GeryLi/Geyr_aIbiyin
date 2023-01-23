import React, { memo } from 'react'
import styled from 'styled-components'

const WantTodoItem = memo((props) => {
    const { itemData } = props
    return (
        <WantTodoItemWapper>
            <div className="info">
                <div className="city">{itemData.city}</div>
                <div className="price">{itemData.price}</div>
            </div>
            <div className="pic">
                <div className="cover">
                    <img src={itemData.picture_url} alt={itemData.city} />
                </div>
                <div className="bg_cover"></div>
            </div>
        </WantTodoItemWapper>
    )
})

const WantTodoItemWapper = styled.div`
position: relative;
width: 20%;
flex-shrink: 0;
width: 194px;
height: 204px; 
margin:0 5px;
border-radius:3px; 
overflow:hidden;
&:first-child {
margin:0;    
}




.info {
    position: absolute;
    bottom:20%;
    left:50%;
    color: white;
    z-index:2;
    transform: translateX(-50%);
    text-align: center;
}

.pic {
    position:relative;
    width: 194px;
    height: 204px;

    img {
        width: 100%;
        height: 100%;
    }
    .bg_cover {
        position: absolute;
        left:0;
        bottom:0;
        height:60%;
        width: 100%;
        background-image: linear-gradient(-180deg,rgba(0,0,0,0) 10%,rgba(0,0,0,1) 100%) ;
       
        z-index:1;

    }
}
`

export default WantTodoItem