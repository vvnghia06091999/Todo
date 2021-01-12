import React,{useState} from 'react';
import FormToDo from './FormToDo';
import ToDo from './ToDo';
import SelectToDo from './SelectToDo';
import './ToDo.scss';

function filterByStatus(todos =[], status,id){
    switch(status){
        case 'ACTIVE':
            return todos.filter(item => !item.isCompleted)
        case 'REMOVE':
            return todos.filter(todo => todo.id !== id);
        case 'COMPLETED':
            return todos.filter(item => item.isCompleted)
        default:
            return todos;
    }
}

function ToDoList(){
    const [todos,setTodos] = useState([]);
    const [status,setStatus] = useState('ALL');
    const [isCheckAll,setIsCheckAll] = useState(false);

    function addTodo(todo){
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }

    function updateTodo(text,id){
        const updateList = todos.map(item => {
            if (item.id === id) {
                return {...item,text :text}
            }
            return item;
        })
        setTodos(updateList);
    }

    function removeTodo(id){
        setTodos(filterByStatus(todos,'REMOVE',id));
    } 

    function checkAllTodos(){
        const updateList = todos.map(item => ({...item,isCompleted : !isCheckAll}))
        setIsCheckAll(!isCheckAll);
        setTodos(updateList);
    }

    function updateComplete(id){
        const updateList = todos.map(item => {
            if (item.id === id) {
                return {...item,isCompleted :!item.isCompleted}
            }
            return item;
        })
        setTodos(updateList);
    }

    function clearCompleted(){
        setTodos(todos.filter(item => !item.isCompleted));
    }


    return (
        <div className="todoapp">
            <FormToDo 
                addTodo = {addTodo} 
                checkAllTodos = {checkAllTodos}
            ></FormToDo>
            <div className="todo-list">
                <ul>
                    {
                        filterByStatus(todos,status).map((todo) => 
                            <ToDo 
                                    key={todo.id} 
                                    todo={todo} 
                                    updateTodo={updateTodo}
                                    removeTodo={removeTodo}
                                    updateComplete={updateComplete}
                            ></ToDo>)
                    }
                </ul>
            </div>
            <SelectToDo 
                status={status} 
                setStatus={setStatus} 
                clearCompleted={clearCompleted}
            ></SelectToDo>
        </div>
        
    )
}

export default ToDoList;