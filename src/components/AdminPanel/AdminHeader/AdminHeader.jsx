import React from 'react'
import Muscle from "/Vector.svg"
import Search from "/search.svg"
import Notification from "/bell.svg"
function AdminHeader() {
  return (
    <div className=' flex justify-between items-center  py-8 px-6'>
      <div className=" flex gap-4">
          <div className="flex flex-col items-center gap-1">
            <span className="bg-gradient-to-transparent bg-clip-text text-transparent text-[1.25rem] text-center">
              TRANSFORM
            </span>
            <span className="bg-gradient-to-transparent bg-clip-text text-transparent text-[1.25rem] text-center">
              WITH TUNA
            </span>
          </div>
          <img src={Muscle} alt="" />
        </div>

        <div className=' flex items-center gap-6'>
          <div className='flex items-center gap-2'>

          <img src={Search} className='w-12 h-12' alt="" />
          <img src={Notification} className='w-[1.507rem] h-[1.507rem]' alt="" />
          </div>
          <div className='w-10 h-10 rounded-full bg-red-500'></div>
        </div>
    </div>
  )
}

export default AdminHeader