'use client'
import React from 'react';
import {useEffect,useState}from 'react'
import Image from 'next/image'
import { IoIosStar } from 'react-icons/io';

interface Product {
id:number,
title:string,
price:number,
description:string,
category:string,
image:string,
rating:{
  rate:number,
  count:number,
},
}
const Page = () => {
  const [data,setData] = useState<Product[]>([]);

  useEffect (()=>{
    const fetchData = async () => {
      const response = await fetch(
        " https://fakestoreapi.com/products"
      );
      const parsedResponse:Product[] = await response.json();
      console.log("products >>>",parsedResponse);
      setData(parsedResponse);
    };
    fetchData();
  },[]);
  return (
    <div>
        {
        <div className='grid grid-cols-1 gap-8 m-8 mr-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
          data.map((product,index) => (
            <div key = {index} className='border border-transparent bg-white rounded-xl'>
              <Image src={product.image} alt='product title' width={100} height={100} className='h-40 w-full object-contain object-center rounded' />
              <h2 className='font-bold text-2xl ml-4'>{product.title}</h2>
              <p className='ml-4 text-zinc-400'>ID:{product.id}</p>
              <p className='ml-4 '>Category:<span className='text-zinc-400 font-medium'>{product.category}</span></p>
              <p className='line-clamp-2 ml-4'>Description:<span className='text-zinc-400'>{product.description}</span></p><span className='text-red-400 text-xs ml-4'>Read More...</span>
              <div className='flex justify-between '>
              <p className='ml-4'>Price:<span className='text-zinc-400'>${product.price}</span></p>
              <div className='flex mr-2 gap-1'>
                 <IoIosStar className='text-yellow-300' />
                <p>{product.rating.rate}</p>
                <p>({product.rating.count})</p>
                </div>
           
              </div>
            </div>
          ))
        }
        </div>
         }
    </div>
  )
}

export default Page