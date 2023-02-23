import classes from './Input.module.css';

const Input = props =>{
    return (
      <div className={classes.input}>
        {/*The HTMLLabelElement.htmlFor property reflects the value of the for content property. 
        That means that this script-accessible property is used to set and read the value of the 
        content property for, which is the ID of the label's associated control element. 
        So when you click the label it will redirect you to the input because label's htmlFor='someid'
        and the input contains id='someid'*/}
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} />
        {/*what {...props.input} does is that if props.input has an object for example: {type: 'text'}
        it will get added to the input tag like this:
        <input type="text"/> 
        so everything that comes with the props.input will get added to the input*/}
      </div>
    );
}

export default Input;