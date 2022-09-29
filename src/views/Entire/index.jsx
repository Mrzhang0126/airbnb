import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire'
import { changeHeaderConfigAction } from '@/store/modules/main'

import EntireFilter from './c-cpns/EntireFilter'
import EntirePagination from './c-cpns/EntirePagination'
import EntireRooms from './c-cpns/EntireRooms'
import { EntireWrapper } from './style'

const Entire = memo(() => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction(0))
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }))
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire