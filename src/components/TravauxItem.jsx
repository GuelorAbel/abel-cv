

export default function TravauxItem({ img, titre, url }) {
  // 1- états
  // 2- comportements
  // 3- rendu navigateur
  return (
    <div className="mx-auto md:hover:scale-105 ease-in duration-500 cursor-pointer">
        {/* Background image */}
        <div className="relative w-full h-auto group rounded-xl max-w-sm hover:bg-[#f3f4f6] hover:bg-opacity-40 hover:shadow-md hover:shadow-one/10 backdrop-blur-sm ease-in-out duration-300">
            <img src={img} alt={titre} className="rounded-xl group-hover:opacity-10" />
            <div className="hidden group-hover:flex absolute w-full h-full top-0 left-0 flex-col justify-center items-center">
                <h3 className="pb-4 text-xl uppercase font-bold text-[#1e293b]"> {titre} </h3>
                <button className="btn bg-[#1e293b] text-[#f3f4f6] hover:bg-[#ff7b00] hover:text-[#1e293b] ease-in duration-300 text-sm">
                    <a href={url} target="_blank">Voir le site</a>
                </button>
            </div>
        </div>
    </div>
  )
}
