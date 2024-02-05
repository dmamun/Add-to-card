import React, { useEffect, useState } from "react";

const Fav = () => {
  const [favorities, setFavorities] = useState([]);
  const [totalPrice,setTotalPrice]=useState(0);
  
  
  useEffect(() => {
    const favoriteItem = JSON.parse(localStorage.getItem("fav"));
    setFavorities(favoriteItem);
    const total=favorities.reduce((preValue,currentValue)=>preValue+currentValue.price,0);
    setTotalPrice(total)
   
    

  }, [favorities]);
  const handleRemove=()=>{
    localStorage.clear();
    setFavorities([])
  }
 
  // {
  //     "id": "1",
  //     "image": "https://static-01.daraz.com.bd/p/b802b8ebb0a784ec791caa75e2d4de66.jpg",
  //     "phone_name": "iPhone 14 Pro Max",
  //     "brand_name": "Apple",
  //     "price": 799.99,
  //     "rating": 4.7
  //   },
  return (
    <div>
       {
            favorities.length>0 && <button className="btn btn-active btn-neutral flex justify-center" onClick={handleRemove}>delete All</button>
        }
        <h1>Total Amount:{totalPrice}$</h1>
       <div className="grid grid-cols-2 gap-5">
       
      {favorities.map((item) => (
        <div  key={item.id}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-32 w-20"
                src={item.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.phone_name}</h2>
              
              <div className="card-actions justify-end">
                <button className="btn btn-primary">{item.price}$</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  
    </div>
   
  );
};

export default Fav;
