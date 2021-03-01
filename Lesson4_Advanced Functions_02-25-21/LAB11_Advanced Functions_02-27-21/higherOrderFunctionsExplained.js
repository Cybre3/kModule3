//HOW TO PASS AND RETURN A FUNCTION
//STEP 1
//Create a template function
function msg(feeling, action, animals) {
    return `I ${feeling} ${action} ${animals}`;
}
//STEP 2
//Create a secondary function
//Accept & Return a function
function main(func) {
    // arg is the template function
    //Step 3: Have the function return a function.
    //Append the template argument(s) (a = future arg to be appended)
    return function (a) {
        //STEP 4: Have your new function actually return the template function.
        //Apply the template argument(s) and integrate your new function argument(s)
        return func('hate', 'wild', a);
    };
}
//STEP 5: Save the RETURN value by calling the main with the template function you would like to use.
let animal = main(msg);
//STEP 6: Call the appended function by variable name
//pass the new argument(s) for your edited template function
//print the result.
console.log(animal('pigs'));
