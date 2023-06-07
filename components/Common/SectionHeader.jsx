import React from 'react'

const SectionHeader = ({Heading,Subheading}) => {
  return (
    <>
        <h1 className='text-4xl font-medium'>{Heading}</h1>
            <h1 className='w-48 h-1 bg-indigo-700 rounded-full'></h1>
            <h4 className='text-xl font-light'>{Subheading}</h4>
    </>
  )
}

export default SectionHeader