var li_items = document.querySelectorAll(".sidebar ul li");
var hamburger = document.querySelector(".hamburger");
var wrapper = document.querySelector(".wrapper");

li_items.forEach((li_item)=>{
	li_item.addEventListener("mouseenter", ()=>{
		if(wrapper.classList.contains("click_collapse")){
			return;
		}
		else{
			li_item.closest(".wrapper").classList.remove("hover_collapse");
		}
	})
})

li_items.forEach((li_item)=>{
	li_item.addEventListener("mouseleave", ()=>{
		if(wrapper.classList.contains("click_collapse")){
			return;
		}
		else{
			li_item.closest(".wrapper").classList.add("hover_collapse");
		}
	})
})

hamburger.addEventListener("click", () => {
	hamburger.closest(".wrapper").classList.toggle("click_collapse");
	hamburger.closest(".wrapper").classList.toggle("hover_collapse");
})

function myFunction(x) {
	// if(x.matches)   ==> if you want to use condition, you can use this statement return less than 1000px -> true || false
	hamburger.closest(".wrapper").classList.toggle("click_collapse");
	hamburger.closest(".wrapper").classList.toggle("hover_collapse");
}
var x = window.matchMedia("(max-width: 1000px)")
x.addListener(myFunction) // add listener function on screen width changes

myFunction({});

// ----------------------------- End code For Side Bar ----------------------------------------------
// ----------------------------- Start code For Two Way Element Show/Hide --------------------------- 

// var maintain = document.querySelector(".maintain");
// var transaction = document.querySelector(".transaction");
// var system = document.querySelector(".system");
// var helping = document.querySelector(".helping");
// var report = document.querySelector(".report");

// maintain.addEventListener("click", () => {
// 	let maintain = document.getElementById("maintain");
//    	maintain.style.display = "block";
//    	let transaction = document.getElementById("transaction");
//    	transaction.style.display = "none";
//    	let system = document.getElementById("system");
//    	system.style.display = "none";
//    	let helping = document.getElementById("helping");
//    	helping.style.display = "none";
//    	let report = document.getElementById("report");
//    	report.style.display = "none";
// })

// transaction.addEventListener("click", () => {
// 	let maintain = document.getElementById("maintain");
//    	maintain.style.display = "none";
//    	let transaction = document.getElementById("transaction");
//    	transaction.style.display = "block";
//    	let system = document.getElementById("system");
//    	system.style.display = "none";
//    	let helping = document.getElementById("helping");
//    	helping.style.display = "none";
//    	let report = document.getElementById("report");
//    	report.style.display = "none";
// })

// system.addEventListener("click", () => {
// 	let maintain = document.getElementById("maintain");
//    	maintain.style.display = "none";
//    	let transaction = document.getElementById("transaction");
//    	transaction.style.display = "none";
//    	let system = document.getElementById("system");
//    	system.style.display = "block";
//    	let helping = document.getElementById("helping");
//    	helping.style.display = "none";
//    	let report = document.getElementById("report");
//    	report.style.display = "none";
// })

// helping.addEventListener("click", () => {
// 	let maintain = document.getElementById("maintain");
//    	maintain.style.display = "none";
//    	let transaction = document.getElementById("transaction");
//    	transaction.style.display = "none";
//    	let system = document.getElementById("system");
//    	system.style.display = "none";
//    	let helping = document.getElementById("helping");
//    	helping.style.display = "block";
//    	let report = document.getElementById("report");
//    	report.style.display = "none";
// })

// report.addEventListener("click", () => {
// 	let maintain = document.getElementById("maintain");
//    	maintain.style.display = "none";
//    	let transaction = document.getElementById("transaction");
//    	transaction.style.display = "none";
//    	let system = document.getElementById("system");
//    	system.style.display = "none";
//    	let helping = document.getElementById("helping");
//    	helping.style.display = "none";
//    	let report = document.getElementById("report");
//    	report.style.display = "block";
// })

///  upper block use event listener to show/hide div 

function showHideDiv(val){
	switch (val) {
	  case 'maintain':
        var maintain = document.getElementById("maintain");
	   	maintain.style.display = "block";
	   	var transaction = document.getElementById("transaction");
	   	transaction.style.display = "none";
	   	var system = document.getElementById("system");
	   	system.style.display = "none";
	   	var helping = document.getElementById("helping");
	   	helping.style.display = "none";
	   	var report = document.getElementById("report");
	   	report.style.display = "none";
      break;
      case 'transaction':
        var maintain = document.getElementById("maintain");
	   	maintain.style.display = "none";
	   	var transaction = document.getElementById("transaction");
	   	transaction.style.display = "block";
	   	var system = document.getElementById("system");
	   	system.style.display = "none";
	   	var helping = document.getElementById("helping");
	   	helping.style.display = "none";
	   	var report = document.getElementById("report");
	   	report.style.display = "none";
      break;
      case 'system':
        var maintain = document.getElementById("maintain");
	   	maintain.style.display = "none";
	   	var transaction = document.getElementById("transaction");
	   	transaction.style.display = "none";
	   	var system = document.getElementById("system");
	   	system.style.display = "block";
	   	var helping = document.getElementById("helping");
	   	helping.style.display = "none";
	   	var report = document.getElementById("report");
	   	report.style.display = "none";
      break;
      case 'helping':
        var maintain = document.getElementById("maintain");
	   	maintain.style.display = "none";
	   	var transaction = document.getElementById("transaction");
	   	transaction.style.display = "none";
	   	var system = document.getElementById("system");
	   	system.style.display = "none";
	   	var helping = document.getElementById("helping");
	   	helping.style.display = "block";
	   	var report = document.getElementById("report");
	   	report.style.display = "none";
      break;
      case 'report':
        var maintain = document.getElementById("maintain");
	   	maintain.style.display = "none";
	   	var transaction = document.getElementById("transaction");
	   	transaction.style.display = "none";
	   	var system = document.getElementById("system");
	   	system.style.display = "none";
	   	var helping = document.getElementById("helping");
	   	helping.style.display = "none";
	   	var report = document.getElementById("report");
	   	report.style.display = "block";
      break;
      default:
      	var maintain = document.getElementById("maintain");
	   	maintain.style.display = "block";
	   	var transaction = document.getElementById("transaction");
	   	transaction.style.display = "block";
	   	var system = document.getElementById("system");
	   	system.style.display = "block";
	   	var helping = document.getElementById("helping");
	   	helping.style.display = "block";
	   	var report = document.getElementById("report");
	   	report.style.display = "block";
    }	
}
