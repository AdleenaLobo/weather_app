import { place } from "./getElem";
function addPlace(ans) {
  place.textContent = ans.location.region;
}

export { addPlace };
