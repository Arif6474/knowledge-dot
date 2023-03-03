import React from 'react'
import { IMAGE_URL } from '../../../../Utilities/APIs';
import './MemberDetails.css'
function MemberDetails({member, setMember}) {
    const {name, description, image} =member;
  const handleClose=()=>{
    setMember(null)
  }
  return (
    <div data-aos="fade-down" className='modal'>
       <div className='modal-dialog'>
        <div className='modal-content'>

       <div className='bio'>
            <p className='modal-title'>Full bio of {name}</p>
            <button onClick={handleClose} type='button' className='close'>X</button>
        </div>
        <div className='modal-body'>
            <img className='member-pic' src={IMAGE_URL + image} alt="" />
            <p className='member-desc'>{description}</p>
        </div>
        <div className='modal-footer'>
            <button onClick={handleClose} className='close-btn'>Close</button>
        </div>
        </div>
       </div>
    </div>
  )
}

export default MemberDetails