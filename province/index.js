// จังหวัด
const fs = require('fs');
const targetJSON = require("./target.json");

const newTargetJSON = [];
const optionList = [];
let enumList = ``;

for (let index = 0; index < targetJSON.length; index++) {
  const element = targetJSON[index];
  const enumValue = element.name_en.toUpperCase().split(" ").join("_").split("-").join("_");

  const mapperNewTargetJSON = {
    label: element.name_th,
    name_th: element.name_th,
    name_en: element.name_en,
    value: enumValue,
    id: element.id,
  };

  const mapperOptionList = {
    label: element.name_th,
    name_th: element.name_th,
    name_en: element.name_en,
    value: enumValue,
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
