import Modal from './Modal'
import plus from './plus.png'
import React from 'react';
import { useState } from 'react';
import TodoSection from './TodoSection';


export default function ButtonSection({filter , todo, set_todo}){

    const[openModal, setOpenModal] = useState(false);
   

    const handleOpen = () =>{
        setOpenModal(!openModal)
    }

    
    
    return(
        <div className="but_section">

            <button 
                className="todo_but"
                 onClick = {()=>filter('all')}
                > To Do
                
            </button>
            
            <button 
                className='button'
                onClick = {()=>filter(true)}
                >   
                Done </button>
                
            
            
            <button 
                className="button"
                onClick = {()=>filter('trash')}
                > Trash
            </button>
            
            <button 
                className='add_but' 
                onClick={handleOpen}
                > Add <img src={plus} style={{marginTop: '-10px'}}/></button>
            {openModal && <Modal todo={todo} set_todo = {set_todo}/>} 
            
            
        </div>
    )

}