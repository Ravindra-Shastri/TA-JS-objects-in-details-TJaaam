function creatUser(name,id,noOfProjects){
let user = {};
user.name = name;
user.id = id;
user.noOfProjects = noOfProjects;
user.getProjects =function(){
return user.noOfProjects;
};
user.changeName = function(newName){
let prevName = user.name;
user.name = newName;
return prevName;
}
user.incrementProject = function(){
user.noOfProjects += 1;
return user.noOfProjects;
};
user.decrementProject = function(){
    user.noOfProjects -= 1;
return user.noOfProjects;
}
return user;
}
 let aman = creatUser("Aman",123,23);
 let john = creatUser("john",1,100);

 console.group("Aman");
 console.log(aman.name);
 console.log(aman.id);
 console.log(aman.incrementProject());
 console.log(aman.decrementProject());
 console.log(aman.changeName("Sunny"));
 console.groupEnd();

 console.group("John");
 console.log(john.name);
 console.log(john.id);
 console.log(john.incrementProject());
 console.log(john.decrementProject());
 console.log(john.changeName("Samar"));
 console.log(john.name);
 console.groupEnd();