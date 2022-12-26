$(document).ready(function(){
$(".container-content article").hide()
$(".container-content article:first").show()
$("ul li a:first").addClass("active");
$("ul li a:first").addClass("text-active");

$("ul li a").click(function(){
    $("ul li a").removeClass("active");
    $("ul li a").removeClass("text-active");
    $(this).addClass("active");
    $(this).addClass("text-active");
    $(".container-content article").hide();

    var activeTab = $(this).attr("href");
    $(activeTab).show();
    return false;
    });

});
