import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const StatPage = () => {
  const [friendPage, setFriendPage] = useState('');
  const location = useLocation();
  useEffect(() => {
    if(location.pathname === '/max'){
        setFriendPage('Max')
    }else if(location.pathname === '/gabe'){
        setFriendPage('Gabe')
    }else{
        setFriendPage('Jamey')
    }
  })
  
  return (
    <div>
     <p>{friendPage}</p> 
    </div>
  )
}

export default StatPage
