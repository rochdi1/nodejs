console.log('before');
getUsers(2, (user) => {
    console.log(user);
    getRepos(user.id, (rep) => {
        console.log(rep);
    });
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


function getRepos(idUser, callback){

    setTimeout(() => {
        console.log('get a repos.....');
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000);
}
