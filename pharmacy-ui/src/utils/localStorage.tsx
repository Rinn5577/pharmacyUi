
export const getKeysFromLocalStorage = () =>{
    var localAsString = JSON.stringify(localStorage) 
    var localAsObject = JSON.parse(localAsString) 
    var arrayOfKeys = Object.keys(localAsObject) 
    return(arrayOfKeys)
}

export const addToLocalStorage = (id:number) => {
    var keys = getKeysFromLocalStorage()
    if(!keys.includes(id.toString())){
        localStorage.setItem(id.toString(), "")
    } console.log("nothing added, key already exists")
}
