import Link from "next/link"

const ListItemOne=['Who We Are', 'Our Team', 'Talk To Experts','Privacy & Policy','Terms & Conditions' ]
const ListItemTwo=['Earn As a Designer', 'Earn as a Ammassador', 'Start as a Seller','Design Libary' ]
const Footer = () => {
  return (
    <div className="bg-indigo-500 py-10 px-10 text-center sm:text-left flex flex-col sm:flex-row sm:justify-evenly md:justify-between
    ">
        <div className="hidden md:block">
            <h1 className="text-4xl italic text-white font-bold mb-5">ModOutFit</h1>
            <h4 className="text-white"><span>🏠  Address: </span>Rajshahi</h4>
            <h4 className="text-white"><span>📞  Phone: </span>+880187457527</h4>
            <h4 className="text-white"><span>📧  Email: </span>@modoutfit@gmail.com</h4>
        </div>
        <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-white mb-3 ">Keep Exploring</h1>
        <ul className="">
            {ListItemOne.map((item)=>(
                <li key={crypto.randomUUID()} className="text-white "><Link href={`/${item.toLowerCase().replace(/\s/g, '')}`}><span className="hidden sm:inline-block mr-2">➡️ </span>{item}</Link></li>
            ))}
        </ul>
        </div>
        <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-white mb-3 mt-7 sm:mt-0">Opportunities</h1>
        <ul className="">
            {ListItemTwo.map((item)=>(
                <li key={crypto.randomUUID()} className="text-white "><Link href={`/${item.toLowerCase().replace(/\s/g, '')}`}><span className="hidden sm:inline-block mr-2">➡️ </span> {item}</Link></li>
            ))}
        </ul>
        </div>
    </div>
  )
}

export default Footer