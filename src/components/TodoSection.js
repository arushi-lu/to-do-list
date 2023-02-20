import { useState } from 'react';


import React from 'react';
import dots from './vertical-dots.png'
import Modal_trash from './Modal_trash';

export default function TodoSection({visibleMenu, title, setVisibleMenu, set_todo, todo}){
     
        const [open, setOpen] = useState(false);
        const [indexItem, deleteItem] = useState();
         

        const handleOpenTrash = (index) =>{
            deleteItem(index)
            // console.log(indexItem)
            setOpen(!open)
        }

    
            
        const [checked, setChecked] = useState(false);

        const handleChange = ()=> setChecked(!checked);
        
        const handleDone = (key)=>{
            const index = visibleMenu.findIndex(item => item.key === key)
            visibleMenu[index].statusDone = !visibleMenu[index].statusDone;
        }

        
        


        return(
            <div>

                <h2 className='currentPage' style={{marginTop: '10%'}} id = 'wrapper'
                    
                >{title}</h2>
                <div className="line">a</div>

                <ul className="list-tasks">

                    {visibleMenu.map((item, index) => (
                        
                        <li key={item.key} className="list-group-item">  
                            <span 
                                className="smth" 
                                onClick={()=> handleDone(item.key)} 
                                style = {item.statusDone === true ? {textDecoration: 'line-through'} : null}
                            ><input 
                                    type="checkbox" 
                                    style={{marginRight: "10px"}}
                                    value = {checked}
                                    onChange={handleChange}
                                />
                                <span>{item.label}</span>
                            
                                
                            </span>
                                
                                <button className='dots_but'
                                        onClick={()=>handleOpenTrash(index)}
                                        style={{marginTop:'-50px'}}>
                                    <img className='dots' src={dots} alt='dots'/>
                                </button>
                               
                                

                                
                        
                            
                        </li>
                    ))}
                </ul>
                
                 {open  ? <Modal_trash indexItem={indexItem} 
                                    visibleMenu = {visibleMenu}
                                    setVisibleMenu={setVisibleMenu}
                                    set_todo={set_todo}
                                    todo = {todo}/> : ""}
                 
                <div>
        
        </div>
                
            </div>
        )
    }