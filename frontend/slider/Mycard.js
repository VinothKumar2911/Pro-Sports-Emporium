import React from 'react'
import './Mycard.css'


const Mycard = (props) => {
    return (
        <>
        <div className='mycard'>
           {/* {props.cardno} */}
            < img className="image" src={props.src}/>
            </div>
       
</>
    )
}

export default Mycard