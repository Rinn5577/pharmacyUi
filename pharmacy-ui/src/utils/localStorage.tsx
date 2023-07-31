export const getKeysFromLocalStorage = () => {
  let localAsString = JSON.stringify(localStorage);
  let localAsObject = JSON.parse(localAsString);
  let arrayOfKeys = Object.keys(localAsObject);
  return arrayOfKeys;
};

export const addToLocalStorage = (id: number) => {
  let keys = getKeysFromLocalStorage();
  if (!keys.includes(id.toString()) && keys.length < 3) {
    localStorage.setItem(id.toString(), "");
    return true;
  } else {
    console.log("favorite not added");
  }
};
