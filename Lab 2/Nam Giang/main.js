var fruits = ["Grape", "Apple", "Banana",15]
document.getElementById("demo").innerHTML = fruits[0]
var morefruits = [["Grape",'15'],['Apple','15'],['Banana','15']]
document.getElementById("demo").innerHTML = morefruits
console.log("I have 15 grapes")
var myDog = {
    "name": "Ngáo",
    "legs": 4,
    "friends": ["everything!"]
};
document.getElementById("demo1").innerHTML = "Before: " + Object.getOwnPropertyNames(myDog);
Object.defineProperty(myDog, "color", {value: Brown});
document.getElementById("demo2").innerHTML = "After: " + Object.getOwnPropertyNames(myDog);


