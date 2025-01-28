
import React from 'react'
interface Props {   
    params : {id: number; photoID: number;}}
    
const UserphotoId = ({params: { id, photoID }}: Props) => {
  return (
    <div>PhotoPage {id} {photoID}</div>
  )
}
export default UserphotoId;