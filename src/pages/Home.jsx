import React from 'react'
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

function Home() {

  const token = localStorage.getItem("token");
  const decoded = token ? jwtDecode(token) : null;

  console.log(decoded);

  const navigate = useNavigate();
   const handleLogout = () => {
      localStorage.removeItem("token");
      navigate("/");
   }
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <h1 className='text-3xl font-bold mb-4'>Hi Welcome back, {decoded?.username}</h1>
    <p>{decoded?.email}</p>
      <button className='bg-red-200 text-red-700 font-semibold px-6 py-2 rounded-md' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home