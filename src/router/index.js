import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('@/views/Home'))
const Entire = lazy(() => import('@/views/Entire'))
const Detail = lazy(() => import('@/views/Detail'))
const Demo = lazy(() => import('@/views/Demo'))
const ScrollTest = lazy(() => import('@/views/ScrollTest'))
const RichTextEditor = lazy(() => import('@/views/RichTextEditor'))

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
  {
    path: '/demo',
    element: <Demo/>
  },
  {
    path: '/test',
    element: <ScrollTest/>
  },
  {
    path: '/editor',
    element: <RichTextEditor/>
  }
]

export default routes