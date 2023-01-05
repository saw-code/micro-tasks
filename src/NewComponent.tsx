import React from "react";

type MoneyType = {
  money: Array<ArrayObjectType>
}

type ArrayObjectType = {
  banknots: string,
  value: number,
  number: string
}
export const NewComponent = (props: MoneyType) => {
  return (
    <>
      <ul>
        {currentMoney.map((objFromMoneyArr, index) => {
          return (
            <li key={index}>
              <span>{objFromMoneyArr.banknots}</span>
              <span>{objFromMoneyArr.value}</span>
              <span>{objFromMoneyArr.number}</span>
            </li>
          )
        })}
      </ul>
      <div style={{marginLeft: '35px'}}>
        <button onClick={() => onClickFilterHandler('All')}>All</button>
        <button onClick={() => onClickFilterHandler('RUBLS')}>Rubles</button>
        <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
      </div>
    </>
  )
}