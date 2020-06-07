  $(document).ready(function () {
      setTimeout(function () {
		 $("body").append("<p class=prompt>_</p>").fadeIn();
      }, 500);
   });

   $(document).ready(function () {
      setTimeout(function ()	  {
		 $(".prompt").remove();
		 $("body").append("<p class=text>bootmgr.html</p>").fadeIn();
		 $("body").append("<p class=prompt>_</p>").fadeIn();
      }, 2000);
   });