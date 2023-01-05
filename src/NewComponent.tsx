import React from "react";

type StudentType = {
  id: number
  name: string
  age: number
}

type TopCarsType = {
  manufacturer: string
  model: string
}

type NewComponentType = {
  students: Array<StudentType>
  topCars: Array<TopCarsType>
  // students: StudentType[] второй вариант как можно протипизировать
}

export function NewComponent(props: NewComponentType) {

  return (
    <>
      <ul>
        {props.students.map((objectFromStudentArray, index) => {
          return (
            <li key={objectFromStudentArray.id}>
              <span>{objectFromStudentArray.name}</span>
              <span>age: {objectFromStudentArray.age}</span>
            </li>
          )
        })}
      </ul>

      <table>
        {props.topCars.map((objectFromTopCarArray, index) => {
          return (
            <>
              <tr>
                <th>{objectFromTopCarArray.manufacturer}</th>
                <th>{objectFromTopCarArray.model}</th>
              </tr>
            </>
          )
        })}
      </table>
    </>
  )
}
