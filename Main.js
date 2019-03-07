const LANGUAGES = ["TAMIL", "ENGLISH", "HINDI"];
const PROGRAMMING_LANGUAGES = ["C", "C++", "JAVA", "JAVASCRIPT"];

class Employee {
    constructor(id, name, designation, baseSalary, ranking) {
        this.id = id;
        this.name = name;
        this.designation = designation;
        this.baseSalary = baseSalary;
        this.ranking = ranking;
    }

    calculateSalary(overTimeInHours) {
        let actualSalary = this.baseSalary + (overTimeInHours * 50);
        return actualSalary;
    }

    calculateBonusPoints() {
        return 100 - (this.ranking / 10 * 100);
    }

    // Template literals
    // `Hello ${name}`

    print(overTimeInHours) {
        console.log(`The name of this employee is ${this.name} and actual salary is ${this.calculateSalary(overTimeInHours)}. Bonus points for this employee is ${this.calculateBonusPoints()}`);
    }
}

class Receptionist extends Employee {
    constructor(id, name, designation, baseSalary, ranking, languageOfInteraction) {
        super(id, name, designation, baseSalary, ranking);

        this.languageOfInteraction = languageOfInteraction;
    }

    speak() {
        switch (this.languageOfInteraction) {
            case LANGUAGES[0]:
                console.log("வணக்கம்! நீங்கள் எப்படி இருக்கிறீர்கள்?");
                return;
            case LANGUAGES[1]:
                console.log("Hello! How are you?");
                return;
            case LANGUAGES[2]:
                console.log("नमस्कार! क्या हाल है?");
                return;
            default:
                console.log("Hello! How are you?");
        }
    }
}

class SWDeveloper extends Employee {
    constructor(id, name, designation, baseSalary, ranking, domainExpertise) {
        super(id, name, designation, baseSalary, ranking);

        this.domainExpertise = domainExpertise;
    }

    writeCode() {
        switch (this.domainExpertise) {
            case PROGRAMMING_LANGUAGES[0]:
                console.log("\n#include<studio.h> \nint main() {\nprintf(\"Hello World!\")\n}");
                return;
            case PROGRAMMING_LANGUAGES[1]:
                console.log("\n#include<iostream.h> \nint main() {\cout << \"Hello World!\"\n}");
                return;
            case PROGRAMMING_LANGUAGES[2]:
                console.log("\npublic static void main(String[] args) {\n System.out.println(\"Hello World\")\n}");
                return;
            case PROGRAMMING_LANGUAGES[3]:
                console.log("\nconsole.log(\"Hello World\")");
                return;
            default:
                console.log("N/As");
        }
    }
}



// let e1 = new Employee(1, "Swami", "SWD", 50000, 10);
// let actualSalaryOfE1 = e1.calculateSalary(8);
// console.log(actualSalaryOfE1);
// console.log(e1.calculateBonusPoints());

// let e2 = new Employee(2, "Ragu", "PM", 80000, 1);
// let actualSalaryOfE2 = e2.calculateSalary(50);
// console.log(actualSalaryOfE2);
// console.log(e2.calculateBonusPoints());

let e1 = new Employee(1, "Swami", "SWD", 50000, 10);
e1.print(10);
// console.log(e1);
// e1.speak();

let e2 = new Employee(2, "Ragu", "PM", 80000, 1);
e2.print(50);

let r1 = new Receptionist(3, "Rahul", "Receptionist", 15000, 1, "ENGLISH");
r1.print(0);
r1.speak();

let swd1 = new SWDeveloper(4, "Samuel", "Software Developer", 100000, 1, "JAVASCRIPT");
swd1.print(0);
swd1.writeCode();

let swd2 = new SWDeveloper(5, "Ram", "Software Developer", 100000, 1, "JAVA");
swd2.print(0);
swd2.writeCode();

let f1 = {
    name: "Android",
    language: "JAVA/KOTLIN"
};

let f2 = {
    name: "REACT.JS",
    language: "NODE.JS"
};

// let f3 = {};
// f3.namne = f1.name;
// f3.language = f1.language;

// let f3 = f1;

let f3 = { ...f1 }; // Spread Operator

