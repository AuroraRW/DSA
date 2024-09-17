let obj1 = {a: 123}
let obj2 = obj1
// console.log(obj1)
// console.log(obj2)
///////////point to another memory//////////
obj1.a=234
// console.log(obj1)
// console.log(obj2)

////////////garbage collection///////////
// {a: 123} will be deleted automatically
obj1="abcd"
obj2=987
console.log(obj1)
console.log(obj2)


