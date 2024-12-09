//Exercise-1
document.getElementById("btn-1").addEventListener('click',function(){
    let paragraph = document.getElementById('para');
    paragraph.textContent = "the paragraph is changed"
})


//Exercise-2
document.getElementById("btn-2").addEventListener('click',function(){
    let fisrtcity = document.getElementById('citieslist');
    fisrtcity.firstElementChild.classList.add("highlight")
})


//Exercise-3
document.getElementById('btn-3').addEventListener('click',function(){
    let order = document.getElementById('coffeeorder');
    order.firstElementChild.textContent = "Espresso"
})

//Exercise-4
document.getElementById('btn-4').addEventListener('click',function(){
    let newItem = document.createElement('li')
    newItem.textContent = "Eggs"
    let list= document.getElementById('shoppinglist')
    list.appendChild(newItem)
})

//Exercise-5
document.getElementById('btn-5').addEventListener('click',function(){
    
    let list = document.getElementById('list1')
    let lastitem= (list.lastChild)
    list.removeChild(lastitem)
})


//Exercise-6
document.getElementById('tealist').addEventListener('click',function(event){
    if(event.target && event.target.matches('.teaItem')){
        alert("You selected: "+ event.target.textContent )
    }
})

//Exercise-7

document.getElementById('feedbackForm').addEventListener('submit',function(event){
    event.preventDefault();
    let input = document.getElementById('feedbackInput').value;
    console.log(input)

let para = document.getElementById('feedbackDisplay')
para.append(input)
})



//Exercise - 8

document.getElementById('btn-8').addEventListener('click',function(){
    let para = document.getElementById('para8');
    para.classList.toggle('highlight') 
})