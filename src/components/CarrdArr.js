import React from "react";
import HafCard from "./HafCard";

const cardArray = ({robots}) =>{
   
    return(<div className="cardWrapper">
        {robots.map((e,i) =>{
            return(<HafCard 
                key={robots[i].id} 
                name ={robots[i].name} 
                email = {robots[i].email} 
                id={robots[i].id} 
            />)
        }
        )}

    </div>)
}

export default cardArray;
