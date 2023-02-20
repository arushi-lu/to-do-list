import { useState } from "react"

export default function Modal_trash({indexItem, visibleMenu, setVisibleMenu, set_todo, todo}){

    console.log(indexItem)
    console.log(visibleMenu)
    const handleMoveToTrash = (indexItem) =>{
        const index = indexItem;
        if(visibleMenu[index].inTrash === false){
            visibleMenu[index].inTrash = !visibleMenu[index].inTrash;
            console.log('delete')
        }else{
           const filtered = visibleMenu.filter(item => item.inTrash === false )
           setVisibleMenu(filtered)
        }
       
       
    }


    return(
        <div className="move-trash">
            <button className="but_trash"
                    onClick={()=>handleMoveToTrash(indexItem)}
            
            > Move to Trash</button>
        </div>
    )
}
