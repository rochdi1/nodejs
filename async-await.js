function getUsers(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('get user from database.....');
            resolve({
                id: id,
                gitHubusername: "rochdi Abdelatif"
            })
        }, 2000);
    });
}

function getRepos(idUser) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('get a repos.....');
            resolve(['repo1', 'repo2', 'repo3'])
        }, 2000);

    });
}

async function run(){
    const user = await getUsers(2);
    console.log(user);
} 
run();