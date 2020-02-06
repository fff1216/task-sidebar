$(function () {
    $(".item").on("mouseover", function () {
        $(this).css("background-color", "#4d555d");
        $(this).find(".material-icons").css("color", "#f01400");
        $(this).find(".item-tip").css("left", "38px");
    });
    $(".item").on("mouseout", function () {
        $(this).css("background-color", "#1d1d21");
        $(this).find(".material-icons").css("color", "#808792");
        $(this).find(".item-tip").css("left", "-50px");
    });
    var constate = "allclosed";
    var openContent = null;
    $(".item").on("click", function () {
        var currentId = $(this).attr('id');
        var name = currentId + "-content";
        if (constate === "allclosed") {
            $("#" + name).css("left", "40px");
            constate = "opened";
            openContent = name;
        }
        else {
            $("#" + openContent).css("left", "-200px");
            $("#" + name).css("left", "40px");
            constate = "opened";
            openContent = name;
        }
    });
    $(".nav-content .material-icons").on("click", function () {
        $(this).parent().parent().css("left", "-200px");
    });
    var barState = "opened";
    $("#closeBar").on("click", function () {
        if (barState === "opened") {
            $(this).css("left", "100px");
            $(this).find(".material-icons").css("color", "#42a5f5");
            $(this).find(".material-icons").css("font-size", "40px");
            $(this).parent().css("left","-40px");
            if(constate = "opened") {
                $(".nav-content").css("left","-200px");
            }
            barState="closed";
        }
        else{
            $(this).css("left", "5px");
            $(this).parent().css("left","0px");
            $(this).find(".material-icons").css("color", "#f01400");
            $(this).find(".material-icons").css("font-size", "28px");
            barState = "opened";
        }
    });
});
