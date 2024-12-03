let n = 3;

/* Pattern
1 2 3  |  ***
1 2 3  |  ***
1 2 3  |  ***
*/

for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        process.stdout.write(`${j+1} `);
    }
    console.log();
}

console.log("\n");

/* Pattern
1 2 3  |  ***
4 5 6  |  ***
7 8 9  |  ***
*/

let num = 1;

for(let i=0;i<n;i++){
    
    for(let j=0;j<n;j++){
        process.stdout.write(`${num} `);
        num++;
    }
    console.log();
}