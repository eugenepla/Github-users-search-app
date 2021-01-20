import './styles.scss'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { ActionTypes } from '../../../store/search/types'

const View = ({
  search,
  fetchRepositories
}) => {
  const dispatch = useDispatch()
  const [searchQuery, setSearchQuery] = useState('')

  const changeSearchInput = (event) => {
    const { value } = event.target
    setSearchQuery(value)
  }

  const onEnterPress = (e) => {
    if (e.key === 'Enter') {
      dispatch({ type: ActionTypes.fetchRepositories, payload: searchQuery })
    }
  }

  return (
    <div className='input__container'>
      <input
        className='input'
        type={'text'}
        value={searchQuery}
        onKeyPress={onEnterPress}
        onChange={changeSearchInput}
      />
    </div>
  )
}

export { View }