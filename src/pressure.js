import { pressure } from "./getElem";
function addPressure(ans) {
  pressure.textContent = ans.current.pressure_mb + " mb";
}

export { addPressure };
