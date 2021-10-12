// var array = [{"October 13, 2014 11:13:00": "A1"}, {"Aug 13, 2014 11:13:00" : "A2"}];

// console.log('array before',array)

// array.sort(function(a,b){
//   console.log('b',Object.keys(b))
//  let key1 = object.keys(b)
//   let key2 =  obj
//   console.log('a date',new Date(key))
//   console.log('b date',new Date(a))  
//   return new Date(a) - new Date(b);
// });

// console.log('array after',array)

let obj = {"2021-09-17 00:00:00+00:00": "ON",
"2021-09-20 00:00:00+00:00": "TN",
"2023-09-23 20:00:00+00:00": "1W",
"2021-09-30 00:00:00+00:00": "2W",
"2020-10-18 00:00:00+00:00": "1M",
"2021-11-18 00:00:00+00:00": "2M",
"2021-12-16 00:00:00+00:00": "3M",
"2023-09-23 00:00:00+00:00": "1W",
"2022-03-17 00:00:00+00:00": "6M",
"2022-06-16 00:00:00+00:00": "9M",
"2022-09-16 00:00:00+00:00": "1Y" }

var ordered = {};
Object.keys(obj).sort(function(a, b) {
  return (new Date(a) - new Date(b));
}).forEach(function(key) {
  ordered[key] = obj[key];
});



console.log('obj value',ordered)