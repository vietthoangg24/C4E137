
 function bai7() {
let n =Number (prompt("Hãy nhập và số n :"));
let dem=0;
for (let i =0 ; i<=n;i++){
    if(n%i==0){
        dem++;
    }
}

console.log(dem);
}



 function bai8() {
    let n = prompt("Nhập vào 1 số nguyên bất kì");
    var flag = true;
    if (n < 2) {
        flag=false;

    }else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                flag=false;
                break;
            } 
        }
    }
    if(flag==true){
        console.log("Đây là số nguyên tố!")
    }else{
        console.log("Đây k phải số nguyên tố!")

    }
}

function bai9(){

    // chuois: 000+asđffg số 10
    let s = prompt ("chuỗi s :");
    let l = prompt ("số  l : "); 
   while(s.length<l){
    s="0"+s;

   }
 console.log(s);
}
bai9();

function bai10() {
    
    let m = prompt("Nhập vào số m");
    let n = prompt("Nhập vào số n");
    while(m!=n){
        if(m>n){
            m=m-n;
        }else{
            n=n-m;
        }
    }
    console.log("Ước chung lớn nhất của 2 số là: "+m);
    
}

function bai11() {
    let m = prompt("Nhập vào số m");
    let n = prompt("Nhập vào số n");
    let lcm;
    let max = m*n;
    let step = Math.max(m,n);
    for(let i = step;i<=max;i+=step){
        if(i%m==0&&i%n==0){
            lcm=i;
        }
    }
   

    console.log("Bội chung nhỏ nhất của 2 số là: "+lcm);
    
}

function bai12() {
   for(let i =1; i<=5;i++){
    let a = prompt("Nhập vào số bất kì từ 1->20!");
    let randomNum = Math.floor(Math.random()*4)+1;
    if(a==randomNum){
        console.log("Đoán đúng")
        return;
    }else{
        console.log("Không đúng")
    }
   }
   console.log("Bạn đã thua cuộc")
    
    
}


function bai13 (){
    let n = prompt("Nhập vào số n bất kì từ 2<=n<=10");
    console.log("Bảng cửu chương "+n+" là")
    if(n>=2&&n<=10){
    for(let i =1; i<=10;i++){
        console.log(n+"*"+i+"="+n*i);
    }}
    else{console.log("doc ko hieu ak ")}

}


function bai14(){
    const canh =prompt("Nhập chiều dài");
   
    let canhhv = ' ';

    for (let j = 1; j <= canh; j++) {
      canhhv += '*'

    }

    for (let i = 1; i <= canh; i++) {
        document.write(canhhv);
      document.write("<br/>");

      console.log(canhhv)
    }
}

function bai15(){
    const chieuDai =prompt("Nhập chiều dài");
    const chieuRong =prompt("Nhập chiều rộng");
    let canhDai = ''

    for (let j = 1; j <= chieuRong; j++) {
      canhDai += '* '

    }

    for (let i = 1; i <= chieuDai; i++) {
        document.write(canhDai);
      document.write("<br/>");

      console.log(canhDai)
    }
}

function bai16(){
    let h = prompt("Nhập vào số n bất kì n>=3");
    
    for(let i =1;i<=h;i++){
        for(let j =1;j<=i;j++){
             document.write("* ")
        }
       document.write("<br/>");
    }
}


function bai17 (){
    let w = prompt("Nhập vào cân nặng của mình");
    let h = prompt("Nhập vào chiều cao của mình"); 
    let BMI = w/(h*2);
    console.log(BMI);
    if(BMI<18.5){
        console.log("Nhẹ cân");
    }else if(18.5<=BMI<23){
        console.log("Bình thường");

    }else if(23<=BMI<25){
        console.log("Thừa cân");

    }else{
        console.log("Béo phì");

    }


}




