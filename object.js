//const user=['raju','raju@mail','234uib64]';

const user={name: 'raju',email: 'raju@mail.com', password: '123jkdc'};

console.log( user.name);
console.log( user.email);
console.log( user['password'] );

user.password='xyz789';
console.log(user);

user.address='lucknow';
console.log(user);

delete user.address;
console.log(user);

console.log(Object.keys(user) );
console.log(Object.values(user) );

const smartphone={
    brand: 'samsung',
    model: 'galaxym31',
    price: 14999,
    color: ['black', 'blue', 'red'],

};

console.log(smartphone.color[1] );
smartphone.color[2]='white';
console.log(smartphone.color);
smartphone.color.splice(-1, 1,'gray');
console.log(smartphone.color );

smartphone.color.push('green');
console.log(smartphone.color);

const myphone={
    brand:'oneplus',
    model: '12',
    variant: {
        '8gb': 47000,
        '12gb': 56000
    
    }
};

console.log(myphone. variant ['12gb']);

const phonelist=[
    { brand: 'samsung', model: 'galaxy m31', price: 14999 },
    { brand: 'oneplus', model: '12', price: 24999 },
    { brand: 'infinix', model: 'zeroultra', price: 31000 },
    { brand: 'oppo', model: 'f11pro', price: 27000},

];

console.log(phonelist.length);
//code to find price of second smartphone
//code to change the model of smartphone

console.log(phonelist[1].price);
phonelist[phonelist.length-1].model='v9';
console.log(phonelist);

















