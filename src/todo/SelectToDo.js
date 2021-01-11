import React from 'react';

function SelectToDo(props){
    const{status,setStatus,clearCompleted} = props;
    function clear(){
        clearCompleted()
        setStatus('ALL')
    }
    return (
        <div>
            <div className="status"><label>Status : {status}</label></div>
            <div>
                <button onClick={()=>setStatus('ALL')}>ALL</button>
                <button onClick={()=>setStatus('ACTIVE')}>ACTIVE</button>
                <button onClick={()=>setStatus('COMPLETED')}>COMPLETED</button>
                <button className="warning" onClick={()=>clear()}>ClearCompleted</button>
            </div>
        </div>
    )
}

export default SelectToDo;