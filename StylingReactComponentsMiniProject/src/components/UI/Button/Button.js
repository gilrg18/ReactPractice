import React from "react";
import styles from './Button.module.css';
// import styled from 'styled-components';
//button`` is a method from the styled object
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   //se le quita el auto abajo de 768px
//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;
const Button = props => {
  return (
    //"styles" will be an object that has every class in the file as a property
    //in the rendered html : class="ComponentName_ClassName_uniqueHash" = "Button_button_2lgkF"
    //para ver el css usado meterte al <head> en el browser y luego <style>
    //CSS Modules advantage: Scoped to the component where we use them.
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
