function Emitter(clock = null, particleHandler = null) {
    this.init(clock, particleHandler);
}

// legacy from flash, may not be needed... or used with another value
Emitter.timeStepCorrectionOffset = 0.004;

Emitter.prototype = {
    init: function(clock = null, particleHandler = null)
    {
        //if the emitter is active, it will create particles in each step according to the clock, even if not active, the particles will continue simulating
        this.active = true;

        //keeps track of time
        this.clock = clock;
        //used to render particles
        this.particleHandler = particleHandler;

        this.fps = 60;
        // used with clock to keep track of how long since the last handling of particles
        this.currentTime = 0;

        this.actions = [];
        this.initializers = [];

        this.newParticles = [];

        //every managed particle, not a copy
        this.particles = [];
        
        this.inverseFPS = 1/60 - Emitter.timeStepCorrectionOffset;
        this.timeSinceLastStep = 0;
        this.currentTime = 0;

        this.x = 0;
        this.y = 0;

        this.particleSpawnVariationX = 0;
        this.particleSpawnVariationY = 0;
        this.spawnAtLeast = 0;
    },

    step2: function(time)
    {
        if(time <= 0)
        {
            return;
        }
        
        this.timeSinceLastStep = this.timeSinceLastStep + time;
        this.currentTime = this.currentTime + time;
        if(this.timeSinceLastStep < this.inverseFPS)
        {
            return;
        }
        
        if(this.active || this.spawnAtLeast > 0)
        {
            //createParticles(clock.getTicks(this.timeSinceLastStep));
            this.spawnAtLeast--;
            this.tempSpawner(this.x, this.y);
        }

        this.timeSinceLastStep = 0;
    },

    tempSpawner: function(x, y)
    {
        //temp until more time
    }

}