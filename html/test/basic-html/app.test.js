import fs from "fs";
import { parseDocument } from "htmlparser2";
import { getElementsByTagName } from "domutils/lib/legacy";
import { textContent } from "domutils/lib/stringify";

const html = fs.readFileSync('./src/index.html',
    { encoding: 'utf8', flag: 'r' });

const dom = parseDocument(html);

it("check heading not empty", function(){
  const h1 = getElementsByTagName("h1", dom)[0];
  const textH1 = textContent(h1);
  expect(textH1).not.toBe("");
})

it("check heading content", function() {
  // test case heading 1
  const h1 = getElementsByTagName("h1", dom)[0];
  const textH1 = textContent(h1);
  expect(textH1.toLowerCase()).toBe("mochi");
})

it("check src not empty", function(){
  const image = getElementsByTagName("img", dom)[0];
  expect(image.attribs.src).not.toBe("");
})

it("check src url", function(){
  // test case src image
  const image = getElementsByTagName("img", dom)[0];
  const url = "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg";
  expect(image.attribs.src).toContain(url);
})