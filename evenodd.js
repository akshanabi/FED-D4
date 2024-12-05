let en = [1,2,3,4,5,6,7,8,9,10];

console.log("Even numbers");

for(let i=0; i<= en.length; i++)
{
    if(en[i] % 2 == 0)
    {
        console.log(en[i]);
    }
}

let on = [1,2,3,4,5,6,7,8,9,10];

console.log("Odd numbers");

for(let i=0; i<= on.length; i++)
{
    if(on[i] % 2 != 0)
    {
        console.log(on[i]);
    }
}