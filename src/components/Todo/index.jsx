import { useState } from "react";

const Todo = (props) => {
    const taskCompleted = props.completed;

    const [completed, setCompleted] = useState(props.completed);

    const completeHandle = () => {
        if (completed === false) {
            setCompleted('');
        } else {
            setCompleted('true');
        }
    };

    return (
        <li className="todo stack-small">
            <div className="c-cb text-center" style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={taskCompleted}
                    disabled={taskCompleted}
                    onChange={completeHandle}
                />
                <label
                    className={`todo-label ${taskCompleted ? 'true' : ''}`}
                    htmlFor={props.id}>
                    {props.title}
                </label>
                <button
                    type="button"
                    className="btn btn__danger"
                    onClick={() => props.deleteTask(props.id)}
                >
                    Delete
                </button>
            </div>
        </li>
    );
}

export default Todo;