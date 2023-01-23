import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './router'
import Header from './components/header'
import 'antd/dist/reset.css';
import Footer from './components/footer';
const App = memo(() => {
  return (
    <div className='app'>
      <div className="header">
        <Header/>
      </div>
      <div className="content">

        <Suspense fallback={ <div>loading...</div> }>
        { useRoutes(routes) }
        </Suspense>
      </div>
      <div className="footer ">
        <Footer></Footer>
      </div>
    </div>
  )
})

export default App