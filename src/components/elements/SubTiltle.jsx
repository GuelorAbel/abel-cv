

export default function SubTiltle({ children, className }) {
  return (
    <h3 className={`${className} sm:text-xl text-lg uppercase underline underline-offset-4`}> {children} </h3>
  )
}
