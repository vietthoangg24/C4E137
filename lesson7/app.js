//let a = "hello";
//let b = 10;
// nhập dữ liệu vào bàn phím và gán giá trị vừa nhập vào tron 1 biến 


//let input = prompt(" Hãy nhập vào đây để gán giá trị cho biến input :");

//console.log(" bạn vừa nhập vào "+ input); // dữ liệu có kiểu string 

// let x = prompt ("Nhập số x") *1;
// let y = prompt ("Nhập số y ")*1; 

// let z= x+y ;

// console.log(z);
// console.log(input)

// let name = "viett hoangg"

// {
//     // bên trong một khối lệnh 
//    let name = "someone else";
//    let age = 20; 
   
//    {
//     let address = "Thai Binh"
//     // dùng được age ở chỗ này 

//     // address chỉ tồn tại trong khối lệnh này 
//    }

//    console.log(name);
//    console.log(age);// không tồn tại ở đây 

// }


// let age = prompt (" nhập vào tuổi của bạn :");

// // nếu age nhỏ hơn 18 thì in ra là ko cho vào 
// // nếu age lớn hơn hoặc bằng 18 vào 

// if (age<18) {
//     console.log("không được vào ");
// }

// else {
//     console.log("vào thoải mái " ); 
// }


// nhập vào phân loại của học sinh 1,2,3 
// nếu phân loại là 1 => 'xứng đáng có 10 người yêu'
// 2 => 9.5 điểm 
// 3 cần cố gắng hơn 

// 

// in ra dong " i love you " 500 lần và mỗi dòng có đánh số thứ tự 

// for (let count = 1 ; count <= 500 ; count++){
//     console.log( count+". i love you "); 
// }
// let sum = 0 ;
// for ( let num = 1 ; num <= 50 ; num ++){
//     sum += num ;
// }
// console.log (sum);

// let num = 10 ; 
// while (num>=6 ){
//     console.log(num);
//     num = Math.floor(Math.random() *10 ); 
// } 



// let index = 1 ; 
// while (index<= 200){
//     console.log(index);
//     index++;
// }



let s =  prompt("chuỗi s ");
let l = prompt("số l "); 

while(s.length<1){
    s+='a';
}

console.log(s);



// let x = prompt("Nhập số x "); 
// let y = prompt ("Nhập số y ");
//  if(x>0 && x<y && y<=100){
//     while(x<y ){
//         x++;
//         y--;
        
//     }
//     console.log(x,y);
//  }

// else {
//     console.log("ko");
// }

// bài 1 
// for (let n=1; n<=500; n++ ){
//     console.log("số là "+n);
// }


// bài 2 
// for (let i = 1;i<=300;i++){
//     if(i%2==0 && i%3==0 ){
//         console.log("các số là "+i)
//     }
// }

// bài3
// let sum = 0;
// for(let s = -30;s <=50;s++){
//     if(s%2==0 ){
//         sum =sum+s;
//     }
    
// }
// console.log(sum);


// bài 4
// let n = prompt ("nhập vào số n :")
// let num = 1;
// for(let i =1; i<=n ;i++){
//     num = num*i;
// }
// console.log(num);

// bài 5
// let a = prompt("nhập vào số a : ");
// let b = prompt ("nhập vào số b :"); 
// let x = prompt("nhập vào số x :"); 
// let res = null;
// //cách 1
// for(let i = a ; i<= b; i ++  ){
//     if(i%x==0){
//        res=i;
//        break;}
// }
// console.log(res);
//cách 2
// let count = a; 
// while(count <= b && res % x!=0 ){
//     if(count % x==0 ) res = count;
//     count++;
// }


// bài6
// let S=0;
// let n = prompt("hãy nhập n vào :");
// for(let i = 1; i<=n;i++){
//     S= S+1/(i*(i+1));
// }  
// console.log("biểu thức có giá trị"+S);