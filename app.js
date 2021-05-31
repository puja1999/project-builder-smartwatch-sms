// displaying time in heading part

function displayTime() {
    var currTime = new Date();
    var h = currTime.getHours();
    var m = currTime.getMinutes();
  
    if (h == 24) {
      h = 0;
    } else if (h > 12) {
      h = h - 0;
    }
    if (h < 10) {
      h = "0" + h;
    }
    if (m < 10) {
      m = "0" + m;
    }
  
    var headTimeShow = document.getElementById("headTime");
    headTimeShow.innerHTML = h + ":" + m;
  }
  displayTime();
  
  // sms part
  
  document.querySelector("#msg").onclick = function () {
    // selecting body area of smartwatch
    var mainContent = document.querySelector("#main");
    // removing content from body area of smart watch
    mainContent.innerHTML = "";
    // creating a div tag to assign texts
    var msgContainer = document.createElement("div");
    // giving id to the div
    msgContainer.id = "msg-cont";
    msgContainer.innerHTML = `
       <div id="java" onclick="showText('java')">Java</div>
      <div id="html" onclick="showText('html')">Html</div>
      <div id="css" onclick="showText('css')">css</div>`;
    // appending the message container to the main content
    mainContent.appendChild(msgContainer);
  };
  
  // defining function to display whole text on clicking a text
  function showText(data) {
    var msgBox = document.querySelector("#msg-cont");
    msgBox.innerHTML = "";
    var msg = document.createElement("p");
    msg.id = "text";
    switch (data) {
      case "java":
        msg.innerHTML =
          "Java is a high level, robust, object-oriented and secure programming language.";
        break;
      case "html":
        msg.innerHTML =
          " HTML stands for hypertext markup language and it is used to create pages which are rendered over the web.";
        break;
      case "css":
        msg.innerHTML =
          "CSS stands for Cascading Style Sheets used to design a document written in markup language. ";
        break;
    }
  
    // appending the message to the text container
    msgBox.appendChild(msg);
  }
  
  // fubction to show time when page load
  
  var mainContent = document.querySelector("#main");
  mainContent.innerHTML=`
  <h2 class="t2" id="t2"></h2>
  <p class="day" id="day"></p>
  <p class="date" id="date"></p>
  
  `
  
  function renderTime() {
    var mydate = new Date();
    var year = mydate.getFullYear();
    if (year < 1000) {
        year += 1900;
    }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var monthArr = new Array("Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec");
    var dayArr = new Array("Sunday", "Monday", "wednesday", "Thursday", "Friday", "Saturday");
  
    // Time
    var currTime = new Date();
    var h = currTime.getHours();
    var m = currTime.getMinutes();
    var s = currTime.getSeconds();
  
    if (h == 24) {
        h = 0;
    }
    else if (h > 12) {
        h = h - 0;
    }
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
  
    var showtime = document.getElementById("t2");
    showtime.innerHTML = h + ":" + m + ":" + s;
  
    var showday = document.getElementById("day");
    showday.innerHTML = "" + dayArr[day] + "";
  
    var showdate = document.getElementById("date");
    showdate.innerHTML = daym + " " + "" + monthArr[month] + " " + "" + year;
  
    setTimeout("renderTime()", 1000);
  }
  
  window.onload=()=>{
    renderTime();
  }