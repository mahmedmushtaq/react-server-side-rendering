import React from "react";

const NotFound = ({staticContext={}})=>{
    staticContext.notFound = true;
    return(
        <div>
            <h2>
                OOps! Page Is Not Found
            </h2>
        </div>
    )
}

export default {
    component:NotFound
}