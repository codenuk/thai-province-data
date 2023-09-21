// เขต/อำเภอ
const targetJSON = require("./target.json");
const outputProvinceJSON = require("../province/output.json");
var fs = require('fs');

const newTargetJSON = [];
const optionList = [];
let enumList = ``;

for (let index = 0; index < targetJSON.length; index++) {
  const element = targetJSON[index];
  const enumValue = element.name_en.toUpperCase().split(" ").join("_").split("-").join("_");
  const findParent = outputProvinceJSON.find((ele) => ele.id === element.province_id)

  const mapperNewTargetJSON = {
    label: element.name_th,
    name_th: element.name_th,
    name_en: element.name_en,
    value: enumValue,
    id: element.id,
    provinceID: findParent.value 
  };
  const mapperOptionList = {
    label: element.name_th,
    name_th: element.name_th,
    name_en: element.name_en,
    value: enumValue,
    provinceID: findParent.value 
  };
  newTargetJSON.push(mapperNewTargetJSON);
  optionList.push(mapperOptionList);
  enumList = enumList + ` ${enumValue}`
}

fs.appendFile("output.json", JSON.stringify(newTargetJSON), function (err) {
  if (err) throw err;
  console.log("Saved!");
});

fs.appendFile("outputOptions.json", JSON.stringify(optionList), function (err) {
  if (err) throw err;
  console.log("Saved!");
});

fs.appendFile("enum.txt", JSON.stringify(enumList), function (err) {
  if (err) throw err;
  console.log("Saved!");
});
