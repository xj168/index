document.addEventListener('DOMContentLoaded', function () {

    // 倒计时目标时间，格式为YYYY-MM-DD HH:MM:SS
    const LOVEDate = new Date("2017-02-11 00:00:00").getTime();
    const MARRIAGEDate = new Date("2023-01-26 12:06:00").getTime();
    const CERTIFICATEData = new Date("2022-12-22 14:08:00").getTime();

    function updateCountdown(elementId, targetDate) {
        const now = new Date().getTime();
        const distance =  now - targetDate;

        let timeLeft = {};

        if (distance > 0) {
            timeLeft.days = Math.floor(distance / (1000 * 60 * 60 * 24));
            timeLeft.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            timeLeft.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            timeLeft.seconds = Math.floor((distance % (1000 * 60)) / 1000);
			timeLeft.hours=timeLeft.hours<10?'0'+timeLeft.hours:timeLeft.hours;
			timeLeft.minutes=timeLeft.minutes<10?'0'+timeLeft.minutes:timeLeft.minutes;
			timeLeft.seconds=timeLeft.seconds<10?'0'+timeLeft.seconds:timeLeft.seconds;
            document.getElementById(elementId).innerText = `${timeLeft.days}天 ${timeLeft.hours}小时 ${timeLeft.minutes}分 ${timeLeft.seconds}秒`;
        } else {
            clearInterval(countdownInterval);
            document.getElementById(elementId).innerText = "Foever";
            document.getElementById(elementId).style.color = 'red';
        }
    }

    const countdownInterval = setInterval(function() { 
        updateCountdown('LOVE', LOVEDate); 
        updateCountdown('MARRIAGE', MARRIAGEDate); 
        updateCountdown('CERTIFICATE',CERTIFICATEData); 
    }, 1000);
});
