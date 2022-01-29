// typical way - here in place of all falsy values default kicks in
const data = null;
const storedData = data || "default";
console.log( storedData );

// nullish coalescing way - here for null and undefined only default value kicks in
const data1 = false;
const storedData1 = data1 ?? "default";
console.log( storedData1 );
