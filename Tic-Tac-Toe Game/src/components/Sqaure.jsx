import React from 'react';
import '../App.css'
const Square=(props)=>{
    return(
        <div className='square'
        style={{
            display:"inline-block",
            justifyContent:"center",
            alignItems:"center",
            border:"5px solid rgb(6, 3, 95)",
            borderRadius: "25px",
            height:"80px",
            width:"80px",
            cursor:"pointer",
            margin:"2px",
            backgroundColor:"#81bbf5",
                        
        }}
        onClick={props.onClick}
        >
            <h1 className='labels'>{props.value}</h1>
        </div>

    );
}
export default Square;