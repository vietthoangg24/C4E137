const array = [
    {
        ID : 1 ,
        Name : "Name1",
        Address : "Address1"

    },
    {
        ID : 2 ,
        Name : "Name2",
        Address : "Address2"

    },
    {
        ID : 3 ,
        Name : "Name3",
        Address : "Address3"

    },
    {
        ID : 4 ,
        Name : "Name4",
        Address : "Address4"

    }
]

const $tBody = document.querySelector('tbody');

function hienThi (){
    $tBody.innerHTML=array.map(function(item){
        return `
        <tr>
        <td>${item.ID}</td>
        <td>${item.Name}</td>
        <td>${item.Address}</td>
        <td><button onclick="deleteUsers(${item.ID})">Xóa</button></td>
    </tr>
        
        `
    }).join("");
}
function deleteUsers(id){
    for(let i = 0 ;i<array.length;i++){
        if(array[i].ID==id){
            if(confirm('Xóa user')){
                array.splice(i,1);

            }
        }
    }
    hienThi();
}


hienThi();