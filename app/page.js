import SectionHeader from "@/components/Common/SectionHeader";
import Hero from "@/components/Hero";
import CatagorySection from "@/components/ProductCatagorySection";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineDoubleRight } from "react-icons/ai";

export default function Home() {


return(
  <>
  <div className="mb-60 md:mb-0">
  <Hero/>
  </div>
  
  <div className="my-20">
  <div className="flex flex-col justify-center items-center space-y-4 mb-24 w-3/4 md:w-3/5 mx-auto text-center my-10">
      <SectionHeader Heading={'Shop our Category'} Subheading={'Create your own shirts and more in our online design studio.'}/>
    </div>
  <CatagorySection/>
  </div>

  <div className="my-20">
    <div className="flex flex-col justify-center items-center space-y-2 w-3/4 md:w-3/5 mx-auto text-center my-10">
      <SectionHeader Heading={'DESIGN T-SHIRTS ONLINE'} Subheading={'Create your own shirts and more in our online design studio.'}/>
    </div>

    <div className="flex flex-col md:flex-row md:gap-3">
      <div className="shadow">
        <Image src={'/Home1.jpg'} alt="Hogg" width={1320} height={600}/>
      </div>
      <div className="mx-0 md:mx-4 shadow pl-10 pb-10">
        <div className="mt-4">
        <h1 className="text-xl font-bold text-indigo-700">Add and Manipulate Text</h1>
        <p className="mt-1 text-base">ith just a few clicks, our tools let you fine-tune and add personality to your designs to make a big, bold statement</p>
        </div>
        <div className="mt-4">
        <h1 className="text-xl font-bold text-indigo-700">Free Tenmplate or Upload Your Own</h1>
        <p className="mt-1 text-base">ith just a few clicks, our tools let you fine-tune and add personality to your designs to make a big, bold statement</p>
        </div>
        <div className="mt-4">
        <h1 className="text-xl font-bold text-indigo-700">Design Amazing Color Schemes</h1>
        <p className="mt-1 text-base">ith just a few clicks, our tools let you fine-tune and add personality to your designs to make a big, bold statement</p>
        </div>
        <button className="bg-indigo-700 hover:bg-indigo-400 text-white hover:text-black font-semibold flex py-2 px-4 rounded-lg"><Link href='/designnow'>Go To Design studio <AiOutlineDoubleRight size={24} color='#fff' className='ml-2 inline-block'/></Link></button>
      </div>

    </div>
  </div>
  
   
  </>
)
}
