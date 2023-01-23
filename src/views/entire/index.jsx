import React, { memo, useEffect } from 'react'
import {  useDispatch } from 'react-redux'
import {  fetchEntiredDataAction } from '../../store/modules/entire'
import FilterCtrl from './c-cpns/FilterCtrl'
import FooterPagination from './c-cpns/FooterPagination'

import Rooms from './c-cpns/Rooms'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchEntiredDataAction())

  }, [dispatch]);

  
  return (
    <div >
      <FilterCtrl />
      <Rooms />
      <FooterPagination/>
      
    </div>
  )
})

export default Entire