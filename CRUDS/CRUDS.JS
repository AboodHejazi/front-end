let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let mood='Create';
let temp;

function getTotal(){
    let result;
   if(price.value!=''){
result = (+price.value+ +taxes.value+ +ads.value)- +discount.value ;
total.innerHTML=result;
total.style.background='green'; 

}
   
     else{
        total.innerHTML = '';
        total.style.background = 'red';

     }
}
let dataPro ;

if(localStorage.product!=null)
    {
        dataPro=JSON.parse(localStorage.product);
    }
    else{
        dataPro=[];
    }
    

submit.onclick = function(){
    if(title.value!='' && price.value!='' && category.value!=''){
    let newPro ={
        title:title.value.toLowerCase() , price:price.value , taxes:taxes.value 
        , ads:ads.value , discount:discount.value ,
        total:total.innerHTML , count:count.value , category: category.value.toLowerCase()
    }
    if(mood=='Create'){
    if(newPro.count > 1)
        {

            for(let i=0;i<newPro.count;i++)
                dataPro.push(newPro);
        }
        else{
    dataPro.push(newPro);
        }
    }
    else{
        dataPro[temp]=newPro;
        mood = 'Create';
        submit.innerHTML = ' Create ';
        count.style.display='block';
    }
    clearData();
}
localStorage.setItem('product',JSON.stringify(dataPro));
showData();

}

showData();
function clearData(){
    title.value='';
    ads.value='';
    taxes.value='';
    price.value='';
    total.innerHTML='';
    count.value='';
    category.value='';
    discount.value='';
}
function showData(){
    getTotal();
    let ptnDeleteAll = document.getElementById('DeleteAll');
    if(dataPro.length > 0)
        {
            ptnDeleteAll.innerHTML = `
            <button onclick = "btnDeleteAll()"  >Delete All (${dataPro.length}) </button>
            `
        }
    else{
        ptnDeleteAll.innerHTML = ''
    }
let table = '';
for(let i = 0; i< dataPro.length; i++)
    {
        table += `
         <tr>
        <td>${i+1}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}11</td>
        <td>${dataPro[i].category}</td>
        <td><button  onclick = "Update( ${i} )" id="Upadte">Update</button></td>
        <td><button onclick = "deleteData( ${i} )" id="delete" >Delete</button></td>
    </tr>
    `
       
        
    
    }
    document.getElementById('tbody').innerHTML=table;
    
   
}

function deleteData( i ) {
   
    dataPro.splice(i,1);

localStorage.product = JSON.stringify(dataPro);
showData();

}

function btnDeleteAll(){
    localStorage.clear();
    dataPro.splice(0);
    showData();
}

function Update( i ){
title.value = dataPro[i].title;
price.value = dataPro[i].price;
taxes.value = dataPro[i].taxes;
ads.value = dataPro[i].ads;
discount.value = dataPro[i].discount;
getTotal();

count.style.display='none';
category.value = dataPro[i].category;
submit.innerHTML = ' update ';
mood = 'Update';
temp=i;
scroll({
    top:0 , behavior:'smooth'
    
});
/*submit.onclick = function(){
    localStorage.product=JSON.stringify(dataPro[i]);
    submit.innerHTML = 'Create';
    title.value = '';
price.value = '';
taxes.value = '';
ads.value = '';
discount.value = '';
total.innerHTML = '';
count.value = '';
category.value = '';
}
*/
}
let searchMood  = 'Category';
let search = document.getElementById('search');
function getSearchMood(id){
   
   if(id == 'searchTitle'){
    searchMood ='title';
search.placeholder = 'Search By Title';

   }
else {
searchMood = 'Category';
search.placeholder = 'Search By Category';

}

search.focus();
showData();
}
function searchData( value ){
    let table = '';
 
if( searchMood == 'title'){
    for(let i = 0 ;i<dataPro.length ;i++){
if( dataPro[i].title.includes(value.toLowerCase()) ){
    table += `
    <tr>
   <td>${i+1}</td>
   <td>${dataPro[i].title}</td>
   <td>${dataPro[i].price}</td>
   <td>${dataPro[i].taxes}</td>
   <td>${dataPro[i].ads}</td>
   <td>${dataPro[i].discount}</td>
   <td>${dataPro[i].total}11</td>
   <td>${dataPro[i].category}</td>
   <td><button  onclick = "Update( ${i} )" id="Upadte">Update</button></td>
   <td><button onclick = "deleteData( ${i} )" id="delete" >Delete</button></td>
</tr>
`
}
}

}
else  {

    for(let j = 0 ;j<dataPro.length ;j++){
        if( dataPro[j].category.includes(value.toLowerCase()) ){
            table += `
            <tr>
           <td>${j}</td>
           <td>${dataPro[j+1].title}</td>
           <td>${dataPro[j].price}</td>
           <td>${dataPro[j].taxes}</td>
           <td>${dataPro[j].ads}</td>
           <td>${dataPro[j].discount}</td>
           <td>${dataPro[j].total}11</td>
           <td>${dataPro[j].category}</td>
           <td><button  onclick = "Update( ${j} )" id="Upadte">Update</button></td>
           <td><button onclick = "deleteData( ${j} )" id="delete" >Delete</button></td>
        </tr>
        `
        
        }
        






    
}

    }
document.getElementById('tbody').innerHTML=table;
}
//Search by category dosnt work!!!