$(window).bind('load', function(){
	AOS.init();
	// alert('hello world')
	var menu_open = false;

	get_timeline_h()
	
	get_init_width();

	resize_all();

	research_project_btn();

	toggle_menu_bar();

	award_more_btn();

	product_more_btn();


})


function get_init_width(){
	var init_w = $(window).width();
	// console.log(init_w)
	if (init_w <960) {
		$('.card').removeAttr('data-aos-delay')
	}

}

function get_timeline_h(){
	h_arr = []
	$('.timeline').each(function(){
		h_arr.push($(this).height())
	})
	for (var i = 0; i < h_arr.length; i++) {
		if (h_arr[i] != 0) {
			res = h_arr[i]
		}
	}
	// console.log(res)
	$('style').text('.timeline::before{height:'+(res+100)+'px !important;}')

}

function resize_all(){
	// $('style').text('.timeline::before{height:'+($('.timeline').height()+100)+'px !important;}')
	$(window).resize(function() {

		get_timeline_h()

        var w = $(window).width();
		if(w >= 960){
			menu_open = false;
			$('.menu-btn').removeClass('open')
			$('.menu_list').hide()
			$('nav').css('height','unset')

			var i = 0;
			$('.card').each(function(){
				$(this).attr('data-aos-delay',i)
				i+=250
				
			})
		}else{
			$('.card').removeAttr('data-aos-delay')
		}
	});
}

function research_project_btn(){
	$('.timeline_btn_list .more_link').click(function(){
		// console.log(1)
		$('.more_link.active').removeClass('active');
		$(this).addClass('active')
		var text = $(this).attr('data-val')
		// console.log(text)

		$('.timeline_container').each(function(){
			if ($(this).attr('id') == text) {
				
				$(this).fadeIn(200)
				get_timeline_h()
				setTimeout(function() {AOS.refresh();}, 210);
			}else{
				$(this).fadeOut(200)
			}				
		})
	})
}


function toggle_menu_bar(menu_open){
	// let menu_open = false;
	$('.menu-btn').click(function(){	
		if(!menu_open) {
		  	$(this).addClass('open');
		  	menu_open = true;
		  	$('nav').animate({height: '100vh'});
		  	$('.menu_list').fadeIn(200)
		} else {
			$('nav').animate({height: '60px'});
			$(this).removeClass('open')
			$('.menu_list').fadeOut(200)
		  	menu_open = false;
		}	
	})	
}

function award_more_btn(){
	$('#award2').click(function(){
		window.open('https://www.research.ibm.com/university/awards/faculty_innovation_2018.shtml')
	})
	$('#award3').click(function(){
		window.open('https://www-ch.scu.edu.tw/october/news/8817')
	})
	$('#st1_award').click(function(){
		window.open('https://www-ch.scu.edu.tw/october/news/12137')
	})
	$('#st2_award').click(function(){
		window.open('https://www-ch.scu.edu.tw/october/news/12142')
	})
	$('#st3_award').click(function(){
		window.open('https://www-ch.scu.edu.tw/october/news/9627')
	})
	$('#st4_award').click(function(){
		window.open('https://www.youtube.com/watch?v=FdxjgDE3_-8')
	})
}

function product_more_btn(){
	$('#pd3').click(function(){
		window.open('http://pipi.turinginsight.tech')
	})
	$('#pd4').click(function(){
		window.open('http://thisai.turinginsight.tech')
	})
}

