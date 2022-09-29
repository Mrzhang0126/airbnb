import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('@/views/Home'))
const Entire = lazy(() => import('@/views/Entire'))
const Detail = lazy(() => import('@/views/Detail'))

const routes = [
  {
    path: '/',
    element: <Navigate to='/home'/>
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
  },
]

export default routes