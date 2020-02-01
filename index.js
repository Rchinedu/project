function naMe(data){
    if(Number(data)){
        alert("it is a number")
    }if(!Number(data)){
        alert("it is a string")
    }
}

const value = prompt("Enter Value:")
naMe(value)