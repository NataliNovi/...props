import React from "react";

export default function Main({data}) {
/*if(!data) {
    return <h1>Loading</h1>
}*/
    return (
<div>
{data?.map((item,index) => (<div key={index}> {item.postName} </div>))}

</div>
    )
}