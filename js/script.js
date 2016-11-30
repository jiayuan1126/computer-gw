$(function() {
	var mySwiper = new Swiper('.swiper-content', {
		direction: 'horizontal',
		initialSlide: 0,
		speed: 600,
		loop: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: false,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
	});
})
window.onload = function() {
	if($(window).scrollTop() >= 500 && $(window).scrollTop() <= 700) {
		if(!$("#logoBig_box").hasClass("rotateInUpRight")) {
			$("#logoBig_box").addClass("displayBox rotateInUpRight");
		}
	}
	$(window).scroll(function() {
		if($(window).scrollTop() >= 500 && $(window).scrollTop() <= 700) {
			if(!$("#logoBig_box").hasClass("rotateInUpRight")) {
				$("#logoBig_box").addClass("displayBox rotateInUpRight");
			}
		}
	});
	
	
   var p1 = new Particles();

	p1.init({
		selector: '#canvas-one',
		color: '#ffffff',
		connectParticles: true,
		maxParticles: 200,
		minDistance: 25
	});
}
var alert_msg = function(msg) {
	if((typeof android !== "undefined" && android !== null) && (android.toast != null)) {
		return android.toast(msg);
	} else {
		return alert(msg);
	}
};