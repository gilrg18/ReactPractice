import classes from './Card.module.css'

const Card = props => {
    //using template literals `` to add more than one className
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
};

export default Card;