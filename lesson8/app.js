// mảng 

// cách khai báo 

// let names = [
//     "huy nguyễn  ",
//     "Ngoc Trinh ",
//     "Chi Pu ",
//     "saka",
//     "Ngoc Trinh ",
//     "Ngoc Trinh ",
//     "Chi Pu "
// ];
// console.log(names);




// let numbers = [1, 100 ,40,3,20];

// let isRich = false;
// let isHandsome = true;
// let hasGirlfriend = true ; 

// let features = [isRich ,  isHandsome , hasGirlfriend];

// //isRich = true ;
// // truy xuất giá trị 1 phần tử bất kì trong mảng 
// console.log(names[1]);// lấy phần tử thứ hai trong mảng 
// console.log(names[0]); // lấy phần tử thứ nhất trong mảng  
// // thay đổi giá trị đầu tiên trong mảng ?
// names[0]="hello wrold";
// names[4]= "goodbye everyone";

// console.log(names)


// console.log(features);

// let array1 = ['a','b','c'];
// let array2 = ['a','b','c'];

// let array3 = array1; 

// // kiểm tra kiểu dữ liệu của mảng 
// console.log(typeof (array1));
// console.log(array1+array2); // chương trình tự động ép kiểu về string khi cộng 


// array1[0] = "hello";
// console.log(array1 , array2);
// console.log(array1 ==array3);

// hoán đổi giá trị hai phần tử trong mảng 
// let tmp = names[0];
// names[0] = names[2];
// names[2] = tmp;
// console.log(names); 

// Duyệt mảng 

// cách 1  for ... let i  = 0 

// for (let i =0 ;i< names.length;i++){
//     // console.log(i+1 +"." +names[i]);

//     let name = names[i];
//     if (name == "Ngoc Trinh"|| name == "Chi Pu"){
//           console.log(i+1+"."+ name );

//     }

// }

// // c2 for of 
// let i = 0;  
// for (const name of names ){
//     // làm việc với name ở trong này
//     i++; 
// }

// const numbers = [1,7,8,-3,6,10,9];
// // in ra số chắn 
//    for  (let i=0 ; i<numbers.length;i++){
//     const number = numbers[i];
//     if(number[i]%2==0)
//      console.log(number);
//    }
// // tính tổng phần tử 
// let sum = 0 ; 
// for (let i = 0 ; i< numbers.length ; i++){
//     const number = numbers[i];
//     sum = sum + numbers[i] ;
// }
// console.log(sum);
// // tìm ra phần tử nhỏ nhất
// let min = numbers[0];
// for (let i = 0 ; i< numbers.length ; i++){
//     const number = numbers[i];
//     if (min > number ) min = number;

// }
// console.log(min);

// // thêm 3 số vào đầu mảng 
// numbers.unshift(100,1000,-4);
// // console.log(numbers);


// thêm 3 số vào cuối mảng 
// numbers.push(-9,-10,50);
// console.log(numbers);

// // xóa 1 phần tử đầu tiên trong mảng 
// let deletedFirstNumber   = numbers.shift();
// console.log("giá trị phần tử đầu bị xóa "+deletedFirstNumber);

// // xóa 1 phần tử cuối 
// let deletedLastNumber = numbers.pop();
// console.log("giá trị phần tử đầu bị xóa "+deletedLastNumber);

// tìm hiểu phương thức splice;
function bai1 (){
let array1 = [];
let n = prompt ("Nhập n > 0 : ");
for ( let i =0 ; i <n ; i++){
    array1[i]= Math.random();
    console.log("Nhập phần từ trong mảng :")
    
}
console.log(array1);
}

function bai2 (){
    let array2 = [2,3];
    let n = prompt("Nhập vào n >2");
    while (array2.length<n){
        array2.unshift(0);
    }
    console.log(array2);

}

function bai3 (){
     let array3 = [3,53,53,4,35,7,6];
     while(array3.length>1){
        array3.pop();
     }
     console.log(array3);
}


function thucHanh (){
    let array = [3,4,5,6];
    let tich=1 ; 
    for(let i = 0 ; i < array.length;i++){
        tich = tich*array[i];
        
    }
    console.log("tích là "+tich);

    // tìm giá trị trong mảng chia hết cho 2 =>b
    // tìm gióa trị nhỏ nhất trong mảng B 
    const numbersDivideBy2 = [];

    for (let i = 0 ; i <array.length;i++){
        if (array[i]%2==0){
            numbersDivideBy2.push(array[i]);
        }

    }


    if (numbersDivideBy2.length==0){
        console.log("ko có số nào chia hết cho 2");
    }
    else {
        let min = numbersDivideBy2[0];
        for(let i = 0 ; i <numbersDivideBy2.length;i++){
            if(min>numbersDivideBy2[i]){
                min = numbersDivideBy2[i];
            }
        }
    }
    console.log(min);
}
thucHanh();

   
