
function togglePeriod() {
    var rightCardYearly=document.querySelector(".right-card .yearly-price");
    if (rightCardYearly.style.display === "none") {
        rightCardYearly.style.display = "block";
    
    } else {
        rightCardYearly.style.display = "none";
    
}

var leftCardYearly=document.querySelector(".left-card .yearly-price");
    if (leftCardYearly.style.display === "none") {
        leftCardYearly.style.display = "block";
    
    } else {
        leftCardYearly.style.display = "none";
    
}

var centerCardYearly=document.querySelector(".center-card .yearly-price");
    if (centerCardYearly.style.display === "none") {
        centerCardYearly.style.display = "block";
    
    } else {
        centerCardYearly.style.display = "none";
    
}


    var rightCardMonthly=document.querySelector(".right-card .monthly-price");
    if (rightCardMonthly.style.display === "block") {
        rightCardMonthly.style.display = "none";
    
    } else {
        rightCardMonthly.style.display = "block";
    }

    var leftCardMonthly=document.querySelector(".left-card .monthly-price");
    if (leftCardMonthly.style.display === "block") {
        leftCardMonthly.style.display = "none";
    
    } else {
        leftCardMonthly.style.display = "block";
    }

    var centerCardMonthly=document.querySelector(".center-card .monthly-price");
    if (centerCardMonthly.style.display === "block") {
        centerCardMonthly.style.display = "none";
    
    } else {
        centerCardMonthly.style.display = "block";
    }


}