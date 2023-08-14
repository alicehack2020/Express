function add(num1,num2)
{
    return num1+num2;
}
 //slice the input part 
 var data=process.argv.slice(2)

 let result=add(parseInt(data[0]),parseInt(data[1]))
 console.log("result",result)
