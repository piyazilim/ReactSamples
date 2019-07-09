// const data1 = { 
//         name: 'İsmail'
//     };
// const data2 = { 
//         name:'mahmut',
//         surname: 'KARACAOĞLU',
//         age:  35
//     };

//     const data3 = {
//         city:'İzmir'
//     }
// const result = Object.assign({},data2,data1,data3);

// console.log(result);

const data = { 
    info: {
        name: 'ismail',
        surname: 'karacaoglu'
    }    
}; 
// const data2 = Object.assign({},data.info);
 
const data2 = JSON.parse(JSON.stringify(data));

data2.info.name = 'ahmet';

console.log('data: ', data);
console.log('data2: ',  data2);


//son commit sdssasa   "deneme"   