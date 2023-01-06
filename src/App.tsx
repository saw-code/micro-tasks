import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

export type FilterType = 'all' | 'ruble' | 'dollar'

function App() {

  const [money, setMoney] = useState([
    {banknots: 'dollar', value: 100, number: ' a1234567890'},
    {banknots: 'dollar', value: 50, number: ' z1234567890'},
    {banknots: 'ruble', value: 100, number: ' w1234567890'},
    {banknots: 'dollar', value: 100, number: ' e1234567890'},
    {banknots: 'dollar', value: 50, number: ' c1234567890'},
    {banknots: 'ruble', value: 100, number: ' r1234567890'},
    {banknots: 'dollar', value: 50, number: ' x1234567890'},
    {banknots: 'ruble', value: 50, number: ' v1234567890'},
  ])

  const [filter, setFilter] = useState<FilterType>('all')

  let currentMoney = money

  if (filter === 'ruble') {
    currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'ruble')
  }

  if (filter === 'dollar') {
    currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'dollar')
  }

  const onClickFilterHandler = (nameButton: FilterType)=> {
    setFilter(nameButton)
  }

  return (
   <NewComponent allMoney={currentMoney} clickFilter={onClickFilterHandler}/>
  )
}

export default App;
