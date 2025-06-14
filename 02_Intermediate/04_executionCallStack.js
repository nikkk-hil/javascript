

let val1 = 10;
let val2 = 5;

function addTwoNum(num1, num2){
    let total = num1 + num2;
    return total;
}

let rs1 = addTwoNum(val1, val2);
let rs2 = addTwoNum(3,6);

/*

JAVASCRIPT EXECUTION CONTEXT

    -> Global EC (this variable contains it)  --------"browser has window object in this variable"

    three type of EC
        Global
        Function
        Eval

    A Javascript code runs in two phases     #1 Memory Allocation Phase
                                             #2 Execution Phase

*/

/*

Taking refernce from above written code to explain how js runs in two phase
    global execution se run hoga code and stored in this

    Mem Alloc Phase
        val1 -> undefined
        val2 -> undefined
        addTwoNum -> definition
        rs1 -> undefined
        rs2 -> undefined

    Execution phase
        val1 -> 10
        val2 -> 5
        addTwoNum --------- Create a new Execution Context (new variable environment + execution thread)
                                Mem Phase                       Exec Phase
                                    val1 -> undefined               num1 -> 10
                                    val2 -> undefined               num2 -> 5
                                    total -> undefined              total -> 15 (returned to global execution context)

        then the new execution context gets deleted

        similarly addTwoNum again create new environment goes on with two phase


*/