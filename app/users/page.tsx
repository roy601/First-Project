import React from 'react'
interface User {
  id : number;
  name : string;
  email : string;
  

}
const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users",
    { next: { revalidate: 10}}
  )
  const data : User[]= await res.json();
  return (
    <>
    <h1>Users</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <ul>
      {data.map(user => <li key = {user.id} > {user.name} <div></div>
      
      Email: {user.email} </li>)}
    </ul>
    </>

  )
}

export default UserPage;