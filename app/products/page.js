'use client'
import { useProductContext,ADD_CATEGORY, REMOVE_CATEGORY, ADD_RANGE, REMOVE_RANGE } from '@/context/ProductContex';
import Image from 'next/image'
import Link from 'next/link';


export default function Home() {
  const { state, dispatch } = useProductContext();
  const { productdata, selectCatagory, selectRange, filter } = state;

  const getUniqueCat = (data, field) => {
    let newEle = data.map((currEle) => {
      return currEle[field];
    });
    return (newEle = [...new Set(newEle)]);
  };

  const catagoryName = getUniqueCat(productdata, 'category');
  const rangeName = getUniqueCat(productdata, 'range');

  const handleCatagory = (e) => {
    const category = e.target.value;
    if (e.target.checked) {
      dispatch({ type: ADD_CATEGORY, payload: category });
    } else {
      dispatch({ type: REMOVE_CATEGORY, payload: category });
    }
  };

  const handleRange = (e) => {
    const rangee = e.target.value;
    if (e.target.checked) {
      dispatch({ type: ADD_RANGE, payload: rangee });
    } else {
      dispatch({ type: REMOVE_RANGE, payload: rangee });
    }
  };

  const handleNameFilter = (product) => {
    const { name } = filter;
    if (name) {
      return product.title.toLowerCase().includes(name.toLowerCase());
    }
    return true;
  };

  const filteredProducts = productdata.filter((item) => {
    if (filter.category && filter.range) {
      return item.category === filter.category && item.range === filter.range && handleNameFilter(item);
    } else if (filter.category) {
      return item.category === filter.category && handleNameFilter(item);
    } else if (filter.range) {
      return item.range === filter.range && handleNameFilter(item);
    }
    return handleNameFilter(item);
  });

  return (
    <div className='flex justify-center flex-col mt-10 lg:flex-row mx-auto items-start md:w-11/12'>
      <div className='md:w-3/12 w-full flex flex-col px-4 justify-center items-start mx-auto'>
        {/* Catagory-1 */}
        <div className='w-full'>
          <div className='text-xl mx-auto text-center py-2 w-auto bg-purple-200 text-purple-800'>
            Available Products
          </div>
          <ul className='text-left space-y-1 py-5'>
            {catagoryName.map((item, idx) => (
              <li
                key={idx}
                className='text-base space-x-4 text-left font-medium flex justify-start items-center'
              >
                <div>
                  <input
                    className='h-6 w-5 mt-2 cursor-pointer'
                    type='checkbox'
                    value={item}
                    checked={selectCatagory.includes(item)}
                    onChange={handleCatagory}
                  />
                </div>
                <div className='capitalize'>{item}</div>
              </li>
            ))}
          </ul>
        </div>
        {/* Catagory-2 */}
        <div className='mt-8 w-full'>
          <div className='text-lg mx-auto text-center py-2 w-auto bg-green-200 text-green-800'>
            Price Range
          </div>
          <ul className='text-left space-y-1 py-5'>
            {rangeName.map((item, idx) => (
              <li
                key={idx}
                className='text-base space-x-4 text-left font-medium flex justify-start items-center'
              >
                <div>
                  <input
                    className='h-6 w-5 mt-2 cursor-pointer'
                    type='checkbox'
                    value={item}
                    checked={selectRange.includes(item)}
                    onChange={handleRange}
                  />
                </div>
                <div className='capitalize'>{item}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='lg:w-9/12 w-full px-6 mx-auto ProductContainer'>
        <ul className='my-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8'>
          {filteredProducts.map((item, idx) => (
            <li
              key={idx}
              className='group relative shadow-2xl hover:shadow-sm'
            >
              <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-48'>
                <Image
                  src={item.image}
                  alt='product'
                  className='w-full h-full object-contain'
                  width={200}
                  height={80}
                />
              </div>
              <div className='mx-3 my-4 flex flex-col justify-center'>
            <h3 className="text-sm text-gray-700 w-[80%] h-8">
              <Link href="/">
                {item.title}
              </Link>
            </h3>

            <button className='bg-indigo-700 hover:bg-indigo-500 py-1 px-4 text-sm my-2 rounded'>Design Now</button>
          </div>
              <div className="my-4 mx-3 flex justify-between">
          <p className="text-sm text-gray-500">Rating: {item.rating.rate}</p>
          <p className="text-sm font-medium text-gray-900">{item.price} TK</p>
        </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
