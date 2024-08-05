import fs from "fs";
import { parseDocument } from "htmlparser2";
import { getElementsByTagName } from "domutils/lib/legacy";
import { textContent } from "domutils/lib/stringify";

const html = fs.readFileSync('./src/index.html',
    { encoding: 'utf8', flag: 'r' });

const dom = parseDocument(html);

it("check if css contains display block", function(){
  const styles = getElementsByTagName("style", dom)[0];
  const styleContent = textContent(styles.children);
  
  let checkProp = false;

	if (styleContent.includes("display: block")) {
	  checkProp = true;
	} else if (styleContent.includes("display:block")){
	  checkProp = true;
	} else {
	  checkProp = false;
	}

  expect(checkProp).toBeTruthy();
})