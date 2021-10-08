let pumpCarList = [
  { CarId: "赣BB2719", driver: "李若谷" },
  { CarId: "赣BA8153", driver: "段星宇" },
];
let CarList = [
  {
    CarNo: "赣BA8153",
    Modifier: "调度员",
    Create_Date: "2021-05-18 17:30:01",
  },
  {
    CarNo: "赣BB2719",
    Modifier: "调度员",
    Create_Date: "2021-05-18 17:30:56",
  },
  {
    CarNo: "陕A00003",
    Modifier: "调度员",
    Create_Date: "2021-05-18 17:31:59",
  },
  {
    CarNo: "桂BA8937",
    Modifier: "调度员",
    Create_Date: "2021-08-13 15:30:22",
  },
];

// CarList.map(item => {
//     let matchCar = pumpCarList.find(pumpCar=>{
//         if(item.CarNo == pumpCar.CarId){
//             return true
//         }
//     })
//     console.log(matchCar);
// });

// CarList.map(item => {
//     let matchCar = pumpCarList.find(pumpCar=>{
//         return item.CarNo == pumpCar.CarId
//     })
//     console.log(matchCar);
// });

// let res = CarList.map((item)=> {
//     return {
//         ...item,
//         ...pumpCarList.find(({CarId})=>item.CarNo == CarId)
//     }
// });

let res = CarList.map(item=> ({
    ...item,
    ...pumpCarList.find(({CarId})=>item.CarNo == CarId)
}));

console.log(res,'res');