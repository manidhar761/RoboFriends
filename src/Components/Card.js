import React  from "react";

//const Card = ({id,name,email})=>{}
const Card = (props)=>
{
    return(
      
        <div className='bg-light-green dib br3 ma2 grow bw2 shadow-5'>
            <img alt='Robots' src={`https://robohash.org/${props.id}?200*200`}  />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;