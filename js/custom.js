(function($) {

    "use strict";
	
    $(document).ready(function() {
		
		// PRELOADER
        $("body").toggleClass("loaded");
        setTimeout(function() {
            $("body").addClass("loaded");
        }, 3000);
		
		// PORTFOLIO DIRECTION AWARE HOVER EFFECT
		var item = $("#bl-work-items>div");
		var elementsLength = item.length;
		for (var i = 0; i < elementsLength; i++) {
			$(item[i]).hoverdir();
		}
		
		// TEXT ROTATOR
		$("#selector").animatedHeadline({
             animationType: "clip"
        });
		
		// BOX LAYOUT
        Boxlayout.init();
		
		// REMOVE # FROM URL
		$("a[href='#']").on("click", (function(e) {
			e.preventDefault();
		}));

        // AJAX CONTACT FORM
        function sendContact() {
            var valid;	
            valid = validateContact();
            if(valid) {
                jQuery.ajax({
                    url: "contact_mail.php",
                    data:'userName='+$("#userName").val()+'&userEmail='+
                    $("#userEmail").val()+'&subject='+
                    $("#subject").val()+'&content='+
                    $(content).val(),
                    type: "POST",
                    success:function(data){
                        $("#mail-status").html(data);
                    },
                    error:function (){}
                });
            }
        }

        function validateContact() {
            var valid = true;	
            $(".demoInputBox").css('background-color','');
            $(".info").html('');
            if(!$("#userName").val()) {
                $("#userName-info").html("(required)");
                $("#userName").css('background-color','#FFFFDF');
                valid = false;
            }
            if(!$("#userEmail").val()) {
                $("#userEmail-info").html("(required)");
                $("#userEmail").css('background-color','#FFFFDF');
                valid = false;
            }
            if(!$("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
                $("#userEmail-info").html("(invalid)");
                $("#userEmail").css('background-color','#FFFFDF');
                valid = false;
            }
            if(!$("#subject").val()) {
                $("#subject-info").html("(required)");
                $("#subject").css('background-color','#FFFFDF');
                valid = false;
            }
            if(!$("#content").val()) {
                $("#content-info").html("(required)");
                $("#content").css('background-color','#FFFFDF');
                valid = false;
            }
            return valid;
        }

		// MATERIAL CAROUSEL
        $(".carousel.carousel-slider").carousel({
            fullWidth: true,
            indicators: true,
        });
		
		// RESUME CARDS ANIMATION
		if ($(window).width() > 800) {
			$(".resume-list-item, .resume-card").on("click", function() {
				$(".resume-list-item").removeClass("is-active");
				var e = parseInt($(this).data("index"),10);
				$("#resume-list-item-" + e).addClass("is-active");
				var t = e + 1,
					n = e - 1,
					i = e - 2;
				$(".resume-card").removeClass("front back up-front up-up-front back-back"), $(".resume-card-" + e).addClass("front"), $(".resume-card-" + t).addClass("back"), $(".resume-card-" + n).addClass("back-back"), $(".resume-card-" + i).addClass("back")
			});
		}
		
    });

})(jQuery);