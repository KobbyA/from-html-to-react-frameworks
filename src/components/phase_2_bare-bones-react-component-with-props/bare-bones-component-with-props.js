//this is a simple barebones react component. It's just a regular ol JS function.
//here we introduce props, when used on a page, props look like HTML attributes when adding the component
//in the component function, it comes as a JS object that we can use
//every time we update the attribute, it "re-renders" the component aka recalls the function with the new data and
//replaces thd old HTML with the new HTML
export default function BareBonesComponentWithProps( props ){
    return (
        <p>react component prop value of : {props.myValue}</p>
    )
}