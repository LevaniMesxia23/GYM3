import React from 'react'
import Feedbacks from '../../components/Dashboard/Feedbacks'
import ReviewsBox from '../../components/Dashboard/ReviewsBox'
import TodoList from '../../components/Dashboard/TodoList'

function DashboardPage() {
  return (
    <div className=' px-8 pb-16'>
      <Feedbacks />
      <div className='flex flex-col md:flex-row lg:flex-row gap-6 justify-center'>
      <ReviewsBox />
      <TodoList />
      </div>
    </div>

  )
}

export default DashboardPage