// Masala: nta indexdan iborat massiv orasidan juft elementlari orasidan eng kattasini toping

let n=9;
let array=[];

for(i=0; i<=n; i++){
    if(i%2==0){
        array.push(i);
    }
}

console.log(Math.max(...array));