//we need the final date and current date --> subtract it and find the days hours minutes and seconds
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


const finalDate = "1 Jan 2021";

function countdown(){
	const newDate = new Date(finalDate);
	const currentDate = new Date();

	const difference = new Date(newDate - currentDate);
	const tot_sec = difference/ 1000;

	const seconds =  Math.floor(tot_sec)%60;
	const minutes = Math.floor(tot_sec /60)%60;
	const hours = Math.floor(tot_sec/3600)%24;
	const days = Math.floor(tot_sec/ 3600 /24);
	
	//console.log(days,hours,minutes,seconds);

	daysEl.innerHTML =  days;
	hoursEl.innerHTML = formatTime(hours);
	minutesEl.innerHTML  = formatTime(minutes);
	secondsEl.innerHTML = formatTime(seconds);

}


function formatTime(time){
	return time < 10 ? (`0${time}`) : time;
}

//Initializing
countdown();
setInterval(countdown,1000);