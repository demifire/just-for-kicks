// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.

details.addEventListener('click',function(){alert("Not Available in Hawaii")});

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.

var descrip1 = document.getElementById('descrip1');
name1.addEventListener('mouseover',function(){descrip1.style.display = 'block'});
name1.addEventListener('mouseout',function(){descrip1.style.display = 'none'});

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'

Jordan3 = document.createElement('Jordan3');
Jordan3.innerHTML = "The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.";
Jordan3.style.display = 'none';
name2.appendChild(Jordan3);
name2.addEventListener('click',function(){
    if(Jordan3.style.display === 'none'){
        Jordan3.style.display = 'block'
    }else{
        Jordan3.style.display = 'none'}});

//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 

//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.

var thumbs = document.getElementsByClassName("far fa-thumbs-up");
console.log(thumbs);
for (var i=0; i<thumbs.length; i++) {
    thumbs[i].addEventListener("click", likeCount);
    var count = document.createElement("div");
    count.className = "count";
    count.style.display = "inline-block";
    thumbs[i].appendChild(count);
}

function likeCount() {
    var thisCount = this.querySelector(".count");
    console.log(thisCount.innerHTML);
    if (thisCount.innerHTML) {
        thisCount.innerHTML++;
    } else {
        thisCount.innerHTML = 1;
    }
}

//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.

increase.addEventListener('click',replaceDiv);
var add = document.getElementById('increase');
add.style.display = 'inline-block';

var newInnerHTML = document.createElement('div');
newInnerHTML.innerHTML = 58000
newInnerHTML.style.display = 'inline-block';

function replaceDiv(){
    price4.innerHTML = null;
    price4.appendChild(newInnerHTML);
    price4.appendChild(add);
}
increase.addEventListener('click', function(){newInnerHTML.innerHTML++});

//6. Add an event to the minus icon that will decrement the price of the Air Jordan V shoe each time the icon is clicked on.

decrease.addEventListener('click',replaceDiv2);
var subtract = document.getElementById('decrease');
subtract.style.display = 'inline-block';

var newInnerHTML2 = document.createElement('div');
newInnerHTML2.innerHTML = 2500;
newInnerHTML2.style.display = 'inline-block';

function replaceDiv2(){
    price5.innerHTML = null;
    price5.appendChild(newInnerHTML2);
    price5.appendChild(subtract);
}
decrease.addEventListener('click', function(){newInnerHTML2.innerHTML--});

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 

var diffColor = "https://static1.squarespace.com/static/557a4354e4b07b424bdb3f9f/557a5a4ce4b0965574c5c3e2/5751ab61f8baf3bb00c57f4d/1464970082182/jordan+11+concords+bakeryhny.com++.jpg?format=750w";
var sameColor = 'https://www.sneakerlegends.com/images/stories/virtuemart/product/378037623%20378037623%20378037623%20378037623.jpg';
var jordan11= document.getElementsByClassName('block3')[1].getElementsByTagName('img')[0];
jordan11.id = 'kicks';
jordan11.addEventListener('mouseover',changeKicks)

function changeKicks(){
    document.getElementById("kicks").src=diffColor;
    jordan11.addEventListener('mouseout', restoreKicks)
}

function restoreKicks(){
    document.getElementById("kicks").src=sameColor;
}

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

var jordan12= document.getElementsByClassName('block1')[2].getElementsByTagName('img')[0];
jordan12.id = 'bigger';
jordan12.addEventListener('click',toggleBig);

function toggleBig(){
    if(bigger.style.width==='105%'){
        bigger.style.width=null;
        bigger.style.height=null; 
    }else{
        bigger.style.width='105%';
        bigger.style.height='105%';  
    }
}

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

oneUp.addEventListener('click',replaceDiv3);
var add2 = document.getElementById('oneUp');
add2.style.display = 'inline-block';

oneDown.addEventListener('click',replaceDiv3);
var subtract2 = document.getElementById('oneDown');
subtract2.style.display = 'inline-block';

var newInnerHTML3 = document.createElement('div');
newInnerHTML3.innerHTML = 7000
newInnerHTML3.style.display = 'inline-block';

function replaceDiv3(){
    price8.innerHTML = null;
    price8.appendChild(newInnerHTML3);
    price8.appendChild(add2);
    price8.appendChild(subtract2);
}
oneUp.addEventListener('click', function(){newInnerHTML3.innerHTML++});
oneDown.addEventListener('click', function(){newInnerHTML3.innerHTML--});

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.

var cryingJordan = 'https://media.giphy.com/media/O5NyCibf93upy/giphy.gif';
var jordan28= document.getElementsByClassName('block3')[2].getElementsByTagName('img')[0];
jordan28.id = 'cry';
jordan28.addEventListener('click',changeKicks)

function changeKicks(){
        document.getElementById("cry").src=cryingJordan;
        jordan28.addEventListener('click',function(){var randomGif = gifArr[Math.floor(Math.random()*gifArr.length)];
            changeGif(randomGif);})
}

var gifArr = ['https://media.giphy.com/media/3XhU5pkFZChvW/giphy.gif',
'https://media.giphy.com/media/lYf4uAJEWVo1FffnVD/giphy.gif',
'https://media.giphy.com/media/RLWwOuPbqObupogOLB/giphy.gif',
'https://media.giphy.com/media/4NeWu795Y4zP5Jzunf/giphy.gif',
'https://media.giphy.com/media/QqkVKdsehPtCw/giphy.gif',
'https://media.giphy.com/media/3oEjHYibHwRL7mrNyo/giphy.gif',
'https://media.giphy.com/media/5wWf7GW1AzV6pF3MaVW/giphy.gif',
'https://media.giphy.com/media/Is1O1TWV0LEJi/giphy.gif',
'https://media.giphy.com/media/dEdmW17JnZhiU/giphy.gif',
'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
'https://media.giphy.com/media/8VrtCswiLDNnO/giphy.gif',
'https://media.giphy.com/media/XfYyQFiq9ySc0/giphy.gif',
'https://media.giphy.com/media/QNQgqJ403Vcoo/giphy.gif',
'https://media.giphy.com/media/zMQcrvqjkC9d6/giphy.gif',
'https://media.giphy.com/media/EaSH6bwyEQVkA/giphy.gif',
'https://media.giphy.com/media/EGQ7qLdbWHOLK/giphy.gif',
'https://media.giphy.com/media/Cf76sVcqiN1tu/giphy.gif',
'https://media.giphy.com/media/dwRyANr9buXtK/giphy.gif',
'https://media.giphy.com/media/VG2RUZNTHYvAs/giphy.gif',
'https://media.giphy.com/media/50ikYkrYPNBqU/giphy.gif',
'https://media.giphy.com/media/gMDKyrWInxOhO/giphy.gif',
'https://media.giphy.com/media/12za05Ybz2YfcY/giphy.gif',
'https://media.giphy.com/media/pVtxNScpYHaY8/giphy.gif',
'https://media.giphy.com/media/p2s1qCQ60n4qs/giphy.gif',
'https://media.giphy.com/media/VEn6uMTmWunRu/giphy.gif',
'https://media.giphy.com/media/He70JJxAUGp8Y/giphy.gif',
'https://media.giphy.com/media/37qcnlmtHzZoAFsiFA/giphy.gif',
'https://media.giphy.com/media/sJaZBVqhPnQk0/giphy.gif',
'https://media.giphy.com/media/8NunvDAvEeWXu/giphy.gif',
'https://media.giphy.com/media/nbMyya8CQ25dPMXeYn/giphy.gif',
'https://media.giphy.com/media/l3nWl5bhBoim7glNu/giphy.gif',
'https://media.giphy.com/media/3dhBaH8VO2JRsIlvoR/giphy.gif']

function changeGif(url) {
    document.getElementById("cry").src = url;
  }