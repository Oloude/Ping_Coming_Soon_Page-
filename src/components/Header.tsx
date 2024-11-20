 import logo from '../assets/logo.svg'

function Header() {
  return (
    <header className='flex flex-col items-center mb-12'>
       <div className='mb-6'>
       <img src={logo} alt="" />
       </div> 
       <h1 className='text-3xl text-gray mb-3 text-center'>We are launching  <span className='text-darkBlue font-semibold'>soon!</span></h1>
       <p className='text-darkBlue text-base text-center'> Subscribe and get notified</p>
    </header>
  )
}

export default Header