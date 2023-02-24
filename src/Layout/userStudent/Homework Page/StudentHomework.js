import React from 'react'
import Navbar from '../../../Components/Navbar'
import Groups from './Groups'
import Homeworks from './Homeworks'


function Homework() {
  return (
    <div className='flex'>
      <Navbar/>
      <div className="homeworkPage container">
        <Groups/>
        <Homeworks/>
      </div>
    </div>
  )
}

export default Homework
