let sum = 0;

process.argv.forEach((arg) =>{
    let num = Number(arg);
    if (num)
        sum = sum + num;
});

console.log(sum);