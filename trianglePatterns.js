let n = 4;

/* Pattern
1     |  *
12    |  **
123   |  ***
1234  |  ****
*/

for(let i=0;i<n;i++){
    for(let j=0;j<i+1;j++){
        process.stdout.write(`${j+1}`);
    }
    console.log();
}

console.log("\n");


/* Pattern
1     |  *
22    |  **
333   |  ***
4444  |  ****
*/

for(let i=0;i<n;i++){
    for(let j=0;j<i+1;j++){
        process.stdout.write(`${i+1}`);
    }
    console.log();
}

console.log("\n");

/* Pattern
1     |  *
21    |  **
321   |  ***
4321  |  ****
*/

for(let i=0;i<n;i++){
    for(let j=i;j>=0;j--){
        process.stdout.write(`${j+1}`);
    }
    console.log();
}

console.log("\n");

/* Floyd Triangle Pattern
1      |  *
23     |  **
456    |  ***
78910  |  ****
*/

let num = 1;

for(let i=0;i<n;i++){
    for(let j=0;j<i+1;j++){
        process.stdout.write(`${num}`);
        num++;
    }
    console.log();
}

console.log("\n");

/* Inverted Triangle Pattern
1111
 222
  33
   4
*/

for(let i=0;i<n;i++){
    for(let space=0;space<i;space++){
        process.stdout.write(" ");
    }

    for(let j=0;j<n-i;j++){
        process.stdout.write(`${i+1}`);
    }
    console.log();
}