import React,{useState} from 'react';

function ToDo(props){
    const {todo,updateTodo,removeTodo,updateComplete} = props;
    const [update,setUpdate] = useState(true);
    const [text,setText] = useState(todo.text);

    return(
        <li>
                <td><input 
                    className="checkmark"
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => updateComplete(todo.id)}
                ></input></td>
                <td><label onDoubleClick={() => setUpdate(false)}>{todo.text}</label>
                <input
                    value={text}
                    hidden={update}
                    onChange={(e) => setText(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter' && text) {
                            updateTodo(text,todo.id)
                            setUpdate(true)
                        }
                    }}
                />
            <button className="destroy" onClick={() => removeTodo(todo.id)} > </button>
            </td>
        </li>
    )
}

export default ToDo;