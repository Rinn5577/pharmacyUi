
export const getIdsFromLocalStorage = () => {
  let faveIds = [] as string[];
  let localAsString = JSON.stringify(localStorage);
  let localAsObject = JSON.parse(localAsString);
  let arrayOfKeys = Object.keys(localAsObject);
  let arrayOfValues = Object.values(localAsObject) as string[];

  //Grabs only the keys and values from localStorage that belong to this application
  for (let i = 0; i < arrayOfKeys.length; i++) {
    if (arrayOfKeys[i].includes("favePharm")) {
      for (let j = 0; j < arrayOfValues.length; j++) {
        if (!faveIds.includes(arrayOfValues[i])) {
          faveIds.push(arrayOfValues[i]);
        }
      }
    }
  }
  return faveIds;
};

export const addToLocalStorage = (id: number, formatedResponse:Function) => {
  if(checkIsFavorite(id) === true){
    return formatedResponse(false)
  }else{
    localStorage.setItem(`favePharm id = ${id}`, id.toString());
    return formatedResponse(true)
  }
};

export const checkIsFavorite = (id: number) => {
  let ids = getIdsFromLocalStorage();
  if (ids.includes(id.toString())) {
    return true;
  }
  return false;
};
