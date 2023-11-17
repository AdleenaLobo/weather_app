import { faren } from "./getElem";
import { addTemperature } from "./temp";
import { ans } from "./getData";
import { checkLocalStoreage, temp } from "./LS";
function checkClickFarenheit() {
  faren.addEventListener("click", storeInLS);
}

function storeInLS() {
  localStorage.setItem("tempStored", "farenheit");
  checkLocalStoreage();
  addTemperature(ans, temp);
}

export { checkClickFarenheit };
