
//new Emitter()

// ----------------------------------------
// Particle
// ----------------------------------------
var attractorX = 1000;
var attractorY = 300;
var attractorRadius = 100;
var attractorStrength = 1;
var attractorEpsilon = 1;
var attractorAttenuationPower = 0;

var vec2DPool = [];

function Particle() {
    this.init();
}

Particle.prototype = {
    
    init: function() {
        this.x = 0;
        this.y = 0;
        this.initScale = this.scale = 1;
        this.initAlpha = this.alpha = 1;
        this.initLife = this.life = 1;
        this.mass = 1;
        this.massless = false;//
        
        this.alive = true;//isDead = false;
        this.attractable = true;
        
        //this.wander = 0.15;
        this.wander = 0;
        //this.theta = random( TWO_PI );
        this.theta = 0;
        this.drag = 0.92;
        //this.drag = 1;//1 == no drag/no friction
        this.color = '#fff';
        
        this.dx = 0;
        this.dy = 0;

        this.vx = 0.0;
        this.vy = 0.0;
        this.img = null;
        this.blendMode = 'source-over';

        this.width = 256;
        this.height= 256;
        this.widthScaled = this.width * this.scale;
        this.heightScaled = this.height * this.scale;
    },

    move: function() {
        this.x += this.vx;
        this.y += this.vy;

        this.vx *= this.drag;
        this.vy *= this.drag;
        
        //this.theta += random( -0.5, 0.5 ) * this.wander;
        //this.vx += sin( this.theta ) * 0.1;
        //this.vy += cos( this.theta ) * 0.1;
        
        if(this.attractable)
        {
            dx = this.x - attractorX;
            dy = this.y - attractorY;
            if(dx * dx + dy * dy <= attractorRadius * attractorRadius)//distance check without sqrt
            {
                //move to next waypoint
                //OR move to first waypoint if looping
                this.scale *= 0.8;
            }
            
            var r = vec2DPool.length ? vec2DPool.pop() : new Vec2D();
            r.init(dx, dy);
            var len = r.length;
            if(len < attractorEpsilon)
                len = attractorEpsilon;
            
            r.setLength(-attractorStrength * pow(len, -0.5 * attractorAttenuationPower));
            if(!this.massless)//use mass
                r.setLength(r.length /= this.mass);
            
            this.vx += r.x;
            this.vy += r.y;
            
            vec2DPool.push(r);//to be recycled
        }

        this.scale *= 0.98;
        this.alpha *= 0.98;
        this.alive = this.scale > 0.01;
    },
    draw: function( ctx ) {
        this.widthScaled = this.width * this.scale;
        this.heightScaled = this.height * this.scale;
        //ctx.beginPath();
        //ctx.arc( this.x, this.y, this.scale, 0, TWO_PI );
        //ctx.fillStyle = this.color;
        //ctx.fill();
        //ctx.globalAlpha = this.alpha;
        ctx.drawImage(this.img, 0, 0, this.width, this.height, this.x-this.widthScaled/2, this.y-this.heightScaled/2, this.widthScaled, this.heightScaled);
    }
};

function Vec2D() {
}

Vec2D.prototype = {

    init: function(x, y) {
        this.x = x;
        this.y = y;
        this.length = sqrt(x * x + y * y);
    },
    
    setLength: function(len){
        var factor = len / this.length;
        this.x = this.x * factor;
        this.y = this.y * factor;
        this.length = len;
    }
};