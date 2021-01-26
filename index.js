function StopWatch(color) {
    let startTime, endTime = true, running = true, duration = 0

    let fide = "papa de claris";
    let natis = "mama de claris"
    this.color = color;

    
    Object.defineProperty(this, 'fide', {
        get: function () { return fide; }
    });

     
    Object.defineProperty(this, 'natis', {
        get: function () { return natis; }
    });

     
    Object.defineProperty(this, 'running', {
        get: function () { return running; }
    });

     
    Object.defineProperty(this, 'endTime', {
        get: function () { return endTime;}
    })


};

let relogiro = new StopWatch('green');

StopWatch.prototype.start = function () {
    if (this.running) {
        console.log("stopwatch has already started" + this.natis);
    }
};

StopWatch.prototype.stop = function () {
    if (this.endTime) {
        console.log('the end is near' + fide);
    }
};




console.log(relogiro.start());






