import Link from 'next/link'
import React from 'react'


const HomePage = () => {
  return (
    <div>
      <div className=' flex justify-center items-center mt-48 p-16'>
        <ul className=' border border-black py-20 px-12 bg-yellow-700 rounded-xl flex justify-center items-center md:text-4xl'>
          <li className='border border-yellow-500 rounded  md:bg-yellow-600 text-zinc-300'><Link href="/client-data-fetching">Client Side</Link></li>
          <li className='border border-yellow-500 ml-2 rounded  md:bg-yellow-600  text-zinc-300'><Link href="/server-data-fetching">Server Side</Link> </li>
        </ul>
      </div>
    </div>
  )
}

export default HomePage