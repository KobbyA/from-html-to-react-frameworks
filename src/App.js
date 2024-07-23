import BareBonesComponent from "./components/phase_1_bare-bones-react-component/bare-bones-component";
import BareBonesComponentWithState from "./components/phase_3_bare-bones-react-component-with-state/bare-bones-component-with-state";
import BareBonesComponentWithProps from "./components/phase_2_bare-bones-react-component-with-props/bare-bones-component-with-props";
import BareBonesComponentInteractiveState
    from "./components/phase_4_bare-bones-react-component-interactive-with-state/bare-bones-component-interactive-state";
import BareBonesComponentParentChild from "./components/phase_5_react-component-parent-child-props/component-parent-child";

function App() {
    return (
        <div className="App">
            <h3 id={'problem'}>
                This page illustrates how to solve the same problem statement in the bare bones html/js repo
                but with the react framework. We use the same concepts as discussed there but in the react framework,
                there are already established patterns and naming conventions that implement those patterns for us
            </h3>

            <p>
                Firstly we start with the bare-bones react JSX. It looks like html in the code but in reality,
                JSX, is syntactical sugar that describes an element on the page or, in React terms, a Component.
                The tag, attributes and content within the JSX tags are compiled into a JS object by the React Library and
                the library uses that object to generate the actual HTML elements behind the scenes using something like a
                <code>document.createElement()</code> function All the content on this page are defined in JSX, and the component
                passes this JS object to React and React creates the actual elements behind the scenes and puts them in our root node.

                We can create custom elements that define different types of functionality and mix and match those with already existing
                HTML elements. So let's get back to our problem using React Components and React Patterns
            </p>

            {/* firstly our initial component bare bones just a p Tag*/ }
            <p>5</p>

            {/* From now we'll use the concept of a react component.
            We'll take the functionality we want and encapsulate it inside its own special function/Component*/ }
            <BareBonesComponent/>

            {/* Using React state*/}
            <BareBonesComponentWithState/>
            { /* Using react props in a bare bones setup */}
            <BareBonesComponentWithProps myValue={5}/>
            <BareBonesComponentWithProps myValue={7}/>

            {/* Using react state with interactivity */}
            <BareBonesComponentInteractiveState/>

            <BareBonesComponentParentChild/>
        </div>
    );
}

export default App;
