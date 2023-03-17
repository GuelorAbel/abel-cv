
export default function Title({ children }) {
// Eléments d'affichage
  return (

    <div className="py-4">
        <h2 className="sm:text-4xl text-3xl font-semibold uppercase text-center text-[#1e293b]"> {children} </h2>
        <div className="bg-[#ff7b00] w-8 h-2 mx-auto mt-1"></div>
    </div>
  )
}
