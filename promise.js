const p = new Promise((resolve, reject) => {
   const status = false;
  
   if(status) {
    // le cas favorable
    resolve({id:1, name: 'Rochdi Abdelatif'});
   } else {
    // le cas defavorable on recois um message
    reject(new Error('user is not found!'));
   }

});

//then donne le retour favorable et le catch donne le cas defavorable
p.then((user)=>console.log('resolve : ', user))
 .catch((err)=>console.log('reject : ', err.message));

 console.log('before');
    getUsers(2).then((user) => {
                                console.log(user);
                                return getRepos(user.id);
                                })
               .then((repos) => {
                    console.log(repos);
                });

console.log('after');

 function getUsers(id){

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

function getRepos(idUser){

    return new Promise((resolve, reject) => {
            setTimeout(() => {
                                console.log('get a repos.....');
                                resolve(['repo1', 'repo2', 'repo3'])
                            }, 2000);

    });

}