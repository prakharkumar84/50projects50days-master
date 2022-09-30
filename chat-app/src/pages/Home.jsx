import React from 'react'
import { Chat } from '../components/Chat'
import { Sidebar } from '../components/Sidebar'
import "../pages/style.css"

export const Home = () => {
  return (
    <div className='home'>
        <div className='homeContainer'>
                <Sidebar/>
                <Chat/>
        </div>
    </div>
  )
}
