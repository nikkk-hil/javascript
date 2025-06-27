const user = {
    username: "Ariana Grande",
    age: "23",

    getUserDetails: function(){
        console.log(this)
    }
}

// console.log(this);
// console.log(user.getUserDetails());  //executable

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome! ${this.username}`)
    };

    return this;
}

const user1 = User("Kylie Jenner", "69", true);
const user2 = User("Dua Lipa", "88", true);

// console.log(user1);

const user3 = new User("Kylie Jenner", "69", true);
const user4 = new User("Dua Lipa", "88", true);

// console.log(user3);
console.log(user4.constructor());