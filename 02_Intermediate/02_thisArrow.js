/* Browser return this keyword as windows */



const obj = {
  name: "John",
  sayName: function() {
    console.log(this.name);
  }
};

obj.sayName()
console.log(this)

const fn = function(){
    let name = 'Draft Punk'
    console.log(this.name);    //undefined
    console.log(this)
}

fn()

// const arrowFn = () => (this)    //automatically return the expression in the parenthesis

// const arrowFn = () => ({name: 'Ariana Grande'})

// const arrowFn = () => {
//     return 'Sabrina Carpenter'
// }

const arrowFn = () => {
    let name = 'Charlie'
    console.log(this.name)
    console.log(this)
}

arrowFn();

