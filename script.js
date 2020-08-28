document.getElementById("home").style.display = "block";

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

var videos = ["https://www.youtube.com/embed/-FlxM_0S2lA","https://www.youtube.com/embed/sjkrrmBnpGE","https://www.youtube.com/embed/FQZvmEquTuE","https://www.youtube.com/embed/gaGrHUekGrc","https://www.youtube.com/embed/yJd62YiTjWw","https://www.youtube.com/embed/4FqGpT3yhUI", "https://www.youtube.com/embed/eZe4Q_58UTU", "https://www.youtube.com/embed/8myYyMg1fFE", "https://www.youtube.com/embed/yIQd2Ya0Ziw","https://www.youtube.com/embed/Vg1mpD1BICI","https://www.youtube.com/embed/uUU_BkBBAZ0","https://www.youtube.com/embed/H3GL5jO53NU","https://www.youtube.com/embed/lTRiuFIWV54","https://www.youtube.com/embed/mIYzp5rcTvU","https://www.youtube.com/embed/rYoZgpAEkFs","https://www.youtube.com/embed/bctWQxhOfG4"];


var backgroundNoise = $('.backgroundNoise');
backgroundNoise.on("click", getBN);
var vidContainer = $('.vidContainer');

function getBN() {
  $(".BN").remove();
  var random = Math.floor(Math.random()*16);
  var video = videos[random];
  vidContainer.append(`<iframe
    class="BN"
    width="560"
    height="315"
    src= "${video}"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
        ></iframe>`);
}

var addBtn = $('.addTaskBtn');
var newTask = $('.newTask');
var toDoList = $('.toDoList');
addBtn.on("click", addTask);
function addTask(){
  var newTaskVal = newTask.val();
  var highPriorityContainer = $('.highPriorityTasks');
  var medPriorityContainer = $('.medPriorityTasks');
  var lowPriorityContainer = $('.lowPriorityTasks');
  var tComplete = $('.tComplete');
  var updateBtn = $('.updateBtn');
  var counter = 0;
  const rbs = document.querySelectorAll('input[name="priority"]');
  let selectedValue;
    for (const rb of rbs) {
      if (rb.checked) {
         selectedValue = rb.value;
         break;
        }
    }
  if(selectedValue === "high"){
    highPriorityContainer.append(  
    `<section class="toDoCard" >
      <div class="task">
        <p class = "highPTask" class = "taskName"> ${newTask.val()} </p>
      </div>
      <button class="complete">Completed!</button>
    </section>
    `);
    $('.highPTask').css('color', "#cc0000");
    $('.highPTask').css('font-weight', 'bold');
  } else if(selectedValue === "med"){
    medPriorityContainer.append(  
    `<section class="toDoCard">
      <div class="task">
        <p class = "medPTask" class = "taskName"> <strong>${newTask.val()} </strong></p>
      </div>
      <button class="complete">Completed!</button>
    </section>
    `);
    $('.medPTask').css('color', "#ff6400");
  } else{
    lowPriorityContainer.append(`<center><section class="toDoCard">
    <div class="task">
      <p class = "taskName lowPTask"><strong> ${newTask.val()}</strong></p>
    </div>
    <button class="complete">Completed!</button>
  </section></center>
  `);
  }
  var completeBtn = $('.complete');
  completeBtn.on("click", deleteTask);
  function deleteTask(){
  if(event.target.className === "complete"){
    event.target.parentNode.remove();
    counter++;
    $(".tComplete").html("");
  } 

  tComplete.append(`<h4>Tasks Completed: <strong>${counter}</strong>! Woohoo!</h4>`);
  }
}


var addHabitsBtn =$('.addHabitsBtn');//added
var newHabitTxt = $('.newHabitTxt');//added
var container = $('.habitList');//added
//added habits button- listener
addHabitsBtn.on("click", addHabits);
//handler
function addHabits(){
  container.append(`<div class= "habitList">
    <input class="checkHab" type = "checkbox"> ${newHabitTxt.val()} 
  </div>`);

  var checkHab = $('.checkHab');
  checkHab.on("click",deleteHab);
  function deleteHab(){
    event.target.parentNode.remove();
  }
} 




// var completeBtn = $('.complete');
// completeBtn.on("click", deleteTask);
// function deleteTask(){
//   //newTask.addClass("complete");
//   console.log(event.target.className);
//   if(event.target.className === "complete"){
//     console.log(event.target.parentNode);
//     event.target.parentNode.remove();
//   }
// }
var addEventBtn = $('.addEvent');
addEventBtn.on("click", addEvent);
function addEvent (){
  var datesTime
}

  var newPhoto = $('.newPhoto');
  var imgHome = $('.imgHome');
  newPhoto.on("click", getNewPhoto);

  var inspoImages = ["https://images.unsplash.com/photo-1518316974705-e5c4a6ee2374?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60","https://images.unsplash.com/photo-1531857454108-c65232a962a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60","https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60","https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60","https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60","https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60", "https://images.unsplash.com/photo-1564410267841-915d8e4d71ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80","https://images.pexels.com/photos/3793316/pexels-photo-3793316.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", "https://images.pexels.com/photos/2821823/pexels-photo-2821823.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/3831881/pexels-photo-3831881.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500","https://images.pexels.com/photos/3300448/pexels-photo-3300448.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"];

  function getNewPhoto() {
    $(".inspo").remove();
    var random = Math.floor(Math.random()*10);
    var inspoImage = inspoImages[random];
    imgHome.append(`<img class= "inspo" src = "${inspoImage}">`);
  }

//timer:
var timerBtn = $('.timerBtn');
var hours = $('.hours');
var minutes = $('.minutes');
var currH = $('.currH');
var currM = $('.currM');
var month = $('.month');
var day = $('.day');
var year = $('.year');
var resetBtn = $('.reset');
var amPm = $('.amPm');

// Set the date we're counting down to

timerBtn.on("click", setTime);

// Update the count down every 1 second
function setTime(){
  var currHval = Number(currH.val());
  var currMval = Number(currM.val());
  console.log(amPm.val());
  var amPmVal = String(amPm.val());
  console.log(amPmVal === "AM");
  if (amPmVal === "PM" || amPm === "Pm"){
    if (currHval != 12){
    currHval = currHval + 12;
    }
    console.log(currHval);
    if(currHval === 24){
      currHval = 0;
    } 
  }else if (currHval === 12(amPmVal == "AM" || amPmVal == "am")){
    currHval = 0
  }
  console.log(currHval);
  var hoursVal = Number(hours.val());
  var minVal = Number(minutes.val());
  var monthVal = Number(month.val());
  var dayVal = Number(day.val());
  var yearVal = Number(year.val());
  var finalH = currHval + hoursVal;
  if(finalH >= 24){
      finalH = finalH-24;
      dayVal++;
    }
  var finalM = currMval + minVal;
  if(finalM >= 60){
      finalM = finalM - 60;
      finalH++;
    }
  var x = setInterval(function() {

    // console.log(monthVal);
    // console.log(dayVal);
    // console.log(yearVal);
    // console.log(finalH);
    // console.log(finalM);

    // Set the date we're counting down to
    var countDownDate = new Date(`${monthVal}/${dayVal}/${yearVal} ${finalH}:${finalM}:30`).getTime();
    
    // console.log(typeof countDownDate);
    // Get today's date and time
    var now = new Date().getTime();

    // console.log(typeof finalH);
          
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "FINISHED";
    }

    resetBtn.on("click",resetTime);

    function resetTime(){
      clearInterval(x);
      document.getElementById("demo").innerHTML = "";
    }

    // function pauseTime(){
    //   clearInterval(x);
    //   console.log(x);
    //   console.log(distance);
    // }

  }, 1000);
}
