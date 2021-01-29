  $(document).ready(function () {
      setTimeout(function () {
		 $("body").append("<p class=prompt>_</p>").fadeIn();
      }, 500);
   });

   $(document).ready(function () {
      setTimeout(function ()	  {
		 $(".prompt").remove();
		 $("body").append("<p class=text>Finding HT Build 01 HT01.202007082050</p>").fadeIn();
		 $("body").append("<p class=prompt>_</p>").fadeIn();
      }, 2000);
   });