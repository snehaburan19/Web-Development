var flm= (function flmlibrary(){
    return{
        imageEffect:function(){
            console.log("hello sneha");
        },
        mousefollow:function(){
            console.log("hello sania");
        }
    }
})();

flm.mousefollow();
flm.imageEffect();

console.log("---------")



function abcd(){
    return function(){
        return function(){
            return function(){
        console.log("HIGHER ORDER FUNCTION")
    }
}
    }
}


abcd()()()();

console.log(abcd()()()());

console.log("-------------------------");

function abc(func){
    func();
}
abc (function(){
    console.log("this is about accepting ")
})

console.log("-------------------------");

function xyz(){
    var a = "pure function";
    console.log(a)
}

xyz();

//IMPURE funations - uses Global variables\

var a = "Impure functions";
function cat(){
    console.log(a);
}
cat();