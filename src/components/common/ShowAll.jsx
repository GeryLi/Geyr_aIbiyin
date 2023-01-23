import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ShowAll = memo((props) => {
    const {title} = props
    const showELect = ()=>{
        if(title){
            return <div className='other'> { `显示${title}房源 >` } </div>
        }else{
            return <div>{`显示全部 >`}</div>
        }
    }

    const navigate = useNavigate()

    const jumpAll = ()=>{
        navigate("/entire")

    }

    

    return (
        <ShowAllWapper >
            <div className="info" onClick={jumpAll}>
                  {
                    showELect()
                  }

            </div>
        </ShowAllWapper>
    )
})
const ShowAllWapper = styled.div`
.info {
    padding:10px 0;
    font-weight:600;
    font-size:17px;
    cursor: pointer;
    &:hover {
        text-decoration: underline ;
    }


}
.other {
    color:#008489;
}
`
export default ShowAll