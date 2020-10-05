/*
This is a higher order component that creates a wrapper in other components.
The motivation for doing this is that the "render" function in React will only return one element.
If you don't create a wrapper like this, you often have to create a parent, meantingless div element.
This kind of acts like a custom div just for that purpose.
It is a functional component.
*/

const aux = (props) => props.children;

export default aux;
