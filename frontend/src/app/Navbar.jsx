import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='sticky top-0 '>
      <nav className='flex bg-gray-600 text-white text-xl gap-10 justify-center items-center p-2'>
        <Link href="/">Home</Link>
        <Link href="/board">Board</Link>
      </nav>
    </div>
  )
}

export default Navbar
