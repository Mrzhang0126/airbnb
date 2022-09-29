import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'

import SectionHeader from '@/components/SectionHeader'
import SectionRooms from '@/components/SectionRooms'
import SectionTabs from '@/components/SectionTabs'
import { SectionV2Wrapper } from './style'
import SectionFooter from '@/components/SectionFooter'

const HomeSectionV2 = memo((props) => {
  /** 从props获取数据 */
  const { infoData } = props

  /** 定义内部的state */
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName)
  const tabNames = infoData.dest_address?.map(item => item.name)
  // useEffect(() => {
  //   setName("xxxxx")
  // }, [infoData])

  /** 事件处理函数 */
  const tabClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33333%"/>
      <SectionFooter name={name}/>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2