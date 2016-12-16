


$(function(){
  // N'oubliez pas d'intégrer "jquery.color-2.1.2.min.js"
  // pour l'animation des couleurs
  $("#btn0").click(function(){
    alert ("es tu sur de cliquer sur le printemps"),
    alert ("attention au yeux");
    alert("je ne suis pas responsable des dommages occasionnés")
      $("#container").css("background-image",'url('+ "image/primtemps.gif" +")");
      $("#container1").css("background-image",'url('+ "image/primtemps2.gif" +")");
      $("#presentation3").css("background-image",'url('+ "image/foret.gif" +")");
      $("#presentation1").css("background-image",'url('+ "image/foret4.jpeg" +")");
      $("#contact").css("background-image",'url('+ "image/printemps3.gif" +")");

  });

  $("#btn1").click(function(){
    alert ("es tu sur de cliquer sur l'hiver"),
    alert ("attention au yeux");
    alert("je ne suis pas responsable des dommages occasionnés")

    $("#container").css("background-image",'url('+ "image/neige.gif" +")");
    $("#container1").css("background-image",'url('+ "image/neige6.gif" +")");
    $("#presentation3").css("background-image",'url('+ "image/neige3.gif" +")");
    $("#presentation1").css("background-image",'url('+ "image/neige5.gif" +")");
    $("#contact").css("background-image",'url('+ "image/neige2.gif" +")");

  });

  $("#btn2").click(function(){
    alert ("es tu sur de cliquer sur l'été"),
    alert ("attention au yeux");
    alert("je ne suis pas responsable des dommages occasionnés")

    $("#container").css("background-image",'url('+ "image/ete.gif" +")");
    $("#container1").css("background-image",'url('+ "image/ete2.gif" +")");
    $("#presentation3").css("background-image",'url('+ "image/ete3.gif" +")");
    $("#presentation1").css("background-image",'url('+ "image/ete4.gif" +")");
    $("#contact").css("background-image",'url('+ "image/ete5.gif" +")");
  });

});

$(document).ready(function() {
		$('.js-scrollTo').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 1950; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});
    var posAncre = false;
    $("#logo2").click(function()
    {
      posAncre = posAncre ? false : true;
      $("#logo2").animate( {"left":posAncre ? 0 : $(window).width() - 50}, "fast" );
    });


    var prenom = prompt("entrer votre prénom!!");
    var prenom1 = document.getElementById("prenon");
    prenom1.innerHTML = prenom;
    prenom1.style.color = "white";
    prenom1.style.textTransform = "uppercase";
