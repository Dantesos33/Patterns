/* Pattern
   *
  ***
 *****
*******
 *****
  ***
   *
*/

let n = 4;

//Upper Pyramid

for(let i=0;i<n;i++){
    for(let space=0;space<n-i-1;space++){
        process.stdout.write(" ");
    }

    for(let j=0;j<i+1;j++){
        process.stdout.write(`*`);
    }

    for(let j=i;j>0;j--){
        process.stdout.write(`*`);
    }
    console.log()
}

//Lower Rotated Pyramid

for(let i=n-2;i>=0;i--){
    for(let space=0;space<n-i-1;space++){
        process.stdout.write(" ");
    }

    for(let j=0;j<i+1;j++){
        process.stdout.write(`*`);
    }

    for(let j=i;j>0;j--){
        process.stdout.write(`*`);
    }
    console.log()
}

console.log()

/*Hollow Diamond Pattern
   *
  * *
 *   *
*     *
 *   *
  * *
   *
*/

//Upper Hollow Pyramid
for(let i=0;i<n;i++){
    for(let space=0;space<n-i-1;space++){
        process.stdout.write(" ");
    }

    process.stdout.write("*");

    if(i!=0){
    for(let space=0;space<2*i-1;space++){
        process.stdout.write(" ");
    }
    process.stdout.write("*");
}
    console.log()
}

//Lower Hollow Pyramid
for(let i=n-2;i>=0;i--){
    for(let space=0;space<n-i-1;space++){
        process.stdout.write(" ");
    }

    process.stdout.write("*");

    if(i!=0){
    for(let space=0;space<2*i-1;space++){
        process.stdout.write(" ");
    }
    process.stdout.write("*");
}
    console.log()
}
