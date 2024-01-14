


export function storageShow(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
    const newList = returnList()
    itemToHTML(newList, parent)
    
    }