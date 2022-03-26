window.onload=()=>{
    var $=document.querySelector.bind(document);
    var $All=document.querySelectorAll.bind(document);


    $("#my-info-box").style="transform: translate(0,40px);opacity:1;";

    //menu bar animation
      var bool=true;
     var menu=$("#menu");
    menu.addEventListener('click',()=>{
        if(bool){
            $("#nav-menu-page").
            style="animation:menu-open 1s forwards;"
            bool=false;
        }
        else{
            $("#nav-menu-page").
            style="animation: menu-close 1s forwards;"
            bool=true;
        }
    });

  //image animation
  function pos(x, y, x2, y2) {
    let xdiff = x2 - x;
    let ydiff = y2 - y;
  
    let dis = Math.sqrt((xdiff) * (xdiff) + (ydiff) * (ydiff))

    return val = {
        c: xdiff,
        d: ydiff,
        hypon: dis
    }
}

var myPic=$("#my-svg");
var myPicOut=$("#my-svg-outbox")
onmousemove=(e)=>{
    var a=e.clientX;
    var b=e.clientY;
    
    // console.log(a)
    //sen is inversely proportional to sensivity ; 
    var sen=12;
    //pos(a,b,x2,y2);
    var trans=pos(a/(sen*1.25), b/(sen*1.25),innerWidth/(sen*2*1.5),innerHeight/(sen*2*1.5));
    
    //cursor
    var cursor=$("#cursor");
    cursor.style=`width:${trans.hypon/3}px; height:${trans.hypon/3}px; top:${b}px;left:${a}px;`
    //  console.log(trans);
    //assosseries;
    // console.log(transChild.hypon);
    
    myPicOut.style=`transform:translate(${trans.c}px,${trans.d}px);`;
    myPic.style=`transform:translate(${trans.c/1.2}px,${trans.d/1.3}px);  `;
        
}








}