import { useState } from "react";

const Todo = (props) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isDone, setIsDone] = useState(false);
    const handleClose = () => {
        setIsOpen(false);
    };
    const handleDone = () => {
        setIsDone(true)
    }
    return (
        <>
        {isOpen && (
            <div className="flex mx-2 my-5">
            <div className={props.style} >
            <h2 onClick={handleDone} className="text-2xl font-bold"  style={ isDone ? {textDecoration: 'line-through black'}: {textDecoration: 'none'}} key={props.key}>{props.todo}</h2>
            <div className=" flex justify-around ">
                <button className={props.btnedit} onClick={props.handleEdit}>Edit</button>
                <button className={props.btn} onClick={handleClose}>X</button>
            </div>
            </div>
        </div>
        )}
        </>
        
    );
};

export default Todo;
