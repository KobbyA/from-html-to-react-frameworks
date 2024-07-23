//This react component introduces interactivity with state changes. So we will have our internal state where we manage
//the variable, and when we click a button we update our internal state which then lets react automatically re-render
import {useState} from "react";

export default function BareBonesComponentInteractiveState(){
    //react has a function called useState, it keeps track of your internal value as well as a function to set that value
    //you can call the variable and function whatever you want. state and setState is the names I happen to be using here
    //[variableName] and set[variableName] is a common pattern

    //the useState function allows us to pass an initial value. Here I'm using a JS object with a myValue property set to 5
    const [state, setState] = useState({myValue: 5})
    return (
        <div id={'interactive-with-state'}>
            <p>react component value of : {state.myValue}</p>
            <button onClick={() => { setState({myValue: 7}) }}>Change to 7</button>
        </div>
    )
}