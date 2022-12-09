type NewComponentType = {
  students?: Array<StudentType>,
  // students: StydentType[] второй вариант
  cars: Array<TopCarsType>

}

type StudentType = {
  id: number,
  name: string,
  age: number
}

type TopCarsType = {
  manufacturer: string,
  model: string
}

export const NewComponent = (props: NewComponentType) => {
  return (
    <table>
      {props.cars.map(el =>
        <tr>
          <th>{el.manufacturer}</th>
          <th>{el.model}</th>
        </tr>
      )}
    </table>
  )
}
