import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { changeHeaderConfigAction } from '@/store/modules/main'

import DetailInfo from './c-cpns/DetailInfo'
import DetailPicture from './c-cpns/DetailPicture'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailPicture/>
      <DetailInfo/>
    </DetailWrapper>
  )
})

export default Detail
