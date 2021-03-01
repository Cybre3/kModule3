// function power(exponent, base) { // 2^2 = 4    2^3 = 8
//    return base ** exponent;
// }

// const square = x => power(2, x);
// const cube = x => power(3, x);

// console.log(power(2, 5));
// console.log(square(5));
// console.log(cube(5));

//------------------------------------------------------------------//

// template function

const buildUrl = (protocol, domain, path) => {
    return `${protocol}://${domain}/${path}`;
};
const facebookUrl = buildUrl('https', 'facebook.com', 'login');
console.log(facebookUrl); // https://facebook.com/login

// partial for https

const buildHttpsUrl = (domain, path) => buildUrl('https', domain, path);
const twitterUrl = buildHttpsUrl('twitter.com', 'home');
console.log(twitterUrl);