import React, {useState} from "react";

function NewBoxForm(props) {
    const INITIAL_STATE = {
        color: '',
        height: '',
        width: ''
    }
    const [box, setBox] = useState(INITIAL_STATE)

    function handleChange(e) {
        const {name, value} = e.target
        console.log(e.target)
        setBox(box => ({
            ...box,
            [name]: value
        }) )
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.addItem(box.color, box.height, box.width)
        setBox(INITIAL_STATE)
    }



    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="color" placeholder="color" value={box.color} onChange={handleChange}/>

            <input type="text" name="height" placeholder="height" value={box.height} onChange={handleChange}/>

            <input type="text" name="width" placeholder="width" value={box.width} onChange={handleChange}/>

            <button>Create Box</button>

        </form>

    )
    
}

export default NewBoxForm