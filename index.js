console.log('before');
const user = getUsers(2);
console.log(user);
console.log('after');

function getUsers(id){

    setTimeout(() => {
        console.log('get user from database.....');
        return {
            id: id,
            gitHubusername: "rochdi Abdelatif"
        }
    }, 2000);
}