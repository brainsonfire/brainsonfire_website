<?php $title = 'Brains on Fire | Sarah Leitner' ?>
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
							<li><a class="previous" href="nathan_spainhour.php"><span>previous individual</span></a></li>
							<li><a class="center" href="individual.php"><span>back to all people</span></a></li>
							<li><a class="next" href="sean_madden.php"><span>next individual</span></a></li>
						</ul>
					</div>
				</div>

				<section class="mega-holder">
				
					<div class="mega-banner">
						<div class="photo-container">
							<div class="holder">
								<img src="images/individuals/lobby-shots/sarah-comingsoon.png" alt="Sarah Leitner" class="sarah active">
							</div>
							<div class="holder02">
								<img src="images/individuals/lobby-shots/sarah-comingsoon.png" alt="Sarah Leitner" class="sarah active">
							</div>
						</div>
						<div class="window"></div>
					</div>

					<article class="people-post">
						<div class="row heading">
							<h1>Sarah Leitner</h1>
							<em class="job-title">Account Wrangler + Community Shepherd</em>
						</div>

						<div class="row cols-holder">

							<div class="meta large-4 medium-4 small-12 columns">
								<img src="images/individuals/headshots/sarah-257x257.jpg" alt="Sarah Leitner">
								<div class="holder">
									<h3>Find Sarah Online:</h3>
									<ul class="social">
										<li><a href="https://twitter.com/saraheeel" class="twitter">Twitter</a></li>
										<li><a href="http://instagram.com/saraheeel" class="instagram">Instagram</a></li>
									</ul>
								</div>
							</div>

							<div class="large-8 medium-8 small-12 columns">
								<div class="large-6 medium-12 small-12 columns">
									<ul class="arbitrary-facts">
										<li>Pescatarian</li>
										<li>Taco Lover</li>
										<li>HGTV Addict</li>
									</ul>
									<p>What do you get when you cross a native South Carolinian with a hockey fan and add a dash of corgi? The sensational Sarah Leitner, of course.</p>
									<p>After graduating from the University of South Carolina School of Journalism and Mass Communications, Sarah headed into the wonky-yet-wonderful world of advertising. Her experience runs the gamut from project management for tiny local shops to the internal ad agency for a multinational manufacturer of power tools. She even spent some time working for Greenville’s professional hockey team. (Go Road Warriors!)</p>
								</div>
								<div class="large-6 medium-12 small-12 columns">
									<p>When she takes a break from creating remarkable customer experiences, you’ll find Sarah enthusiastically cheering for the Buffalo Sabres and Tampa Bay Lightning alongside her chemist husband and dogs, Bear the lab mix and Gerbe the corgi (named after the shortest hockey player in the NHL.)</p>	
								</div>
							</div>
						</div>

					</article>
				</section>

				<div class="direction-nav bottom">
					<div class="row">
						<ul>
							<li><a class="previous" href="nathan_spainhour.php"><span>previous individual</span></a></li>
							<li><a class="center" href="individual.php"><span>back to all people</span></a></li>
							<li><a class="next" href="sean_madden.php"><span>next individual</span></a></li>
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