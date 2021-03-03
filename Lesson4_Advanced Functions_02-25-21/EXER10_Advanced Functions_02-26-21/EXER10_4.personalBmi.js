let personProfile  = (name, age, weight, height) => {
    const BMI = Math.round(weight / (height / 100) ** 2); 
    let personObj = {
        name,
        personalInfo: {
            age,
            weight,
            height,
        },
        BMI,
        status: ''
    };
    return personObj;
};

let recommend = (person) => person.recommendation = 'admission required';

function main(name, age, weight, height) {

    let person = personProfile (name, age, weight, height);

    if (person.BMI >= 30){
        person.status = 'obese';
        recommend(person);
    } else if (person.BMI >= 25) {
        person.status = 'overweight';
    } else if (person.BMI >= 18.5) {
        person.status = 'normal';
    } else if (person.BMI < 18.5) {
        person.status = 'underweight';
    } else {
        person.status = 'unknown';
    }
    console.log(person);
}

main('Peter', 29, 75, 182);
main('Honey Boo Boo', 9, 57, 137);