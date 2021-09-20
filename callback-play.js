
// NB Return does not work on an asynschronous function. use a callback function instead
const geoCode = (address, callback) => {

    setTimeout(()=> {
        const data = {
            latitude: 0,
            longitude:0
        }
        callback(data);
    })
}
// console.log(geoCode('addre'));
geoCode('Lagos', (data2) => {
    console.log(data2);
});

const addSum = (sum1, sum2, callback) =>{
    setTimeout(()=>{
        const total = sum1 + sum2;
        callback(total);
    },2000)
}

addSum(1,2, (result)=>{

    console.log(result);
})

