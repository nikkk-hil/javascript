/* ------------------ TO LEARN ---------------------- */
/*
    -> How to write two IIFE (Imediately Invoked Function Expression)
    -> Named IIFE
    -> Pass arguments to IIFE

            It is used to get rid of global pollution i.e. variable n all se 
               dikkat hoti hai uskko hatane ke liye use karte h

            used to immediately invoke a function
            for example when one needs to connect server to the database immediately.   
*/

(function (message) {
    console.log(`${message}, IIFE Called`)
})('Hey');

(function() {
    console.log('DB Connected')
})();

( (username) => {
    console.log(`${username}, Good Morning`)
})('Drake');

console.log(`Everything is Fine!`);