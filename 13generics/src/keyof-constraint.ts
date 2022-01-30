function extractAndConvert<T extends object, U extends keyof T>( obj:T, key:U ) {
    return "Value:" + obj[key];
}
// It helps to be sure that our object holds the key, that key which we pass as second argument
const result = extractAndConvert( { name: "Vikas" }, "name" );
console.log( result);
