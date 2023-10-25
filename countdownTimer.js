module.exports = (time) => {
    const clearTimer = setInterval(() => {
        if (time === 0) {
            console.log("Ring Ring Ring!!!!");
        } else {
            console.log(time)
        }
        setTimeout(() => {
            clearInterval(clearTimer);
        }, time * 100);
        time--;
    });

}