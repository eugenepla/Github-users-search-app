import './styles.scss'
import React from "react"
import { APP_NAME } from '../../../constants/env'

const View = () => {
  return (
    <div className='header'>
      <div className='header__content'>
        <span>Requestum</span>
        <span className='title'>{APP_NAME}</span>
      </div>
      <hr className='divider' />
    </div>
  )
}

export { View }