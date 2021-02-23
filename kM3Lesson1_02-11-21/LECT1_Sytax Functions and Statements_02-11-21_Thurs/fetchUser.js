const fetchUser = (cb) => {
    let user = 'John';
    setTimeout(() => {
        cb(user);
    }, 2000);
}

fetchUser((fetchedUser) => {console.log(fetchedUser);});