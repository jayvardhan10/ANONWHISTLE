"use client";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((res) => {
          setProduct(res.products);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setLoading(false);
        });
    }
  }, []);

  return (
    <div className="w-[80%] h-auto flex flex-col justify-center items-center bg-[rgba(225,225,225,0.3)] shadow-[0px_19px_38px_rgba(0,0,0,0.944),0px_10px_12px_rgba(0,0,0,0.939)] pt-[7vh] mt-[13vh]
    mb-[10vh]
    ">
      <table className="w-[80%]">
        <thead className="border-b-2 border-solid border-black">
          <tr>
            <th className="pb-2 text-start">ID</th>
            <th className="pb-2 text-start">Problem</th>
            <th className="pb-2 text-start">Locality</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <p>Loading products...</p>
          ) : (
            product.map((value) => (
              <tr className="border-b-2 border-solid border-black text-xl font-solid font-extralight">
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.category}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <button className='w-md hover:bg-zinc-100 font-serif  text-black  rounded-3xl p-4 bg-[rgba(225,225,225,0.3)] shadow-[0px_19px_38px_rgba(0,0,0,0.944),0px_10px_12px_rgba(0,0,0,0.939)]
      m-[7vh]
      '>Add your Problem</button>
  
    </div>
  );
};

export default Index;
