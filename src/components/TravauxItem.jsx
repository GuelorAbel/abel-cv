

export default function TravauxItem({ img, titre, url }) {
  return (
    <div className="mx-auto md:hover:scale-105 ease-in duration-500">
        {/* Background image */}
        <div className="relative w-full h-auto group shadow-lg shadow-gray-300 rounded-xl max-w-sm hover:bg-gradient-to-tl from-[#f3f4f6] to-[#ff7b00] ease-in-out duration-300">
            <img src={img} alt={titre} className="rounded-xl group-hover:opacity-10" />
            <div className="hidden group-hover:flex absolute w-full h-full top-0 left-0 flex-col justify-center items-center">
                <h3 className="pb-4 text-xl uppercase font-bold"> {titre} </h3>
                <button className="btn bg-[#1e293b] text-[#f3f4f6] hover:bg-[#ff7b00] hover:text-[#1e293b] ease-in duration-300 text-sm">
                    <a href={url} target="_blank">Voir le site</a>
                </button>
            </div>
        </div>
    </div>
  )
}
