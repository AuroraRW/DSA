function fuc(n) {
    for (let i = 0; i < n; i++) {
        console.log("booooo");
    }
}
// O(1)

function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = "hi";
    }
    return hiArray;
}
arrayOfHiNTimes(6);
// O(n)