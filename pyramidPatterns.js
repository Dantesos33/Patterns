/* Pattern
   *
  ***
 *****
*******

   1
  121
 12321
1234321
*/

let n = 4;

for(let i=0;i<n;i++){
    for(let space=0;space<n-i-1;space++){
        process.stdout.write(" ");
    }

    for(let j=0;j<i+1;j++){
        process.stdout.write(`${j+1}`);
    }

    for(let j=i;j>0;j--){
        process.stdout.write(`${j}`);
    }
    console.log()
}