<?php $title = 'Brains on Fire | Shannon Kohn' ?>
<?php include("inc/head.php"); ?>
<body>
	<!--[if lte IE 8]>
		<p class="chromeframe"> <strong>You are using an outdated browser.</strong><br /> <br />Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
	<![endif]-->
	<div class="off-canvas-wrap" data-offcanvas>
		<div class="inner-wrap">

			<?php include("inc/header.php"); ?>
			
			<main id="main" class="individual-detail">

				<div class="direction-nav top">
					<div class="row">
						<ul>
							<li><a class="previous" href="sean_madden.php"><span>previous individual</span></a></li>
							<li><a class="center" href="individual.php"><span>back to all people</span></a></li>
							<li><a class="next" href="wicket.php"><span>next individual</span></a></li>
						</ul>
					</div>
				</div>

				<section class="mega-holder">
				
					<div class="mega-banner">
						<div class="photo-container">
							<div class="holder">
								<img src="images/individuals/lobby-shots/shannon.png" alt="Shannon Kohn" class="shannon active">
							</div>
							<div class="holder02">
								<img src="images/individuals/lobby-shots/shannon.png" alt="Shannon Kohn" class="shannon active">
							</div>
						</div>
						<div class="window"></div>
					</div>

					<article class="people-post">
						<div class="row heading">
							<h1>Shannon Kohn</h1>
							<em class="job-title">Velvet Hammer</em>
						</div>

						<div class="row cols-holder">

							<div class="meta large-4 medium-4 small-12 columns">
								<img src="images/individuals/headshots/shannon-257x257.jpg" alt="Shannon Kohn">
								<div class="holder">
									<h3>Find Shannon Online:</h3>
									<ul class="social">
										<li><a href="https://twitter.com/FoodieShannon" class="twitter">Twitter</a></li>
										<li><a href="http://instagram.com/FoodieShannon" class="instagram">Instagram</a></li>
										<li><a href="http://www.linkedin.com/pub/shannon-kohn/11/930/546" class="linkedin">Linked In</a></li>
									</ul>
								</div>
							</div>

							<div class="large-8 medium-8 small-12 columns">
								<div class="large-6 medium-12 small-12 columns">
									<ul class="arbitrary-facts">
										<li>Anderson University art grad</li>
										<li>Card-carrying volleyball Mamma</li>
										<li>Just give the girl a microphone</li>
										<li>Nationally recognized recipe creator</li>
									</ul>									
									<p>Shannon is on her second tour of duty with Brains on Fire (they always find their way back home, don’t they?) after taking a few years off for domestic endeavors (a.k.a. mommy time) and to follow a few culinary dreams.</p>
									<p>Born in Savannah, GA, and raised on the mean streets of Orlando, FL (think “The Outsiders” meets “Pretty in Pink”), Shannon came to South Carolina to attend college in 1990 and never left. She says it’s because of our wonderful weather and day-trip proximity to both the mountains and the beach, but we know it’s because her dream Guy (we’re not kidding, his name is Guy) was up here waiting to meet and fall in love with her. The pair now play house with their two bright, articulate, and athletic kids, Tanner and Loftin.</p>
								</div>
								<div class="large-6 medium-12 small-12 columns">
									<p>Professionally, Shannon has been involved with the delivery of creative expression since graduating with honors from Anderson University. Copywriting. Graphic Design. Photography. The woman’s multi-talented and mucho-terrific…and that’s why we love her, folks.</p>
									<p>When Shannon’s not being a vocal ambassador for her clients’ brands, or helping build, elevate, and guide some of the most amazing communities on the face of the planet, she can be found creating home-cooked, prize-winning recipes or traveling the Southeast on a quest to fit in as many of her kids' sports games as possible into any given weekend.</p>	
								</div>
							</div>
						</div>

					</article>
				</section>

				<div class="direction-nav bottom">
					<div class="row">
						<ul>
							<li><a class="previous" href="sean_madden.php"><span>previous individual</span></a></li>
							<li><a class="center" href="individual.php"><span>back to all people</span></a></li>
							<li><a class="next" href="wicket.php"><span>next individual</span></a></li>
						</ul>
					</div>
				</div>

			</main>

			<?php include("inc/footer.php"); ?>

		</div>
	</div>

	<?php include("inc/js.php"); ?>

	<script type="text/javascript" src="js/min/jquery.individuals.min.js"></script>

	<!-- TEMP ADD CURRENT CLASS TO NAVIGATION -->
	<script>
		$(document).ready(function () {
			$('.primary-nav li:eq(4)').addClass('current');
		});
	</script>

</body>
</html>