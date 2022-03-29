window.onload = () => {
    var $ = document.querySelector.bind(document);
    var $All = document.querySelectorAll.bind(document);

    let startLine=$("#start-line");
    setTimeout(() => {
        startLine.style="width:100%"
    }, 1000);
        
    setTimeout(() => {
        $("#start").style="animation:slideup 1s 1 forwards"
        $("#main-container").style="display:block"
        startLine.style="width:0%"
    }, 2000);
        
    var infobox = $("#my-info-box")
    infobox.style = "transform: translate(0,40px);opacity:1;";

    //menu bar animation
    var bool = true;
    var menu = $("#menu");
    menu.addEventListener('click', () => {
        if (bool) {
            $("#nav-menu-page").
                style = "animation:menu-open 1s forwards;"
            bool = false;
        }
        else {
            $("#nav-menu-page").
                style = "animation: menu-close 1s forwards;"
            bool = true;
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
    var myPic = $("#my-svg");
    var myPicOut = $("#my-svg-outbox")
    onmousemove = (e) => {
        var a = e.clientX;
        var b = e.clientY;
        // console.log(a)
        //sen is inversely proportional to sensivity ; 
        var sen = 12;
        //pos(a,b,x2,y2);
        var trans = pos(a / (sen * 1.25), b / (sen * 1.25), innerWidth / (sen * 2 * 1.5), innerHeight / (sen * 2 * 1.5));
        //cursor
        var cursor = $("#cursor");
        cursor.style = `width:${trans.hypon / 3}px; height:${trans.hypon / 3}px; top:${b}px;left:${a}px;`
        //  console.log(trans);
        // console.log(transChild.hypon);
        //assosseries;
        myPicOut.style = `transform:translate(${trans.c}px,${trans.d}px);`;
        myPic.style = `transform:translate(${trans.c / 1.2}px,${trans.d / 1.3}px);  `;

    }

    //change-mode
    let bool2 = true;
    $("#mode").onclick = () => {
        if (bool2) {
            $("body").style = "background:#E5E3C9;color:hsl(175, 40%, 10%)"
            $("#my-svg-outbox").style = "background:#B4CFB0";
            $("#my-info-box").style = "background:#B4CFB0;transform: translate(0,40px);opacity:1;";
            $("#mode").style = "background-image: url('/svg/dark_mode_black_24dp.svg');background-size: cover;"
            $("#menu").style = "background-image: url('/svg/menu_black_24dp.svg');background-size: cover;"
            bool2 = false;
            // console.log()
        }
        else {
            $("body").style = "background: linear-gradient(90deg, hsl(175, 40%, 7%) 50%, hsl(175, 40%, 15%));color:whitesmoke"
            $("#my-svg-outbox").style = "background:hsl(175, 40%, 7%)";
            $("#my-info-box").style = "background: hsl(175, 40%, 10%);transform: translate(0,40px);opacity:1;";
            $("#mode").style = "background-image: url('/svg/dark_mode_white_24dp.svg');background-size: cover;"
            $("#menu").style = "background-image: url('/svg/menu_white_24dp.svg');background-size: cover;"
            bool2 = true;
        }
    }

    var color1=$("body")
    var bodyColor=window.getComputedStyle(color1)
    var gotbodyC=bodyColor.getPropertyValue('background')
    console.log(gotbodyC) 



}
