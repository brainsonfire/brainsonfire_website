<?php $title = 'Brains on Fire | Word of Mouth Marketing and Movement Igniting Company' ?>
<?php include("inc/head.php"); ?>
<body>
	<!--[if lte IE 7]>
		<p class="chromeframe"> <strong>You are using an outdated browser.</strong><br /> <br />Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
	<![endif]-->

	<div class="off-canvas-wrap" data-offcanvas>
		<div class="inner-wrap">
		
			<?php include("inc/header.php"); ?>
			
			<main id="main" class="home">
			
				<div id="home-video" class="WindowHeight" style="opacity: 0;">
					<div class="videoHolder">
						<video id="homepagevid" preload autoplay loop>
							<source type="video/mp4" src="videos/ram.mp4">
							<source type="video/webm" src="videos/ram.webm">
							<source type="video/ogg" src="videos/ram.ogv">
						</video>
					</div>
				</div>
				
				<!-- da se proveri za ovu sekciju da li ide slider ili ne -->
				<section id="home" class="WindowHeight">
					<div class="row">
						<div class="txt">
							<h1 class="title">We can help your organizations<br> ignite a powerful, sustainable<br> word of mouth movements.</h1>
							<a href="#dummy" class="button btn-blue left">we’ll teach you how</a>
							<a href="#dummy" class="button btn-green left">or build it with you</a>
						</div>
					</div>
					<a href="#checkpoint1" class="btn-down btn-scroll">Scroll down</a>
				</section>
				
				<section id="checkpoint1" class="section-work">
					<div class="row">
						<h1>Some of our work.</h1>
						<p>Be Famous For The People Who Love You... For The Way You Love Them.</p>
						<ul class="row works-list">
							<li class="large-4 medium-4 small-12 columns"><a href="love_146.php"><img src="images/home/love_146.jpg" alt="Love 146"></a></li>
							<li class="large-4 medium-4 small-12 columns"><a href="#dummy"><img src="images/home/fr.jpg" alt="Fitness Rebellion"></a></li>
							<li class="large-4 medium-4 small-12 columns"><a href="heroes_in_recovery.php"><img src="images/home/heroes.jpg" alt="Heroes in Recovery"></a></li>
						</ul>
						<div class="btn-holder">
							<a class="button btn-ico btn-orange" href="case_studies.php">View all of our case studies</a>
						</div>
					</div>
				</section>

				<section id="tagboard-wrap">
					<div class="row">
						<!-- Tagboard widget - start -->
						<div id="tagboard-embed"></div>
						<script>var tagboardOptions = {tagboard:"firesphere/188415", postCount: 16, mobilePostCount: 6};</script>
						<script src="https://tagboard.com/public/js/embed.js"></script>
						<!-- Tagboard widget - end -->
					</div>
				</section>

			</main>

			<?php include("inc/footer.php"); ?>
			
		</div>
	</div>

	<?php include("inc/js.php"); ?>

	<script>
		$(document).ready(function () {
			// TEMP ADD CURRENT CLASS TO NAVIGATION
			$('.primary-nav li:first').addClass('current');
			
		    var WH = $(window).height();
		    
		    if($(window).height() < 640) {
		    	$(".WindowHeight").height(WH + 83);
		    } else {
		    	$(".WindowHeight").height(WH);
		    }
		    
		});

		$(window).resize(function() {

		    var WH = $(window).height();

		    if($(window).height() < 640) {
		    	$(".WindowHeight").height(WH + 83);
		    } else {
		    	$(".WindowHeight").height(WH);
		    }

		});

	</script>

</body>
</html>