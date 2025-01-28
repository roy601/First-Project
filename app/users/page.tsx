import React from 'react'

interface User {
  id : number;
  name : string;
  email : string;
  

}
const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users",
  )
  const data : User[]= await res.json();
  return (
    <>
    <h1 className=' text-xl, font-bold'>User Details</h1>
    
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {data.map(user => 
      <tr key = {user.id} > 
        <td>{user.name}</td>
        <td>{user.email}</td>
      
         </tr>)}
      </tbody>
      
    </table>
    </>

  )
}

export default UserPage;