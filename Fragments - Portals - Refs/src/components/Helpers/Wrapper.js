const Wrapper = props => {
    return props.children;
};

export default Wrapper;

//Empty component that returns props.children
//It helps to avoid the problem of div nesting by not rendering
//extra div elements into the DOM