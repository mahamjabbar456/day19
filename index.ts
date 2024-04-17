// Question 55
let number:number[] = [1,2,3,4,5,6,7,8,9];
// function doubleNumber(...num:number[]):number[]{
//     let resultarray:number[] = [];
//     for(let i=0;i<num.length;i++){
//         let no:number;
//         no = num[i]*num[i]
//         resultarray.push(no);
//     }
//     return resultarray;
// }

// let result =  doubleNumber(...number);
// console.log(result);
let doubleNumber:number[] = number.map((num:number)=> num*2)
console.log(doubleNumber);

// Question 56
let MixedItems:(string | number | boolean)[] = ["Bottle","Bag","Pencil",45,35,true,"School bag","Sabar"];
let StringArray = MixedItems.filter((num) => typeof(num) === "string");
console.log(StringArray);

// Question 57
let grade:number[] = [90,80,85,75,70,65,60,55,35];

// function AverageGrade(...g:number[]){
//     let sum:number =0;
//     if(g.length>0){
//        for(let i:number = 0;i<g.length;i++){
//         sum += g[i];
//        }
//        console.log(`The list of grade is ${g} \n The sum of grade is ${sum} \n The average of grade is ${sum/g.length}`);
//     }
//     else{
//         console.log("Empty String.");
//     }
// }

// AverageGrade(...grade);

// We can use reduce method also                                      //This is 0 is the initial value of total
let AverageGrade:number = grade.reduce((total,grade)=> total + grade , 0) / grade.length;
console.log(AverageGrade);