import Image from 'next/image'
import {AiOutlineDoubleRight} from 'react-icons/ai'
const Hero = () => {
  return (
    <div className='relative md:flex flex-row-reverse md:py-6'>
        <div className='w-full'>
        
        <Image src={'/Home1.jpg'} alt='Home' width={1328} height={640} className='hidden md:block w-[1328px] h-[440px] object-contain'/>
        
        <Image src={'/Home1.jpg'} alt='Hom1e' width={800} height={400} className='block md:hidden'/>
        </div>
        <div className='px-4 py-8 shadow-lg my-3 rounded-lg border  mx-4 flex flex-col justify-center text-center items-center space-y-5 absolute -bottom-40 sm:left-7 inset-x-auto  bg-white md:relative md:border-none md:py-0 md:shadow-none md:bottom-0'>
            <h1 className='text-4xl font-medium'>CUSTOM T-SHIRTS</h1>
            <h1 className='w-48 h-1 bg-indigo-700 rounded-full'></h1>
            <h4 className='text-xl font-light'>Create your own t-shirts, tanks, hoodies and more in our online design studio.</h4>
            <button className='bg-indigo-700 hover:bg-indigo-400 text-white hover:text-black font-semibold flex py-2 px-4 rounded-lg'>Create Your Shirt<AiOutlineDoubleRight size={24} color='#fff' className='ml-2'/></button>
        </div>
    </div>
  )
}

export default Hero