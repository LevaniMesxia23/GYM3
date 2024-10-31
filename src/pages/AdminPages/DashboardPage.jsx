import React from 'react'
import Feedbacks from '../../components/Dashboard/Feedbacks'
import ReviewsBox from '../../components/Dashboard/ReviewsBox'

function DashboardPage() {
  return (
    <div className=' px-8 pb-16'>
      <Feedbacks />
      <ReviewsBox />
    </div>

  )
}

export default DashboardPage