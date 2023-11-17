import { cel } from "./getElem";
import { addTemperature } from "./temp";
import { ans } from "./getData";
import { checkLocalStoreage } from "./LS";
function checkClickCelsius() {
  cel.addEventListener("click", storeInLS);
}
function storeInLS() {
  localStorage.setItem("tempStored", "celsius");
  checkLocalStoreage();
  addTemperature(ans);
}

export { checkClickCelsius };
