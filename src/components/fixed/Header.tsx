import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation();

  return (
    <div className='flex flex-col items-center p-2'>
      <div className='flex gap-1 items-center text-[1.5rem]'>
        <Link to={'/'} className='text-white font-bold font-[Cinzel] '>
            DotaSquad
        </Link>
        <img className='w-9' src='/Dota2.svg' alt='Dota logo' />
      </div>
      <ul className='flex flex-row text-white font-[Cinzel] gap-30 p-1'>
        <li className={`text-[1.3rem] hover:text-[#888] ease-in duration-150 relative ${location.pathname === '/max' ? 'before:content-["."] before:absolute before:top-[40%] before:left-[50%]' : ''}`}>
          <Link to={'/max'}>
            Max
          </Link>  
        </li>
        <li className={`text-[1.3rem] hover:text-[#888] ease-in duration-150 relative ${location.pathname === '/gabe' ? 'before:content-["."] before:absolute before:top-[40%] before:left-[50%]' : ''}`}>
          <Link to={'/gabe'}>
            Gabe
          </Link>  
        </li>
        <li className={`text-[1.3rem] hover:text-[#888] ease-in duration-150 relative ${location.pathname === '/jamey' ? 'before:content-["."] before:absolute before:top-[40%] before:left-[50%]' : ''}`}>
          <Link to={'/jamey'}>
            Jamey
          </Link>  
        </li>
      </ul>
    </div>
  )
}

export default Header
