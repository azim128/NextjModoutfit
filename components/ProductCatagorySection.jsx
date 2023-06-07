'use client'
import { useProductContext } from "@/context/ProductContex";
import CardCategory from "./Common/CardCategory";

const CatagorySection = () => {
    const { state} = useProductContext();
  const { productdata } = state;

  const getUniqueCat = (data, field) => {
    let uniqueCategories = [...new Set(data.map((currEle) => currEle[field]))];
    let categoriesWithImage = uniqueCategories.map((category) => {
      let categoryWithImage = data.find((currEle) => currEle[field] === category);
      let imagePath = categoryWithImage.image;
      return { category:category, imagePath:imagePath };
    });
    return categoriesWithImage;
  };
  
  
  
  const catagoryName = getUniqueCat(productdata, 'category');
  console.log(catagoryName)
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 my-8 mx-4 gap-3 gap-y-20">
        {catagoryName.map((item)=>(
            <CardCategory Catagory={item.category} key={crypto.randomUUID()} catImg={item.imagePath} />
        ))}
        
    </div>
  )
}

export default CatagorySection