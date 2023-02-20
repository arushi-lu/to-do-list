import React from 'react';
import { useState } from 'react';
import './App.css';
import ButtonSection from './components/Buttonsection';
import TodoSection from './components/TodoSection';
import items from './allData';

function App() {

  const[todo, set_todo] = useState(items);
  const [visibleMenu, setVisibleMenu] = useState(todo);

  const[title, set_title] = useState();

  
  
    

  const filter = (button)=>{
    if(button === 'all'){
        const filteredData = todo.filter(item => item.inTrash === false && item.statusDone === false);
        
        setVisibleMenu(filteredData);
        set_title("To Do")
        return;
      
    }
    
    if(button === true){
      const filteredData = todo.filter(item => item.statusDone === button);
      setVisibleMenu(filteredData);
      set_title("Done")
    }
    

    if(button === 'trash'){
      const filteredData = todo.filter(item => item.inTrash === true);
      setVisibleMenu(filteredData);
      set_title("Trash")
    }
  }

  

  
  return (
    <div className="App" style={{ height: '100vh'}}>
      
      <h1 className='name' >Simple To Do List</h1>
      <p>Today is awesome day. The weather is awesome, you are awesome too!</p>
      <ButtonSection filter = {filter} todo={todo} set_todo={set_todo} />
      <TodoSection visibleMenu={visibleMenu} 
                title={title} 
                setVisibleMenu={setVisibleMenu} 
                set_todo={set_todo}
                todo = {todo}
                />
    </div>
  );
}

export default App;
