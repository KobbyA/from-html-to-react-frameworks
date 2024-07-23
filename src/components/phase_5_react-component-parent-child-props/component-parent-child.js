//Here we introduce the parent-child component relationship.
// if we want to keep two components connected, one of the patterns we use here is that we have our data in a parent "wrapper"
//component and we pass the data as props to other components within the parent (child components)
import {useState} from "react";
import BareBonesComponentWithProps
    from "../phase_2_bare-bones-react-component-with-props/bare-bones-component-with-props";

export default function BareBonesComponentParentChild(){
    //our state variable becomes the data for our parent. We will pass the value to another component that
    //takes props in order to render
    const [state, setState] = useState({myValue: 5})
    return (
        <div>
            <BareBonesComponentWithProps myValue={state.myValue}/>
            <button onClick={() => { setState({myValue: 7}) }}>Change to 7</button>
        </div>
    )
}