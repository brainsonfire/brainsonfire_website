<?php $title = 'Brains on Fire | Wicket' ?>
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
							<li><a class="previous" href="#dummy">previous individual</a></li>
							<li><a class="center" href="#dummy">back to all people</a></li>
							<li><a class="next" href="#dummy">next individual</a></li>
						</ul>
					</div>
				</div>

				<section class="mega-holder">
				
					<div class="mega-banner">
						<div class="photo-container">
							<div class="holder">
								<img src="images/individuals/lobby-shots/wicket.png" alt="Wicket" class="wicket active">
							</div>
							<div class="holder02">
								<img src="images/individuals/lobby-shots/wicket.png" alt="Wicket" class="wicket active">
							</div>
						</div>
						<div class="window"></div>
					</div>

					<article class="people-post">
						<div class="row heading">
							<h1>Wicket</h1>
							<em class="job-title">Little Yorkie with big ears</em>
						</div>

						<div class="row cols-holder">

							<div class="meta large-4 medium-4 small-12 columns">
								<img src="images/individuals/headshots/wicket-257x257.jpg" alt="Wicket">
							</div>

							<div class="large-8 medium-8 small-12 columns">
								<div class="large-6 medium-12 small-12 columns">
									<ul class="arbitrary-facts">
										<li>Ballet dancer</li>
										<li>Uncle invented the term "cyberspace"</li>
										<li>Has a standing breakfast date with her family every Saturday</li>
									</ul>
									<p>Have a problem? Alison can fix it. Seriously. AQ grew up in Greenville, South Carolina, receiving a degree in Art Education from the University of Georgia and a degree in Graphic design from Ringling School of Art. Pretty impressive, eh?</p>
								</div>
								<div class="large-6 medium-12 small-12 columns">
									<p>Most of the time Wicket sits around during the day, lounging in the sun and taking naps. Occasionally though, he'll grace "The Firesphere" with his ever inquisitive stare and proceed to brighten everyone's day. Every great team deserves an equally great team dog, right?</p>
								</div>
							</div>
						</div>

					</article>
				</section>

				<div class="direction-nav top">
					<div class="row">
						<ul>
							<li><a class="previous" href="#dummy">previous individual</a></li>
							<li><a class="center" href="#dummy">back to all people</a></li>
							<li><a class="next" href="#dummy">next individual</a></li>
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