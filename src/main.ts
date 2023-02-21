function clock() {
    const date : Date = new Date();
    const hours : number = ((date.getHours() + 11) % 12 + 1);
    const minutes : number = date.getMinutes();
    const seconds : number = date.getSeconds();

    const hour : number = hours * 30;
    const minute : number = minutes * 6;
    const second : number = seconds * 6;

    (document.querySelector('.heure') as HTMLElement).style.transform = `rotate(${hour}deg)`;
    console.log(hours);

    (document.querySelector('.minute') as HTMLElement).style.transform = `rotate(${minute}deg)`;
    console.log(minutes);

    (document.querySelector('.seconde') as HTMLElement).style.transform = `rotate(${second}deg)`;
    console.log(seconds);
}

setInterval(clock, 1000);