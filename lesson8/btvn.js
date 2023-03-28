function bai1() {
    // a 
    let array = [3,2, 4, 5, 6,9];
    let tich = 1;
    for (let i = 0; i < array.length; i++) {
        tich = tich * array[i];

    }
    console.log("tích là " + tich);

    // b 
    let numbersDivideBy2 = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            numbersDivideBy2.push(array[i]);
        }
    }

    if (numbersDivideBy2.length == 0) {
        console.log("Không có số nào chia hết cho 2");
    } else {
        // 4 6 -10
        let min = numbersDivideBy2[0];
        for (let i = 0; i < numbersDivideBy2.length; i++) {
            if (min > numbersDivideBy2[i]) {
                min = numbersDivideBy2[i];
            }
        }
        console.log("Giá trị nhỏ nhất chia hết cho 2 là: " + min);
    }

    //c
    let numbersDivideBy3 = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 == 0) {
            numbersDivideBy3.push(array[i]);
        }

    }
    if (numbersDivideBy3.length == 0) {
        console.log("Không có số nào chia hết cho 3");
    } else {
        let max = numbersDivideBy3[0];
        for (let i = 0; i < numbersDivideBy3.length; i++) {
            if (max < numbersDivideBy3[i]) {
                max = numbersDivideBy3[i];
            }
        }
        console.log("Giá trị lớn nhất chia hết cho 3: " + max);
    }
    
    //d 
    let tong= 0;
    let tb = 0;
    for (let i = 0 ; i<array.length;i++){
        tong = tong + array[i];
        
    }
    tb = tong/array.length;

    console.log("giá trị tb là :"+tb);

     // e 

     
   
      for (let i = 0; i < array.length; i++){
        if (isprime(array[i]) == 1)  console.log("Số nguyên tố là:"+ array[i] );
      }

    //g 
    let sonhohon10 = [];
    for (let i = 0 ; i<array.length;i++){
        if(array[i]<10){
           sonhohon10.push(array[i]);
        }
        
    }  
      if(sonhohon10.length==0){
        console.log("Không có so nho hon 10");
      }else{
        console.log("có so nho hon 10:   "+sonhohon10);

      }
      // h 
      let lonhon20 = [];
    for (let i = 0 ; i<array.length;i++){
        if(array[i]>20){
            lonhon20.push(array[i]);
        }
        
    }  
      if(lonhon20.length==0){
        console.log("Không có số nào lớn hơn 20 ");
      }else{
        console.log("có số lớn hơn 20 :   "+lonhon20);

      }

     // i 
     let flag =1;
      while (flag<2){
        let n =  prompt("Hãy nhập vào số n :");
        for(let i=0 ; i<array.length;i++){
            if(n==array[i]){
                console.log("Bạn đã điền đúng");
                flag=3;
                    break;
            }
        }
      }

     // bubble sort 
      let temp =array[0];
      for (let i = 0 ;i<array.length-1;i++){
        for(let j= i+1;j <array.length;j++){
            if(array[i]>array[j]){
                temp = array[j];
               array[j]=array[i];
               array[i]=temp;
            }
        }
      }
      console.log("mảng sau khi sắp xếp tăng dần là ")

      for(let i = 0 ;i<array.length;i++){
        console.log(array[i]);
      }

     



}


function isprime(n){
    let flag = 1;

    if (n <2) return flag = 0; 
    
   
    let i = 2;
    while(i <n){
        if( n%i==0 ) {
            flag = 0;
            break; 
        }
        i++;
    }

    return flag;
}

function bai2(){
    let array2=["saka","xhaka","ramsdale"];
    let text = prompt("Nhập vào một chuỗi text");
    let min=array2[0].length;
    
    for(let i=0;i<array2.length;i++){
        if(min>array2[i].length){
            min=array2[i].length;
        }
    }
    console.log(min);
     // 1  
    //let  indexmin=0;
    // min = array2[0].length();
    // for (let i = 0 ; i<array2.length ; i++){
    // if (array2[i].length<min){
    // min = array2[i].length;
    // indexmin = i ;
    //}
    //}
    // console.log()

    // 2 
    // A.includes(B)=>có chứa => true || ko chứa => false 
    // tạo mảng mới 
    // for  nếu s[i].inclues(text) =>arr.push s[i]

    // 3
    
    // new = []
    // for str = s[i].slice(0,3)và new.push(str) 
    // dùng slice để cắt chuỗi 
}


bai2();