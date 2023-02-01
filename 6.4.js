let a = "5";
let b = "6";

if (a === b) {
  console.log("The same");
} else {
  console.log("Not the same");
}

a = "6";

if (a === b) {
  console.log("The same");
} else {
  console.log("Not the same");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let j = 0;
while (true) {
  if (j >= 5) {
    break;
  }

  console.log(j);
  j++;
}

let k = 0;
while (k < 5) {
  console.log(k);
  k++;
}
