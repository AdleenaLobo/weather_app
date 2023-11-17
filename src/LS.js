let temp;
function checkLocalStoreage() {
  temp = localStorage.getItem("tempStored");
  console.log(temp);
}

export { temp, checkLocalStoreage };
