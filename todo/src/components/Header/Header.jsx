import React, {useState} from "react";


export default function Header({setValueInput, valueInput}) {
    const [value, setValue] = useState('')

    function getValueInput(event) {
        setValue(event.target.value);
            }
function createPost() {
    const cloneArr = [...valueInput];
    const obj = {
        postName: value,
        id: Math.random()
    }

    cloneArr.push(obj)
    setValueInput(cloneArr)
    setValue('')
}

return (

    <div>
        <input onChange={getValueInput} type="text" value={value}/>
        <button onClick={createPost}>Send</button>
    </div>

)
}