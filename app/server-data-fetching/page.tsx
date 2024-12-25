import React from 'react'
interface Book {
  id:number ,
  name:string,
  type:string,
  available:boolean
}

const DataFetch =async () => {
  const data = await fetch(" https://simple-books-api.glitch.me/books/ ")

  const parsedData:Book[]= await data.json()
  return (
    <div>
      {
        <div  className='w-[360px]  grid sm:grid-cols-2 sm:w-[512px] m-4 gap-4 md:grid-cols-3  md:w-[882px] lg:w-[1075px]  lg:ml-28  '>
          {parsedData.map((book,index)=>(
            <div key={index} className=' flex flex-col border bg-slate-300 rounded-xl p-12 xl:bg-orange-400 '>
              <p className='font-semibold'>id: <span className='font-medium'>{book.id}</span></p>
              <p className='font-semibold'>name: <span className='font-medium'>{book.name}</span></p>
              <p className='font-semibold'>type: <span className='font-medium'>{book.type}</span></p>
              <p className='font-semibold'>available: <span className='font-medium'>{`${book.available}`}</span></p>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default DataFetch