import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

const App = memo(() => {
  return (
    <div className='app'>
      <AppHeader/>
        <Suspense fallback={<h2>Loading</h2>}>
          {useRoutes(routes)}
        </Suspense>
      <AppFooter/>
    </div>
  )
})

export default App