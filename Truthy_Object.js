// A program to go through the collection of objects from an array. The predicate "pred" will be an object property and we need to return "true" if its value is truthy. Otherwise, return "false".

function truthyProperty(objects, pred) {
    var output = false;

    //Looping through each object's property to find if that pred property value is truthy or not.
    for (var e in objects) {
        if (objects[e][pred]) {
            output = true;
        }
        else {
            return false;
        }
    }
    return output;
}

console.log(truthyProperty([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot"));
console.log(truthyProperty([{ name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] }, { name: "Code Radio", users: [{ name: "Camperbot" }] }, { name: "", users: [] }], "users"));