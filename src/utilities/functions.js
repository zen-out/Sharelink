let tags = "social, media, fun";
function seperateTags(string) {
  let tags = [];
  let arr = string.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ",") {
      let spliced = arr.splice(0, i);
      let word = spliced.join("");
      tags.push(word);
    }
  }
  return tags;
}

console.log(tags.split(","));
let newArr = tags.split(",");
for (let i = 0; i < newArr.length; i++) {
  newArr[i] = newArr[i].trim();
}
console.log(newArr);

console.log(seperateTags(tags));

function sepTags(string) {
  let newArr = string.split(",");
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i].trim();
  }
  return newArr;
}

console.log(secondDraft(tags));
