import './styles.scss'
import React, { useEffect } from "react"
import {
  Header,
  Input,
  Card
} from '../../components'

const View = () => {

  useEffect(() => {

  }, [])

  return (
    <div className='content'>
      <Header />
      <div className='content__main'>
        <div className='content__main__left'>
          <Input />
        </div>
        <div className='content__main__right'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export { View };