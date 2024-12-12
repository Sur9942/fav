import React from'react';
import {useState} from'react';



const Favourite1=()=>{
    const [color, newcolor]=useState('red')



    return(
        <div>
            <h1>Favourite1 color is{color}</h1>
            <button  onClick={()=>newcolor('blue')}>click here</button>
        </div>
    )
}
export default Favourite1;