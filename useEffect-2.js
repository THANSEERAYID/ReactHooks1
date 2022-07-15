import React, {useEffect, useState} from "react";


export const UseuseEffect = () =>{ /* when using useEffect function name must
start with capital,  pascal type names*/

    const[size, setSize] = useState(window.innerHeight); {/* usestate*/}
    const[height, setHeight]= useState("height")

    

    const Change = ()=> {
        setSize(window.innerWidth);
        setHeight("width")


    }
    useEffect( ()=>{
        window.addEventListener('resize', Change);
    }, [])
    

    return(
        <>
        <div>
            <h1>
                window {height}: {size}
            </h1>
            <button onClick={()=>{
                Change()
            }}>
            window
            </button>
        </div>
        </>
    );

}