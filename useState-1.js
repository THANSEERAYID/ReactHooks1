import React, {useState} from "react";


export const UseuseState = () =>{ /* when using useState function name must
start with capital,  pascal type names*/

    const[value, setValue] = useState(0); {/* usestate*/}

    return(
        <>
        <div>
            <h1>
                {value}
            </h1>
            <button onClick={()=>{
                setValue(value+1)
            }}>
            increase
            </button>
        </div>
        </>
    );

}