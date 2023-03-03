import React from 'react'
import { IMAGE_URL } from '../../../../Utilities/APIs'

function MemberInfo({memberInfo , setMemberInfo}) {
    const handleClose=()=>{
        setMemberInfo(null)
    }
  return (
    <div data-aos="fade-down" className='modal'>
    <div className='modal-dialog'>
     <div className='modal-content'>

    <div className='bio'>
         <p className='modal-title'>Full bio of {memberInfo?.name}</p>
         <button onClick={handleClose} type='button' className='close'>X</button>
     </div>
     <div className='modal-body'>
         <img className='member-pic' src={IMAGE_URL + memberInfo?.image} alt="" />
         <p className='women-name'>{memberInfo?.name}</p>
         <p className='women-desc'>{memberInfo?.designation}</p>
         <p className='women-desc'>{memberInfo?.email}</p>
         <p className='women-desc'>{memberInfo?.country}</p>
     </div>
     <div className='modal-footer'>
         <button onClick={handleClose} className='close-btn'>Close</button>
     </div>
     </div>
    </div>
 </div>
  )
}

export default MemberInfo