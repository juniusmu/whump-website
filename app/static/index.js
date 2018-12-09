console.log("does this even work");
// TODO need to tweak code to fix with my website
$(document).ready(function() {
    console.log("the jquery file is connected");
    // all custom jQuery will go here
    $('.dropdown-item').on('click', function() {
        var startPos = $(document).scrollTop();
        var clickedId = $(this).attr('id');
        console.log(clickedId);
        switch(clickedId){
            case "loading-page-link":
                console.log("A");
                endPos = $("#jumbotron").offset().top;
                break;
            case "about-me-link":
                console.log("B");
                endPos = $("#about-me").offset().top;
                break;
            case "resume-link":
                console.log("C");
                endPos = $("#resume").offset().top;
                console.log("This is the endPos: " + endPos);
                break;
            case "software-link":
                console.log("D");
                endPos = $("#software").offset().top;
                break;
            case "youtube-link":
                console.log("E");
                endPos = $("#youtube").offset().top;
                break;
            case "slideshow-link":
                console.log("F");
                endPos = $("#slideshow").offset().top;
                break;
            default:
                console.log("G");
                break;
        }
        // var endPos = $(clickedId).scrollTop();
        endPos = endPos - $(window).height() * 0.15;
        var distance = endPos - startPos;
        $('html, body').animate({
          scrollTop: endPos
        }, 1000);
    })

    $('#resume-img').on('click',function(){
        console.log("resume is clicked")
        // resume url
        var win = window.open('https://drive.google.com/file/d/1kyYRNgkMFKN7U0lcPIKcVHQHvhIdq-8W/view?usp=sharing', '_blank');
        if (win) {
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }
    })


});

$(function(){
    $('body').removeClass("fade-out");
});



