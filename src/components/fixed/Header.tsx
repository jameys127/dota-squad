import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to={'/'} className='text-white'>
        DotaSquad
      </Link>
    </div>
  )
}

export default Header
