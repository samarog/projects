// Amu666ement Park
// Anyone younger than 6 or older than 66 has a discount ticket.
/* 

let guests = []

for (let i = 1; i <= 100; i++) { // var 'i' here is only need to make the loop works.
    
let randomAge = Math.ceil(Math.random() * 80);

    randomAge <= 6 || randomAge >= 66 ? guests.push(randomAge + ': Discount') : guests.push(randomAge);
    
}

console.log(guests); */

// +add isHoliday:

let guests = []

const isHoliday = false
for (let i = 1; i <= 100; i++) {
    
let randomAge = Math.ceil(Math.random() * 80);

    (randomAge <= 6 && isHoliday === false) || (randomAge >= 66 && isHoliday === false) ? guests.push(randomAge + ': Discount') : guests.push(randomAge);
    
}

console.log(guests);


