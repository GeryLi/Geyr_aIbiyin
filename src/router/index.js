import React from "react"
import { Navigate } from "react-router-dom"


// @ts-ignore
const Home = React.lazy(() => import('@/views/home'))
// @ts-ignore
const Entire = React.lazy(() => import('@/views/entire'))
// @ts-ignore
const Detail = React.lazy(() => import('@/views/detail'))

export const routes = [
    {
        path:'',
        element:<Navigate to="/home"/>
    },

    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/entire',
        element: <Entire/>
    },
    {
        path: '/detail',
        element: <Detail/>
    }
]