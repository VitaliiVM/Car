class Man {
    constructor(height, weight, age, sex, name, passport, eye) {
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.sex = sex;
        this.name = name;
        this.passport = passport;
        this.eyeColor = eye;
    }
}

let man = new Man('185','84','29','M','Vasia','09876454','green');
console.log(man);