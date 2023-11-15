import { condition } from "./getElem";
function addCondition(ans) {
  condition.textContent = ans.current.condition.text;
}

export { addCondition };
