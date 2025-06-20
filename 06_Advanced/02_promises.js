const promiseOne = new Promise(function (resolve, reject){
    //Do an async task
    //like DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000);
})

// promiseOne.then(function(){
//     console.log('Promise Consumed');
// });

/* ------------------------------------------------------------------*/

const promiseTwo = new Promise(function (resolve, reject){
    let error = false;
    setTimeout(function(){
        error ? reject('Something went wrong!') : resolve('All Good')
    },1000);
})

// promiseTwo
// .then((mess) => {console.log(mess)})
// .catch((err) => {console.log(err)});

/* ------------------------------------------------------------------*/

const promiseThree = new Promise(function (resolve, reject){
    let error = false;
    setTimeout(()=>{
        if (!error)
        resolve({username: 'Draft Phunk', occupation: 'Singer', topSong: 'Get Lucky'})
        else
            reject('ERROR!!!');
    }, 1000)
})

// promiseThree
// .then ((user) => (user.topSong))
// .then ((song) => {console.log(song)})
// .catch ((err)   => {console.log(err)})
// .finally(() => {console.log("The promise is either resolved or rejected")});

/* ------------------------------------------------------------------*/

// async function consumePromiseThree(){
//     try {
//         const response = await promiseThree
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseThree()

// async function getAllUser(){
//     try {
//         const response = await fetch('https://api.github.com/users/nikkk-hil')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUser();

// fetch('https://api.github.com/users/nikkk-hil')
// .then((res) => (res.json()))
// .then((data)=> {console.log(data)})
// .catch((err)=>{console.log(err)});

Promise.all([promiseOne, promiseTwo, promiseThree, fetch('https://api.github.com/users/nikkk-hil')])
.then((res) => {console.log(res)})
.catch((err)=>{console.log(err)});