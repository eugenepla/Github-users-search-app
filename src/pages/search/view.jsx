import './styles.scss'
import React from "react"
import {
  Header,
  SearchInput,
  Card
} from '../../components'

const View = ({ repositoriesList }) => {

  console.log('repositoriesList', repositoriesList)

  return (
    <div className='content'>
      <Header />
      <div className='content__main'>
        <div className='content__main__left'>
          <SearchInput />
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