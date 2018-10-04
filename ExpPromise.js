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

