import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Phones = () => {
  const [data, setData] = useState([]);
  const [search,setSearch]=useState("");
  const [filterData,setFilterData]=useState(data);
  const handleSearch=(e)=>{
    e.preventDefault()
    const searchTerm=e.target.value;
    setSearch(searchTerm);
    const filterItems=data.filter((item)=>item.phone_name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilterData(filterItems);

  }

  useEffect(() => {
    fetch("/Phones.json")
      .then((res) => res.json())
      .then((data)=>{
        setData(data)
        setFilterData(data)
      })

  }, []);
  return (
    <div>
      <input 
      type="text" 
      placeholder="Search"
      value={search}
      onChange={handleSearch}
      class="input input-bordered w-24 md:w-auto mx-auto" />

      <div className="grid grid-cols-3 gap-4">
         {/* {
      "id": "3",
      "image": "https://static-01.daraz.com.bd/p/986dd21bae23af5b4186e0029dce42a7.jpg",
      "phone_name": "iPhone 12",
      "brand_name": "Apple",
      "price": 999.99,
      "rating": 3.5
    }, */}
     
      {filterData.map((item) => (
        <div key={item.id} >
          <div className="card w-48 bg-base-100 shadow-xl">
            <figure>
              <img
                src={item.image}
                className="h-28 w-auto"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.phone_name}</h2>
              <p>{item.price}$</p>
              <div className="card-actions justify-end">
              <Link to={`/product/${item.id}`}>
  <button className="btn btn-primary">view details</button>
</Link>

                
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    </div>
    
  );
};

export default Phones;
