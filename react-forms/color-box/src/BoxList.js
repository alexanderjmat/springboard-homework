import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
    const INITIAL_STATE = [
        {color: "blue", height:"300px", width: "300px"}
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE)
    function addBox(color, height, width) {
        setBoxes(boxes => [...boxes, {color, height, width}])
    }

    return (
        <div>
            <h2>Fun with Boxes!</h2>
            <NewBoxForm addItem={addBox}/>
            <div>
                {boxes.map(({color, height, width}) => <Box color={color} height={height} width={width} />)}
            </div>
        </div>
    )
}

export default BoxList