const Numrange= []

for (let i= 1; 
    i <=100; 
    i++) {
    Numrange.push(i);
}

const evennumber= Numrange.filter(x=> x%2===0);

console.log(evennumber);