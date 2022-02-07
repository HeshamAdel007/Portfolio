// ================== Switch Between Sections ==================
$(".sidebar-pointer ul li").on("click", function () {
	let sectionPostion = $("." + $(this).data("section"));
	sectionPostion.addClass("active")
		.siblings().removeClass("active")

	$(this).addClass("active").siblings().removeClass("active")
	if (sectionPostion.hasClass("txt-black")) {
		$(".body-container").removeClass("txt-white")
	} else {
		$(".body-container").addClass("txt-white")
	}
});

// ================== Scrolling  ==================

// Scrolling Will Show In Some Sections When Screen < 1200px
$(window).on("scroll", function () {
	$(".sidebar-pointer .parent").each(function () {
		if ($(window).scrollTop() > $(this).offset().top - 50) {
			let item = $(this).attr("id");
			let ele = $(".sidebar-pointer li[data-section=" + item + "]")
			ele.addClass("active").siblings().removeClass("active")
            
			if ($(this).hasClass("txt-black")) {
				$(".body-container").removeClass("txt-white")
			} else {
				$(".body-container").addClass("txt-white")
			}
		}
	})
});

// ================== Home Typed  ==================
$(function () {
	var typed = new Typed('#typed', {
		strings: [
			"i am a back-end Developer",
			"i am Very Hard Worker",
			"i have Great Experience",
			"not much to see here yet something big is coming!",
		], 
       typeSpeed: 70,
       backSpeed: 50,
       smartBackspace: true, 
       loop: true
	});

});


// ================== SideBar  Tooltip ==================
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
});


// ================== Carousel Reviews Section ==================
var myCarousel = document.querySelector('#reviews');
var carousel = new bootstrap.Carousel(myCarousel, {
	interval: 100000,
	wrap: true,
});

// ========================== End Code ==========================