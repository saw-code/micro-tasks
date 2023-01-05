
type BodyType = {
  titleForBody: string
}
export function Body(props: BodyType) {
  return (
    <div>{props.titleForBody}</div>
  )
}