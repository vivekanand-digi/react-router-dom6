import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const User = () => {
    const navigate = useNavigate()
    const {id} = useParams();

    console.log("id",id);
  return (
    <div>
      <button onClick={()=> navigate(`/`)}>Back</button>
    </div>
  )
}

export default User
