console.log('before');
getUsers(2, (user) => {
    console.log(user);
});

console.log('after');

function getUsers(id, callback){

    setTimeout(() => {
        console.log('get user from database.....');
        callback({
            id: id,
            gitHubusername: "rochdi Abdelatif"
        })
    }, 2000);
}