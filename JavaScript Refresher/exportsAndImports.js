//person.js
const person = {
  name: "Gil",
};

export default person; //default can be imported as any name

//utility.js
export const clean = () => {
  return;
};
export const baseData = 10;

//app.js
import person from "./person.js";
import prs from "./person.js"; //default can be imported as any name

import { baseData } from "./utility.js";
import { clean } from "./utility.js";
import { clean as myClean } from "./utlity.js"; 

import * as bundled from './utlity.js'
bundled.baseData
bundled.clean