import { useState } from 'react'
import BackgroundSectionContainer from './components/sections/BackgroundSectionContainer'



function App() {

  return (

    <>
    <div className='flex h-screen border-2'>
      <div className='flex flex-col bg-blue-100
       w-full h-fit p-6 justify-center'>
        <BackgroundSectionContainer/>
      </div>
    </div>
    </>

  )
}

export default App
