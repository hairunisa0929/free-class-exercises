import fs from "fs";
import { parseDocument } from "htmlparser2";
import { getElementById } from "domutils/lib/legacy";
import { findOne } from "domutils/lib/querying";


const html = fs.readFileSync('./src/index.html',
    { encoding: 'utf8', flag: 'r' });

const dom = parseDocument(html);

it("check background color of title", function(){
  const title = getElementById("title", dom.children);

  let checkProp = false;

	if (title.attribs.style.includes("background-color:yellow")) {
	  checkProp = true;
	} else if (title.attribs.style.includes("background-color: yellow")){
	  checkProp = true;
	} else {
	  checkProp = false;
	}

  expect(checkProp).toBeTruthy();
})

it("check text color of description", function(){
  const description = findOne(element => element.attribs.class === "description", dom.children);

  let checkProp = false;

	if (description.attribs.style.includes("color:blue")) {
	  checkProp = true;
	} else if (description.attribs.style.includes("color: blue")){
	  checkProp = true;
	} else {
	  checkProp = false;
	}

  expect(checkProp).toBeTruthy();
})