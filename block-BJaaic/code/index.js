
 let animalMethods = {
     eat: function(){
         console.log(`I live in ${this.location} and I can eat`);
     },
     changeLocation: function(newLocation){
        this.location = newLocation;
        return this.location;
     },
     summary: function(){
         console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`
         )
     },
 };

 function createAnimal(location,numberOfLegs){
     let obj = object.createAnimal(animalMethods);
     obj.location = location;
     obj.numberOfLegs = numberOfLegs;
     return obj;
 }


 function createDog(location,numberOfLegs,name,color){
    let obj = createAnimal(location,numberOfLegs);
    object.setPrototypeOf(obj,dogsMethods);
    obj.name = name;
    obj.color = color;
    return obj;
}

 let dogsMethods = {
    bark(){
        alert(`I am ${this.name} and I can bark 🐶`);
    },
    changeName(newName){
       this.name = newName;
       return this.name;
    },
    changeColor(newColor){
        this.color = newColor;
        return this.color;
     },
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
        
    },
};
object.setPrototypeOf(dogsMethods,animalMethods);


function createCat(location,numberOfLegs,name,colorOfEyes){
    let obj = createAnimal(location,numberOfLegs);
    object.setPrototypeOf(obj,catsMethods);
    obj.name = name;
    obj.color = colorOfEyes;
    return obj;
}

 let CatssMethods = {
    meow(){
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName(newName){
       this.name = newName;
       return this.name;
    },
    changeColorOfEyes(newColor){
        this.colorOfEyes = newColor;
        return this.colorOfEyes;
     },
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
        
    },
};
object.setPrototypeOf(catsMethods,animalMethods);