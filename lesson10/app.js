// // quy ước nhỏ  : tất cả biến liiw phần tử html đều có dấu $
// // truy xuất phần tử thông qua id 

// const $title = document.getElementById("big-title");

// console.log($title);

// // truy xuất phần tử thông qua class

// const $paragraphs = document.getElementsByClassName("red-paragraph"); // html trả về collection
// for(const $paragraph of $paragraphs ){
//     console.log($paragraph);
// }
// console.log($paragraphs);

// // truy xuất phần tử thông qua tên thẻ 
// const $images = document.getElementsByTagName("img");
// console.log($images);

// // document.querySelector();document.querySelectorAll();

// // lấy ra nội dung của phần tử 
// let titleContent = $title.innerHTML;
// console.log(titleContent);

// $title.innerHTML = "Nội dung mới 😘";

// // lấy ra thuộc tính của 1 phần tử 
// let titleAttributeValue = $title.getAttribute('data-hello');
// console.log(titleAttributeValue);

// // thêm mới / thay dổi thuộc tính của 1 phaanff tử 
// $title.setAttribute ("data-goodbye","This is goodbye");
// $title.setAttribute("data-hello","this is hello");

// // xóa thuộc tính của 1 phần tử 
// $title.removeAttribute("data-goodbye");

// // thay đổi định dạng của phần tử 
// $title.style.color="red";
// $title.style.background = "black";
// $title.style.display = "flex";

// // thêm phần tử vào trang web
// const $link = document.createElement('a');
// $link.innerHTML = "this is link to somewhere ";
// $link.setAttribute("href","http://google.com");

// //document.body.prepend($link); // prepend : thêm vào đâu  append : thêm vào cuối
// $title.append($link);// thêm link vào trong $title

// $title.after($link); // thêm link vào sau $title

// // xóa phần tử trên trang web
// $title.onclick = function() {
//   console.log('vừa click vào title')
// };
// //$title.onclick = handleClickTitle2();
// function handleClickTitle1(){
//     console.log('hello');
// }
// function handleClickTitle2(){
//     console.log('goodbye');
// }

// $title.addEventListener('click',handleClickTitle1);
// $title.addEventListener('click',handleClickTitle2);


// const $emailInput = document.getElementById('my-email');
// $emailInput.onchange = function (){
//     let email = $emailInput.value;
//      // lấy giá trị nhập vào của ô input 
//      if (!isEmailValid(email)){ alert('hãy nhập lại email');}
// };
// function isEmailValid(email){
//     return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };
// const $numberA=document.getElementById('number-a');
// const $numberB=document.getElementById('number-b');
// const $plusBtn=document.getElementById('plus-btn');
// const $subBtn=document.getElementById('sub-btn');

// $plusBtn.onclick = function (){
//     let a = Number($numberA.value);
//     let b = Number($numberB.value);

//     alert(a+b);

// }

// $subBtn.onclick = function (){
//     let a = $numberA.value;
//     let b = $numberB.value;

//     alert(a-b);
// }

// const $img = document.getElementById('img-1');

// const $urlInput = document.getElementById('url-input');
// const $widthInput = document.getElementById('width-input');
// const $heightInput = document.getElementById('height-input');
// const $borderRadiusInput = document.getElementById('border-radius-input');
// const $altInput = document.getElementById('alt-input');
// const $image = document.getElementById('image')


// $urlInput.onchange = () => $img.setAttribute('src',$urlInput.value);
// $altInput.onchange = () => $img.setAttribute('alt', $altInput.value);
// $widthInput.onchange = () => $img.style.width = $widthInput + 'px';
// $heightInput.onchange = () => $img.style.height = $heightInput +'px';
// $borderRadiusInput.onchange = () => $img.style.borderRadius = $borderRadiusInput + 'px';

// bài 2 
const $contentInput=document.getElementById ('task-content-input');
const $createTaskBtn=document.getElementById ('create-task-btn');
const $taskList=document.getElementById('task-list');

$createTaskBtn.onclick = () => {
    let value = $contentInput.value;

    const $li=document.createElement('li');
    $li.innerHTML = value;
    $taskList.append($li);
}