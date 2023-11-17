import { data } from "./getData";
import { listenInput } from "./inputListen";
import { checkClickCelsius } from "./celsius";
import { checkClickFarenheit } from "./farenheit";
import { checkLocalStoreage } from "./LS";

checkLocalStoreage();
checkClickCelsius();
checkClickFarenheit();
listenInput();
data("london");
