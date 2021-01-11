import React,{useState} from 'react';

function FormToDo(props){
    const [text,setText] = useState('');
    const {addTodo,checkAllTodos} = props;

    const onAddTodo = (event) => {
        if (event.key === 'Enter' && text) {
            addTodo({
                id: new Date().valueOf(),
                text:text,
                isCompleted: false
            })
            setText('')
        }
    }

    return(
        <header className ="header">
            <div>
                <h1>What needs to be done ?</h1>
            </div>
            <div>
            <input 
                className="checkmark"
                type="checkbox"
                onChange={()=>{checkAllTodos()}}
            />
                <input
                    type="text"
                    value={text}
                    placeholder="Add Todo"
                    onChange={(e) => setText(e.target.value)}
                    onKeyPress={onAddTodo}
                />
            </div>
        </header>
    )
}

export default FormToDo;