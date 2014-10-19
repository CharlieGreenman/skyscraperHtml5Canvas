document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){
    var c = document.getElementById('canvas1');
    var ctx = c.getContext('2d');



// set up a new canvas for pattern
    var pattern = document.createElement('canvas');
    pattern.width = 2;
    pattern.height = 4;
    var pctx = pattern.getContext('2d');

//set up context for pattern canvas
    pctx.fillStyle = randColor();
    pctx.fillRect(0,0,2,4);
    pctx.lineWidth = 1;
    pctx.strokeStyle ='rgb(237,201,175)';
    pctx.strokeRect(0,0,22,22);

//put the pattern into the main ctx element
    var pat1 = ctx.createPattern(pattern, 'repeat');
    ctx.rect(0,0,100,240);
    ctx.fillStyle = pat1;
    ctx.fill();
    //create a door for the building
    ctx.globalCompositeOperation='source-over';
    ctx.fillStyle= 'black';
    ctx.fillRect(45,220,10,20);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'yellow';
    ctx.strokeRect(45,220,10,20);

    function randColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i =0; i < 6; i++) {
          color += letters[Math.floor(Math.random()*16)];
      }
        return color;
    }


    //linear gradient


}
