
'use client'

import  { useState } from "react"

export default function Counter() {

    const [counter, setcounter] = useState(0)

  return (
    <div className="flex items-center justify-center gap-x-2"> 
            <button className="text-4x1"  
            onClick={ 
                () => { 
                    setcounter(counter - 1) 
                } 
            }>-</button>  
            <span>{counter}</span> 
            <button className="text-4x1"  
            onClick={ 
                () => { 
                    setcounter(counter + 1) 
                } 
            }>+</button> 
        </div>
    )
}
