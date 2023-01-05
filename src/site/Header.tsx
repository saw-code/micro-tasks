type HeaderType = {
  title: string
}
export function Header(props: HeaderType) {
  return (
    <>
      {props.title}
    </>
  )
}