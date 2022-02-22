// giving color to the elements with class "color"
function setColor() {
    $(".color").each(function(index, item) {
        var color = item.textContent;
        // console.log("color", color);
        $(this).css("border-color", color);
    });
}
// giving font to the elements with class "font"
function setFont() {
    $(".font").each(function(index, item) {
        var font = item.textContent;
        // console.log("font-family", font);
        $(this).css("font-family", font);
    });
}

function editCss() {
    let clr = $("#clr")[0].value;
    let bgc = $("#bgc")[0].value;
    let bdc = $("#bdc")[0].value;
    let bdw = $("#bdw")[0].value;
    let ff = $("#ff")[0].value;

    console.log(clr,bgc,bdc,bdw,ff);

    $("body").css('color', clr);
    $("body").css('background-color', bgc);
    $("main").css('border-color', bdc);
    $("main").css('border-width', bdw+"px");
    $("body").css('font-family', ff);
}



// drag and drop for color
dragula([$("#color1")[0], $("#color2")[0]], {
    // disable dragging from color1 to color2
    accepts: function(el, target) {
        return target !== $("#color2")[0];
    }
})
    .on('drop', function(el, target, source) {
        let swapped = $(target).find('div').not(el);
        // console.log("swapped", swapped);
        // console.log("source", source);
        swapped.appendTo(source);
        
        let color = $(el).css('border-color');
        $(target).css('background-color', color);
        $("#colorPlayground").css('color', color)
    });

// drag and drop for font
dragula([$("#font1")[0], $("#font2")[0]], {
    // disable dragging from font1 to font2
    accepts: function(el, target) {
        return target !== $("#font2")[0];
    }
})
    .on('drop', function(el, target, source) {
        let swapped = $(target).find('div').not(el);
        // console.log("swapped", swapped);
        // console.log("source", source);
        swapped.appendTo(source);
        
        let font = $(el).css('font-family');
        $("#fontPlayground").css('font-family', font)
    });

$(function() {
    setColor();
    setFont();

    // adding listeners to buttons
    $("#enableColor").on('click', function() {
        $("#color").show(800);
        setTimeout(()=> {
            $("#color")[0].scrollIntoView({behavior: 'smooth'});
        }, 800);
        $("#progressBar").animate({width: "33%"});
    })
    $("#enableFont").on('click', function() {
        $("#font").show(800);
        setTimeout(()=> {
            $("#font")[0].scrollIntoView({behavior: 'smooth'});
        }, 800);
        $("#progressBar").animate({width: "66%"});
    })
    $("#enableAdvanced").on('click', function() {
        $("#advanced").show(800);
        setTimeout(()=> {
            $("#advanced")[0].scrollIntoView({behavior: 'smooth'});
        }, 800);
        $("#progressBar").animate({width: "100%"});
        $("nav").css('display', 'flex');
    })
    $("#cssButton").on('click', editCss);
});

