import { Ref, useRef } from "react";
//onAddTodo is a function that returns nothing (void) and gets one argument (text of type string)
const NewTodo: React.FC<{onAddTodo: (text: string) => void }> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        //! - if you are certain that it cant be null
        const enteredText = todoTextInputRef.current!.value;

        if(enteredText.trim().length === 0){
            //throw error
            return;
        }

        props.onAddTodo(enteredText);

    }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
