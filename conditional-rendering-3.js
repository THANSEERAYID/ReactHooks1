import React, {useState, useEffect} from 'react' ;

export const ShowHide = () =>{
    const [show, setShow] = useState(false); 

    return(
        <>
        <div>
            <button style={{marginTop:"20rem"}} onClick={()=>setShow(!show)}>show/hide</button>
            {show && <Item/>}  {/*conditional-rendering*/}
        </div>   
        </>  
    );

};

const Item = () =>{
    const[size, setSize] = useState(window.innerWidth)
const Change = ()=> {
    setSize(window.innerWidth);
}
useEffect( ()=>{
    window.addEventListener('resize', Change);
}, [])

    return(
        <>
        <div>
            <h1>Window size</h1>
            <h2>{size} px</h2>
        </div>
        </>
    );
}
