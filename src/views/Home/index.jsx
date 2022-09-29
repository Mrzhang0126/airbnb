import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import { changeHeaderConfigAction } from '@/store/modules/main'
import { isEmptyO } from '@/utils'
import HomeBanner from './c-cpns/HomeBanner'
import HomeSectionV1 from './c-cpns/HomeSectionV1'
import HomeSectionV2 from './c-cpns/HomeSectionV2'
import HomeSectionV3 from './c-cpns/HomeSectionV3'
import HomeLongfor from './c-cpns/HomeLongfor'
import { HomeWrapper } from './style'

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction('xxx'))
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
        { isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>}
        { isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}/>}
        { isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo}/> }
        { isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/> }
        { isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}/> }
        { isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo}/> }
      </div>
    </HomeWrapper>
  )
})

export default Home