import React from "react";

const SearchBox = ({ssss, sChange}) =>{
    return(
        <div >
            <input className="search" type= 'search' 
            placeholder="Search Here..."
            onInput={sChange}
            />
        </div>)

}

export default SearchBox