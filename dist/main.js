function clock() {
    var date = new Date();
    var hours = ((date.getHours() + 11) % 12 + 1);
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var hour = hours * 30;
    var minute = minutes * 6;
    var second = seconds * 6;
    document.querySelector('.heure').style.transform = "rotate(".concat(hour, "deg)");
    console.log(hours);
    document.querySelector('.minute').style.transform = "rotate(".concat(minute, "deg)");
    console.log(minutes);
    document.querySelector('.seconde').style.transform = "rotate(".concat(second, "deg)");
    console.log(seconds);
}
setInterval(clock, 1000);
