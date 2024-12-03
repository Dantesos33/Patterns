/*Butterfly Pattern
*      *
**    **
***  ***
********
********
***  ***
**    **
*      *
*/

let n = 4;

for(let i=0;i<n;i++){
    for(let j=0;j<i+1;j++){
        process.stdout.write("*");
    }

    for(let space=0;space<2*(n-i)-2;space++){
        process.stdout.write(" ");
    }

    for(let j=i;j>=0;j--){
        process.stdout.write("*");
    }

    console.log()
}

for(let i=n-1;i>=0;i--){
    for(let j=0;j<i+1;j++){
        process.stdout.write("*");
    }

    for(let space=0;space<2*(n-i)-2;space++){
        process.stdout.write(" ");
    }

    for(let j=i;j>=0;j--){
        process.stdout.write("*");
    }

    console.log()
}