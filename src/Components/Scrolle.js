import React from 'react';


const Scrolle = (props)=>{
    return (
         <div style={{ overflow:'scroll',border:'1px solid balck', height:'500px'}}>
        
        { props.children }
        
         </div>
    );
};

export default Scrolle;