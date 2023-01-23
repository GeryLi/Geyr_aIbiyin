import React, { memo } from 'react'

const Footerlist = memo((props) => {
    const { lists,title } =props
  return (
    <ul>
        <li className='title'>{title}</li>
        {lists.map(item=>  <li key={item}>{item}</li> )}
    </ul>
  )
})


export default Footerlist