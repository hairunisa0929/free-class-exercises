import fs from "fs";
import { parseDocument } from "htmlparser2";
import { getElementById } from "domutils/lib/legacy";
import { findOne } from "domutils/lib/querying";


const html = fs.readFileSync('./src/index.html',
    { encoding: 'utf8', flag: 'r' });

const dom = parseDocument(html);

it("check the height of banner", function(){
  const banner = findOne(element => element.attribs.class === "banner", dom.children);

  let checkProp = false;

	if (banner.attribs.style.includes("height:250px")) {
	  checkProp = true;
	} else if (banner.attribs.style.includes("height: 250px")){
	  checkProp = true;
	} else {
	  checkProp = false;
	}

  expect(checkProp).toBeTruthy();
})

it("check if attribute style in p exists", function(){
  const paragraph = findOne(element => element.attribs.class === "announcement", dom.children);
  expect(paragraph.attribs.style).toBeTruthy();
})

it("check the padding of paragraph", function(){
  const paragraph = findOne(element => element.attribs.class === "announcement", dom.children);

  let checkProp = false;

	if (paragraph.attribs.style.includes("padding:8px 4px")) {
	  checkProp = true;
	} else if (paragraph.attribs.style.includes("padding: 8px 4px")){
	  checkProp = true;
	} else {
	  checkProp = false;
	}

  expect(checkProp).toBeTruthy();
})

//to do tambahin test case padding left right top bottom