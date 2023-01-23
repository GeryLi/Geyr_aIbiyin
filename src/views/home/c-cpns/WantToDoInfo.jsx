
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ScroolView from '../../../components/common/ScroolView'
import WantTodoItem from '../../../components/common/WantTodoItem'
import SetionHeader from '../../../components/setionheader'

const WantToDoInfo = memo((props) => {
    const { wantTodoInfo } = useSelector((state) => ({ wantTodoInfo: state.home.wantTodoInfo }))
    return (
        <WantToDoInfoWapper className='center_wapper'>
            <SetionHeader title={wantTodoInfo.title} subtitle={wantTodoInfo.subtitle}></SetionHeader>
            <div className="wanttodo_list">
                <ScroolView>
                {
                    wantTodoInfo?.list?.map(item=> <WantTodoItem itemData={item} key={item.city}/> )
                }
                </ScroolView>
            </div>
            
        </WantToDoInfoWapper>
    )
})

const WantToDoInfoWapper = styled.div`

.wanttodo_list {
    
} 
`



export default WantToDoInfo