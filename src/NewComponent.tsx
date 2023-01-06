import React from "react";
import {FilterType} from "./App";

type BanknotsType = {
  banknots: string
  value: number
  number: string
}

type MoneyType = {
  allMoney: Array<BanknotsType>
  clickFilter: (nameButton: FilterType)=> void
}

export const NewComponent = (props: MoneyType)=> {
  const onClickHandler = (nameButton: FilterType)=> {
    props.clickFilter(nameButton)
  }

  return (
    <>
      <ul>
        {props.allMoney.map((objFromMoneyArr, index) => {
          return (
            <li key={index}>
              <span> {objFromMoneyArr.banknots}</span>
              <span> {objFromMoneyArr.value}</span>
              <span> {objFromMoneyArr.number}</span>
            </li>
          )
        })}
      </ul>
      <div style={{marginLeft: '35px'}}>
        <button onClick={()=> onClickHandler('all')}>all</button>
        <button onClick={()=> onClickHandler('ruble')}>rubles</button>
        <button onClick={()=> onClickHandler('dollar')}>dollars</button>
      </div>
    </>
  )
}