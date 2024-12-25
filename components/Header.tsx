"use client"

import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className='flex justify-between text-white bg-indigo-900'>
            <h3 className=' hidden md:block p-2 text-3xl px-4'>Data Fetching From API</h3>
            <ul className='flex m-2 mr-4 '>
                <li   className='mr-8 hover:underline p-2'><Link href="/">Home</Link></li>
                <li  className='mr-8 hover:underline p-2'><Link href="/client-data-fetching">Client Side</Link></li>
                <li  className='mr-8 hover:underline p-2'><Link href="/server-data-fetching">Server Side</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header