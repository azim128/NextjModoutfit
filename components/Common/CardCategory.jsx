import Image from "next/image"

const CardCategory = ({Catagory,catImg}) => {
  return (
    <div className="relative shadow-lg border w-full flex flex-col justify-center items-center py-8 px-4 rounded-xl bg-indigo-200 text-indigo-900">
        <div className="absolute -top-16">
            <Image src={catImg} alt='next' width={112} height={112} className="w-28 h-28 p-2 border rounded-full bg-slate-400"/>
        </div>
        <div className="mt-5 text-center">
        <h1 className="text-2xl font-medium uppercase">{Catagory}</h1>
        <h1> subtitle</h1>
        </div>
    </div>
  )
}

export default CardCategory