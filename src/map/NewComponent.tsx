type NewComponentType = {
  students: Array<StudentType>
  // students: StydentType[] второй вариант
}

type StudentType = {
  id: number,
  name: string,
  age: number
}

export const NewComponent = (props: NewComponentType) => {
  return (
    <div>
      <ul>
        {props.students.map((el, index) => {
          return (
            <li key={el.id}>
              <span>{el.name}</span>
              <span> age: {el.age}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}