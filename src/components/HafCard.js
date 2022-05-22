import React from "react";
import {Fragment} from "react";

const HafCard = ({name,email,id}) =>{
    return(
        <Fragment >
            <div className="card">
            <img alt="robot" src={`https://robohash.org/${id}?size=200x200`} />
            <div className="description">
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
            </div>
            
        </ Fragment>
    );
}

export default HafCard;