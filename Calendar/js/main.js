$(document).ready(function(){
    function successCallback(date){
        alert("Date: " + date);
    }

	$('#calendar').calendar({
        callback: successCallback,
        month: 1,
        year: 2018,
        weekLabel: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        monthsLabel: ["January", "Febrauary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        events: []
    });
});