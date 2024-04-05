
console.log('hej');

let bish = function(number){
    if(number%3 === 0)
    {
      return 'Bish';
    }
}

let bosh = function(number){
    if(number%4 === 0)
    {
      return 'Bosh';
    }
}

let bishbosh = function(number){
    if(number%3 === 0 && number%4 === 0)
    return 'Bish-Bosh'
};

for (let i = 1; i <= 100; i++){
    
    if(bish(i))
    {
        console.log('Bish');
    }
    else if(bosh(i))
    {
        console.log('Bosh');
    }
    else if(bishbosh)
    {
        console.log('Bish-Bosh');
    }
    else{
        console.log(i);
    }
}