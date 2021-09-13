let index = 0;
const totalWorkItems = $(".work-item").length; 


$(window).on("load",function(){
    $(".preloader").addClass("loaded");
 })

 $(document).ready(function (){

    // toogle the navbar
    $(".nav-toggle").click(function(){
        $(".header .nav").slideToggle();
      })
      $(".header .nav a").click(function(){
        if($(window).width() < 768){
           $(".header .nav").slideToggle();
        }
      })
      
    //   fixed header
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
          $(".header").addClass("fixed");
        }
        else{
          $(".header").removeClass("fixed");
        }
      })

    //   Smooth scrollion to remove clicking effect
    $("a").on('click', function(event) {
        if (this.hash !== "") { 
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
    
    // add dimensions to imageviewer
    const wHeight = $(window).height();
  	$(".lightbox-img").css("max-height",wHeight+"px");

      $(".work-item-inner").click(function(){
        index = $(this).parent(".work-item").index();
        $(".lightbox").addClass("open");
        lightboxSlideShow();
    })
    $(".lightbox .prev").click(function(){
     if(index == 0){
          index = totalWorkItems-1;
     }
     else{
         index--;
     }
     lightboxSlideShow();
    })
    $(".lightbox .next").click(function(){
        if(index == totalWorkItems-1){
            index = 0
        }
        else{
            index++;
        }
        lightboxSlideShow();
    })
    $(".lightbox-close").click(function(){
  		$(".lightbox").removeClass("open");
  	});

  	// close imeage viewer when clicked outside of img-box 
     $(".lightbox").click(function(event){
       if($(event.target).hasClass("lightbox")){
       	 $(this).removeClass("open");
       }
     })
  });

//   slideshow function
function lightboxSlideShow(){
    const imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
    const category = $(".work-item").eq(index).find("h4").html();
    $(".lightbox-img").attr("src",imgSrc);
    $(".lightbox-category").html(category)
    $(".lightbox-counter").html(totalWorkItems + "/" + (index+1));
  }

  // button message
  $('.submit').click(function () {
    var Name = $('#mce-FNAME').val();
    var Email = $('#mce-EMAIL').val();
    var Message = $('#mce-MESSAGE');
    var key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
    if (Name == '' || Email == '' || Message == '') {
        alert('Please make sure you have filled in the form correctly!');
    } else {
        alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
    }
});


