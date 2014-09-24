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
						<video id="homepagevid" poster="images/home/ram_at_his_desk.jpg" preload autoplay loop>
							<source type="video/mp4" src="videos/ram.mp4" />
							<source type="video/webm" src="videos/ram.webm" />
							<source type="video/ogg" src="videos/ram.ogv" />
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

				<section class="section-newsletter-band">
					<div class="row">
						<!-- Begin MailChimp Signup Form -->
						<div id="mc_embed_signup" class="holder">
							<h1>Sign Up For Our Monthly Newsletter</h1>
							<h2>Delicious nuggets of news with none of the spam.</h2>
									
							<form action="//brainsonfire.us3.list-manage.com/subscribe/post?u=4e6c3f5bcfa5afd161f356929&amp;id=0a1ea420f4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate form-contact cf" target="_blank" novalidate>
								<div class="mc-field-group">
									<label for="mce-EMAIL">Email Address </label>
									<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
								</div>
								<div id="mce-responses" class="clear">
									<div class="response" id="mce-error-response" style="display:none"></div>
									<div class="response" id="mce-success-response" style="display:none"></div>
								</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
								<div style="position: absolute; left: -5000px;">
									<input type="text" name="b_4e6c3f5bcfa5afd161f356929_0a1ea420f4" tabindex="-1" value="">
								</div>
								<div class="clear mc-submit-btn">
									<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button btn-green">
								</div>
							</form>

						</div>
						<!--End mc_embed_signup-->
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