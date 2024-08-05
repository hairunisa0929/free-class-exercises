import fs from "fs";
import { parseDocument } from "htmlparser2";
import { getElementsByTagName } from "domutils/lib/legacy";
import { textContent } from "domutils/lib/stringify";
import { findOne, findAll } from "domutils/lib/querying";


const html = fs.readFileSync('./src/index.html',
    { encoding: 'utf8', flag: 'r' });

const dom = parseDocument(html);

function listItems(name) {
  const element = findOne(elem => elem.name === name, dom.children);
  const items = findAll(elem => elem.name === 'li', element.children);
  return items;
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    // Sort both arrays
    arr1 = arr1.slice().sort();
    arr2 = arr2.slice().sort();

    // Compare elements
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

it("check if ul exists", function(){
  const ul = getElementsByTagName("ul", dom)[0];
  expect(ul).not.toBeUndefined();
})

it("check if ol exists", function(){
  const ul = getElementsByTagName("ol", dom)[0];
  expect(ul).not.toBeUndefined();
})

it("check length of li inside ul", function(){
  const items = listItems("ul");
  expect(items.length).toBe(3);
})

it("check length of li inside ol", function(){
  const items = listItems("ol");
  expect(items.length).toBe(3);
})

it("check items inside ul", function(){
  const fruits = ["apel", "jeruk", "mangga"];
  const lists = listItems("ul");
  const items = lists.map(item => textContent(item.children).toLowerCase());
  const isEqual = arraysEqual(fruits, items);
  expect(isEqual).toBeTruthy();
})

it("check items inside ol", function(){
  const fruits = ["brokoli", "wortel", "sawi"];
  const lists = listItems("ol");
  const items = lists.map(item => textContent(item.children).toLowerCase());
  const isEqual = arraysEqual(fruits, items);
  expect(isEqual).toBeTruthy();
})