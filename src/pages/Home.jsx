import React from 'react'
import SideBar from '../component/SideBar'
import Chat from '../component/Chat'

const Home = () => {
  return (
    <div className='home'>
        <div className="container">
         <SideBar />
         <Chat />
        </div>
    </div>
  )
}

export default Home