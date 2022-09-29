import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import IconLogo from '@/assets/svg/icon_logo'
import { HeaderLeftWrapper } from './style'

const HeaderLeft = memo(() => {

  const navigate = useNavigate()
  function logoClickHandle() {
    navigate("/home")
  }

  return (
    <HeaderLeftWrapper>
      <div className='logo' onClick={logoClickHandle}>
        <IconLogo/>
      </div>
    </HeaderLeftWrapper>
  )
})

export default HeaderLeft