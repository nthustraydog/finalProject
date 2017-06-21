export function setArea(){
	var width = window.innerWidth;

	// $(".nav-desktop a").css("font-size", 21*width/1100);
	// $(".nav-desktop a span").css("font-size", 20*width/1100);

	if(320 >= width && width <= 1024)
	{
		$('#hamburger').css("display", "block");
		$('.nav-desktop').css("display", "none");
	}
	else
	{
		$('#hamburger').css("display", "none");
		$('.nav-desktop').css("display", "block");
	}

}
