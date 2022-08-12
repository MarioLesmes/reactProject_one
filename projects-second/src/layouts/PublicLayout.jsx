import React        from 'react'
import Navbar       from 'components/navbar'
import Footer       from 'components/footer'

const PublicLayout = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
        <Navbar/>
        <main className='h-full overflow-y-scroll bg-blue-400'>
          children
        </main>
        <Footer/>
    </div>
  )
}

export default PublicLayout