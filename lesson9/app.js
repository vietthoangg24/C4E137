


// const mySelf1 = {
//     // đặc điểm (thuộc tính )
//     firstName : "Hoang",
//     lastName : "vu",
//     dob : "24/05/2003",
//     address : "Thai Binh",
//     phoneNumber : "093234324"
   
//     // hành vi (phương thức )

// }


// const mySelf2 = {
//     // đặc điểm (thuộc tính )
//     firstName : "Hoang",
//     lastName : "vu",
//     dob : "24/05/2003",
//     address : "Thai Binh",
//     phoneNumber : "093234324",
   

//     // hành vi (phương thức )

// }

// // lấy ra giá trị của thuộc tính name trong ms1

// console.log(mySelf1.firstName);
// console.log(mySelf2["firstName"]);

// // thay đổi giá trị thuộc tính của phoneNumber 
// mySelf1.phoneNumber="999999999";

// // thêm thuộc tính 
// mySelf1.isHandsome = true;

// console.log(mySelf1);


// // xóa thuộc tính dob 
// delete mySelf1.dob;

// console.log(mySelf1);


// // Duyệt Object for...in..

// for (let key in mySelf1){
//     console.log('Đặc điểm '+key +'có giá trị là :'+mySelf1[key]);//khác mySelf.key
// }
// let a = 0;
// let b = 0; 
// function inputNumber(label){
// // khai báo Function nhập và kiểm tra 1 số 

// let input  = NaN;
// do {
//    input = Number(prompt("Nhậ vào số :"+label+":"));
//    a = input;
// }while (isNaN(input));
// return input;
// console.log ko thực thi chỗ này 
// }

// gọi Function inputNumber

// a = inputNumber("a");
// b = inputNumber("b");
// console.log(a+b);

// function name1(){
//     let input = (prompt("Hãy nhập vào name "));
//     console.log("Hello world"+ input);
// }

// function test(){
//     let a = 100 ; 
//     let b = 10 ; 
//     function calculatAB(){
//         return a+b;
//     }
//     return calculateAB();
// }

// console.log(test());


// function doSomething(){
//     console.log("Do something here");
// }

// function sayHello(){
//     console.log("hello world");
// }

// function executeAterSeconds(seconds,work){
//     console.log("thực thi gì đó sau "+seconds+"giây")
//     setTimeout(work,seconds*1000);
// }

// executeAterSeconds(3,sayHello);
// executeAterSeconds(5,doSomething);

// // khai báo arrow function 

// const doAnything = () => {

// }

// const doNothing = (a,b,c,d) => {
//     return "hello ";
// } 

// function sum (a,b,c) {
//     return a+b+c;
// }

// const sum = (a,b,c)=>a+b+c;

// const hoang = {
//     name : "hoang",
//     flirt : () =>{

//     },

//     run : function (){
//         console.log(this);
//     }
    
// }
// hoang.flirt();
// hoang.run();


function bai1(a,b,c){
  
    let x1 = 0 ; 
    let x2 = 0;

    let x = [];
    if (a==0){
         
         return ("kp phương trình bậc 2"); 
    }
    else{
        let delta = b*b-4*a*c;
        if(a<0){
            console.log("Phương trình vô nghiệm ")
        }
        else if (a==0){
            x1 = -b/(2*a);
            console.log("Phương trình có nghiệm kép "+x1);
        } 
        else{
          x1 = (-b+Math.sqrt(delta))/(2*a);
          x2 = (-b-Math.sqrt(delta))/(2*a);

         
         
        }
        
        return [x1,x2]

    }

}
let a = Number(prompt("Hãy nhập vào số a :"));
let b = Number(prompt("Hãy nhập vào số b :"));
let c = Number(prompt("Hãy nhập vào số c :"));
//console.log(bai1(a,b,c));

function bai2 (a,b,c){
    
       
    
     if (a+b>c&&b+c>a && c+a >b&&a>0 && b>0 && c>0 ){
        return true;
    }
    else {
        return false;
    }

}

// console.log(bai2(a,b,c));

let day = Number(prompt("nhập vào  ngày"));



// bài 4 
// tìm user có id thỏa mãn điều kiện 
