function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");
}

// sayMyName => defintion or we can say reference of function  &&   sayMyName() => function ka execution

sayMyName();

display(200,300,400,500,800,900,1000);

function display(val1, val2, ...rem){
    console.table([val1, val2, rem]);
}

print(1000,1200,500)

const print = function(val_1, val_2, ...reamaining){
    console.table([val_1, val_2, reamaining])
}



