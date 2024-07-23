//this is a simple barebones react component. It's just a regular ol JS function.
//react will run this function when we add it to another component or page
//react will then read the JSX that is returned from it, convert that to HTML and put the HTML in place on the page
//here we're just writing that same simple P tag. We edit the content when we want it to update
import {useState} from "react";

export default function BareBonesComponentWithState(){
    const [state, setState] = useState({myValue: 5});

    setTimeout(() => {
        setState({myValue: Math.random() * 10 });
    }, 3000);

    return (
        <p>react component with rotating internal state value of : {state.myValue}</p>
    )
}