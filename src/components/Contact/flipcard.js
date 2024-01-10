import React, { useState } from "react";


const Flipcard = ({proName,description}) => {

    const [isFlipped,setISflipped] = useState('false')

    const handleClick=()=>{
        setISflipped(!isFlipped);
    }

    return(
    <>
        <div className="main-flip-card">
        <div
              class={`column flipcard ${isFlipped ? " " : "flipped"}`}
            //   class="column flipcard"
              onClick={handleClick}
              // style={{ backgroundColor: "#619957" }}
            >
                {/* Front side of card */}
                <div class="face front">
                {proName}
              </div> 
              {/* back side of card */}
              <div class="face back">
                {description}
              </div>
            </div>
        </div>
    </>
)
}

export default Flipcard;