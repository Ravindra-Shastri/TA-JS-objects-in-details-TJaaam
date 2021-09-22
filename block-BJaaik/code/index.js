// Convert the give image into class using inheritance.

// - `name` is the property
// - `eat()` is the method

// Property ending with `()` is method. And others are properties.

// ![Inheritance](../assets/inheritance.png)

class person{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){
        console.log(`${this.name} can eat!`);
    }
    sleep(){
        console.log(`${this.name} can sleep!`);
    }
    walk(){
        console.log(`${this.name} can walk!`);
    }
}

class player extends person {
    constructor(name, age, gender, sportsName){
        super(name , age, gender);
        this.sportsName = sportsName;
    }  
    play(){
        console.log(`${this.name} can play!`);
    }
    
}

class Teacher extends person {
    constructor(name, age, gender, instituteName){
        super(name , age, gender);
        this.instituteName = instituteName;
    }  
    teach(){
        console.log(`${this.name} can teach!`);
    }
    
}

class Artist extends person {
    constructor(name, age, gender, kind){
        super(name , age, gender);
        this.kind = kind;
    }  
    createArt(){
        console.log(`${this.name} can create art of ${this.kind}!`);
    }
    
}

class cricketer extends player {
    constructor(name, age, gender, sportsName, teamName){
        super(name , age, gender, sportsName);
        this.teamName = teamName;
    }  
    playCricket(){
        console.log(`${this.name} can play cricket!`);
    }
    
}