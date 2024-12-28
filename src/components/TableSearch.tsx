import Image from 'next/image'
import React from 'react'

const TableSearch = () => {
  return (
    <div className="flex items-center rounded-full text-xs ring-gray-300 ring-[1.5px] px-2 gap-2 w-full md:w-auto">
      <Image src="/search.png" alt="" width={14} height={14} />
      <input
        type="text"
        placeholder="Search from table..."
        className="w-[200px] p-2 bg-transparent"
      />
    </div>
  )
}

export default TableSearch