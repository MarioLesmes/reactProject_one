import Navbar       from 'components/navbar'
import Footer       from 'components/footer'
const AuthLayout = ({ children }) => {
  return (
    <div className='flex flex-col justify-between h-screen'>
        <Navbar/>
        <main className='h-full overflow-y-scroll bg-blue-400'>
          children
        </main>
        <Footer/>
        { children }
    </div>
    
  )
}

export default AuthLayout