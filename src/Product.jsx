import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const Product = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const phones = useLoaderData();

  useEffect(() => {
    const findPhone = phones.find((item) => item.id === id);
    setData(findPhone || {}); // Set to an empty object if not found
  }, [id, phones]);
  const handleClick=()=>{
    // const fav=JSON.parse(localStorage.getItem("item"));
    // console.log(fav);
    // localStorage.setItem("item",JSON.stringify([{name:"mamun"},{name:"tamim"},{name:"pranto"}]))

    const addedFavoriteItem = [];
    const favoriteItem = JSON.parse(localStorage.getItem("fav"));
    
    if (!favoriteItem) {
      addedFavoriteItem.push(data);
      localStorage.setItem("fav", JSON.stringify(addedFavoriteItem));
      swal("Good job!", "Added successfully", "success");
    } else {
      const isExist=favoriteItem.find(phone=>phone.id===data.id)
      if(!isExist){
        addedFavoriteItem.push(...favoriteItem, data);
      localStorage.setItem("fav", JSON.stringify(addedFavoriteItem));
      swal("Good job!", "Added sucessfully", "success");

      }else{
        swal("Error", "Duplicate item", "error");
      }
      
    }
    
    
    






















    
  }

  return (
    <div className="flex justify-center items-center">
      {data && ( // Check if data exists before using map
        <div key={data.id}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={data.image} alt="Phone" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.phone_name}</h2>
              <p>If a dog chews shoes, whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button onClick={handleClick} className="btn btn-primary">Add to Card</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
