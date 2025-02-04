import React from 'react'
import { notFound } from 'next/navigation';
interface Props {   
    params : {id: number;}}
    
const UserphotoId = ({params: { id }}: Props) => {
    if(id>10) notFound();
    return (

    <div>PhotoPage {id} </div>
  )
}
export default UserphotoId;