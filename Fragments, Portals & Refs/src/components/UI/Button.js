import classes from "./Button.module.css";

const Button = (props) => {
  //'button' is a fallback type in case props type isnt defined
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
        {props.children}
    </button>
  );
};

export default Button;
