import { useState } from "react"

export default function Modal({todo, set_todo}){
    const[value, setValue] = useState("");
    
    const onChangeTextInput = (e) => {
        setValue(e.target.value)
    }
    function addTask () {
        const newItem = {
            key: todo.length + 1,
            label: value,
            statusDone: false,
            inTrash: false,
          } 
          set_todo([...todo, newItem])
          setValue('')
    }

    return(
        <div className="modal">
            <div className="modalContainer">
                <div className="modal_title">
                    <h1 style={{fontSize:"16px", marginLeft:"20px"}}>Add new To Do</h1>
                </div>
                <div className="modal_body">
                    <input onChange={onChangeTextInput} value={value} 
                        className="placeholder" placeholder="Your text">
                    </input>
                </div>
                <div className="modal_button">
                    <button 
                        onClick={addTask} 
                        className="addTask">Add
                    </button>
                </div>

            </div>
        </div>
    )
}