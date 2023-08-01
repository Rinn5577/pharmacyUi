export const getKeysFromLocalStorage = () => {
  let faveKeys = [] as string[];
  let localAsString = JSON.stringify(localStorage);
  let localAsObject = JSON.parse(localAsString);
  let arrayOfIdentifiers = Object.keys(localAsObject);
  let arrayOfValues = Object.values(localAsObject) as string[];

  for (let i = 0; i < arrayOfIdentifiers.length; i++) {
    if(arrayOfIdentifiers[i].includes("favePharm")){
        for (let j = 0; j < arrayOfValues.length; j++) {
          faveKeys.push(arrayOfValues[i])
        }
    }
    
  }
  return faveKeys;
};

export const addToLocalStorage = (id: number) => {
  let keys = getKeysFromLocalStorage();
  //let index = getKeysFromLocalStorage().length +1;

  if (!keys.includes(id.toString()) && keys.length < 3) {
    //localStorage.setItem(id.toString(), "");
    localStorage.setItem(`favePharm id = ${id}`, id.toString());
    return true;
  } else {
    console.log("favorite not added");
  }
};
