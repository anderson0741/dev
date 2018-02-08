var employees = [];

var Employee = function(name, title, salary){
    this.name = name;
    this.title = title;
    this. salary = salary;
    this.status = "Full Time";
}

Employee.prototype.printEmployeeForm = function(){
    console.log("Name: " + this.name + "\nTitle: " + this.title + "\nSalary: " + this.salary + "\nStatus: " + this.status);
}

var john = new Employee("John", "Manager", "100k");
var pollyStaal = new Employee("Polly Staal", "Receptionist", "50k");
var henry = new Employee("Henry", "Janitor", "1,000,000", "Weekend Warrior");

henry.status = "Contract";
henry.disposition = "bitchy";
// console.log(henry);

john.printEmployeeForm();
henry.printEmployeeForm();

employees.push(john, pollyStaal, henry);
console.log(employees);