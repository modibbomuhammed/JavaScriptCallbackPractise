module.exports = (time) => {
    const clearTimer = setInterval(() => {
        if (time === 0) {
            console.log("Ring Ring Ring!!!!");
            clearInterval(clearTimer);
        } else {
            console.log(`timer is counting down for ${time}`)
        }
        time--;
    }, 1000);

}