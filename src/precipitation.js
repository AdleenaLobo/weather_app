import { precip } from "./getElem";

function addPrecip(ans) {
  precip.textContent = ans.current.precip_mm + " mm";
}

export { addPrecip };
