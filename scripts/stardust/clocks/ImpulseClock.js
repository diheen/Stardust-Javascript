function ImpulseClock() {
    this.init();
}

ImpulseClock.prototype = {
    
    init: function() {
        Clock.call(this);
    },

    getTicks: function(time) {
        elapsed = time-lastTick;
        lastTick = time;
        return elapsed;
    }
};