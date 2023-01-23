import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeCurrentPage, fetchEntiredDataAction } from '../../../store/modules/entire';






const FooterPagination = memo((props) => {
  const { totlePages } = useSelector((state) => ({ totlePages: state.entire.totlePages }), shallowEqual)
  
  const pages = Math.ceil(totlePages/20)
  const dispatch = useDispatch()
  
  function handlechange(e,value){
    window.scrollTo(0,0)
    dispatch( changeCurrentPage(value-1) )
    dispatch( fetchEntiredDataAction() )

    
    
  }
  return (
    <FooterPaginationWapper>
        <Pagination count={pages} onChange={ handlechange } className='btncolor' />
    </FooterPaginationWapper>
  )
})
const FooterPaginationWapper = styled.div`
display:flex;
justify-content:center;
margin: 15px 0;

.btncolor .MuiPaginationItem-page.Mui-selected {
  color:#fff;
  background-color:#222;
 }
`


export default FooterPagination