// ---------------------------------- calculator operation script start-------------------------------
var clickcount = 0; // to count oneach button click
var screenvalue = "";
var temp = 0;
var screenlength = 0;
var result = 0;
var display = 0;

//event listener for each button clicks
$(".btn").click(function() {

  display = $(this).val();
  displayNum(display);

});

function displayNum(display) {

  clickcount = clickcount++; //to perform concatenation for each button clicks

  if (clickcount == 1 && display !== "DEL" && display !== "=" && display !== "RESET") {
    screenvalue = display;
  } else if (clickcount !== 1 && display !== "DEL" && display !== "=" && display !== "RESET") {
    screenvalue = screenvalue + display; //concatenation of the button values
  } else if (display === "DEL" && display !== "RESET") {
    screenvaluelength = screenvalue.length - 1;
    temp = screenvalue.slice(0, screenvaluelength); //to delete the last letter in the string
    screenvalue = temp;
  }

  if (display === "RESET") {
    location.reload(); //reload to the initial values
  }

  if (display === "=") {
    result = eval(screenvalue); //to perform operation in the string
    screenvalue = result;
  }

  $("#screen").text(screenvalue); // change the text on button click
}
// ---------------------------------- calculator operation script end-------------------------------

// -----------------------------------theme change styling for toggle switch------------------------
//event listener for theme selection when toggle1 is clicked
$("#toggler1").click(function() {

  var color11 = "hsl(222, 26%, 31%)";
  var color12 = "hsl(223, 31%, 20%)";
  var color13 = "hsl(224, 36%, 15%)";
  var color14 = "hsl(225, 21%, 49%)";
  var color15 = "0px 2px hsl(224, 28%, 35%)";
  var color16 = "hsl(30, 25%, 89%)";
  var color17 = "0px 2px hsl(28, 16%, 65%)";
  var color18 = "hsl(221, 14%, 31%)";
  var color19 = "#fff";
  var color110 = "#fff";
  changeStyle(color11, color12, color13, color14, color15, color16, color17, color18, color19, color110);

});

// event listener for theme selection when toggle2 is clicked
$("#toggler2").click(function() {

  var color21 = "hsl(0, 0%, 90%)";
  var color22 = "hsl(0, 5%, 81%)";
  var color23 = "hsl(0, 0%, 93%)";
  var color24 = "hsl(185, 42%, 37%)";
  var color25 = "0px 2px hsl(185, 58%, 25%)";
  var color26 = "hsl(45, 7%, 89%)";
  var color27 = "0px 2px hsl(35, 11%, 61%)";
  var color28 = "hsl(60, 10%, 19%)";
  var color29 = "#fff";
  var color210 = "hsl(60, 10%, 19%)";
  changeStyle(color21, color22, color23, color24, color25, color26, color27, color28, color29, color210);

});

// event listener for theme selection when toggle3 is clicked
$("#toggler3").click(function() {

  var color31 = "hsl(268, 75%, 9%)";
  var color32 = "hsl(268, 71%, 12%)";
  var color33 = "hsl(268, 71%, 12%)";
  var color34 = "hsl(281, 89%, 26%)";
  var color35 = "0px 2px hsl(285, 91%, 52%)";
  var color36 = "hsl(268, 47%, 21%)";
  var color37 = "0px 2px hsl(290, 70%, 36%)";
  var color38 = "hsl(52, 100%, 62%)";
  var color39 = "#fff";
  color310 = "hsl(52, 100%, 62%)";
  changeStyle(color31, color32, color33, color34, color35, color36, color37, color38, color39, color310);

});

//change style for all elements
function changeStyle(value1, value2, value3, value4, value5, value6, value7, value8, value9, value10) {

  $("body").css("background-color", value1);
  $(".toggle-container , .calc-body").css("background-color", value2);
  $(".result").css("background-color", value3);
  $("#btnreset").css("background-color", value4).css("box-shadow", value5);
  $(".child1,.child2,.child3,.child4").find(".btn").css("background-color", value6).css("box-shadow", value7).css("color", value8);
  $(".child1").find("#btndel").css("background-color", value4).css("box-shadow", value5).css("color", value9);
  $("h1,label").css("color", value10);
}
