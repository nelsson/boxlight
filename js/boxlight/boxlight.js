$(function(){
	$.fn.boxlight = function(parametros) {

		//selector
		var selector = $(this);


		// tipo de lightbox
		// tipo = parametros.type;
		// console.log(tipo);

		youtube = "video-youtube"
		vimeo = "video-vimeo"
		html = "video-html"

		// id lanzador boxlight


		//contenedores
		// $("body").append("<div class='box-overlay '></div>");
		$("body").append("<div class='wrapp-box'><div class='box-overlay '></div><div class='wrapp-box-inner'></div></div>");
		//contenedores

		//close boxlight
		// if (tipo == youtube) {
		// 	$('<span class="close-boxlight"></span').appendTo('.wrapp-box-inner');
		// }else{
		// 	$('<span class="close-boxlight"></span').appendTo('.boxlight');
		// };

		$('body').on('click', '.close-boxlight', function(event) {
			event.preventDefault();
			/* Act on the event */
			selector = $(this);
			remove_cc = selector.closest('.wrapp-box').attr('custom-class');
			console.log(remove_cc);

			$('.wrapp-box.active .boxlight').appendTo('body');
			//removiendo customclass

			// console.log(remove_cc);
			vacio =false;
			// console.log(vacio);
			if (!remove_cc == vacio) {
				$('.wrapp-box').removeClass(remove_cc);
				$('.wrapp-box').removeAttr('custom-class');
			}


			$('.box-overlay').removeClass('active');
			$('.wrapp-box').removeClass('active');
			$('.wrapp-box').removeClass('boxlight-h');
			$('body').removeClass('boxlight-overflow')



			if ( $('.boxlight-youtube').length ) {

				$('.wrap-boxlight-youtube').remove();

			}else{

			};

			$('.close-boxlight').remove();

		});
		$('.box-overlay').click(function(event) {
			$('.close-boxlight').click();
		});


		//active overlay and boxlight
		selector.click(function(event) {
			event.preventDefault()
			tipoin = $(this).attr('data-type');
			// console.log(tipoin);


			t = $(this);
			openbox = t.attr('href');
			customclass = t.attr('data-custom-class');
			// console.log(customclass);
			$('.box-overlay').addClass('active');


			if (tipoin === youtube) {
					$('<span class="close-boxlight"></span').appendTo('.wrapp-box-inner');
					// capturando la id del videoyoutube
					var url = openbox;
					regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
					videoid = url.match(regExp);

					if(videoid != null) {
						
						var url ="https://www.youtube.com/embed/"
						var id_video =videoid[7]
						$('<div class="wrap-boxlight-youtube"><div class="youtube-inner"><iframe class="boxlight-youtube" width="960" height="720" frameborder="0" allowfullscreen></div></div>').appendTo('.wrapp-box-inner');
						$('.wrapp-box').addClass('active');
						$('.boxlight-youtube').attr('src', url+id_video+'?rel=0&autoplay=1');
						$('.close-boxlight').appendTo('.wrap-boxlight-youtube');

					} else {

						console.log("The youtube url is not valid.");

					}
					// capturando la id del videoyoutube



				// console.log(iframe);
			}
			if (tipoin === vimeo) {
					$('<span class="close-boxlight"></span').appendTo('.wrapp-box-inner');
					// capturando la id del videoyoutube
					var url = openbox;
					regExp = /https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/;
					videoid = url.match(regExp);
					console.log(videoid[3]);

					if(videoid != null) {
						var $iframe = '<iframe width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>';
						var url ="https://player.vimeo.com/video/"
						var id_video =videoid[3]
						$('<div class="wrap-boxlight-youtube"><div class="youtube-inner"><iframe class="boxlight-youtube" width="853" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></div></div>').appendTo('.wrapp-box-inner');
						$('.wrapp-box').addClass('active');
						$('.boxlight-youtube').attr('src', url+id_video+'?color=ff0179&title=0&byline=0&portrait=0&autoplay=1&loop=1');
						$('.close-boxlight').appendTo('.wrap-boxlight-youtube');

					} else {

						console.log("The vimeo url is not valid.");

					}
					// capturando la id del videoyoutube
			}
			if (tipoin === html) {

				$('<span class="close-boxlight"></span').appendTo('.wrapp-box-inner');
				
				// capturando la id del videoyoutube
				var url = openbox;
				videoid = url;
				if(videoid != null) {
					$('<div class="wrap-boxlight-youtube"><div class="youtube-inner"><video width="853" type="video/mp4" autoplay height="480" class="boxlight-youtube" controls></video></div></div>').appendTo('.wrapp-box-inner');
					$('.wrapp-box').addClass('active');
					$('.boxlight-youtube').attr('src', videoid);
					$('.close-boxlight').appendTo('.wrap-boxlight-youtube');
					console.log(videoid);



				}else{
					console.log("The html url is not valid.");
				}





			}
			





			else{
				$('<span class="close-boxlight"></span').appendTo('.boxlight');
				//lightbox de contenido
				openboxid = openbox.replace('#','');
				$('.boxlight[id="'+openboxid+'"]').appendTo('.wrapp-box-inner');
				$('.boxlight[id="'+openboxid+'"]').closest('.wrapp-box').addClass('active');

				//add customclass
				$('.boxlight[id="'+openboxid+'"]').closest('.wrapp-box').addClass(customclass).attr('custom-class', customclass);
				//add customclass

				// scrool for mobile
				heightscreen = $(window).height();
				content = $('.boxlight[id="'+openboxid+'"]');
				element = $('.boxlight[id="'+openboxid+'"]').closest('.wrapp-box')
				elementh = content.outerHeight();

				if (elementh > heightscreen) {
					element.addClass('boxlight-h');
					$('body').addClass('boxlight-overflow')
				}
			}

			//lightbox youtube

		});
	}
});
