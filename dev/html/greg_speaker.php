<?php $title = 'Brains on Fire | Speaking | Greg Cordell' ?>
<?php include("inc/head.php"); ?>
<body>
	<!--[if lte IE 8]>
		<p class="chromeframe"> <strong>You are using an outdated browser.</strong><br /> <br />Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
	<![endif]-->
	<div class="off-canvas-wrap" data-offcanvas>
		<div class="inner-wrap">

			<?php include("inc/header.php"); ?>
			
			<main id="main" class="speaker-detail inner-pages">

				<div class="direction-nav top">
					<div class="row">
						<ul>
							<li><a class="previous" href="geno_speaker.php"><span>previous speaker</span></a></li>
							<li><a class="center" href="speaking.php"><span>back to speakers</span></a></li>
							<li><a class="next" href="robbin_speaker.php"><span>next speaker</span></a></li>
						</ul>
					</div>
				</div>

				<div id="speaker-banner" class="white-text main-photo">
					<img src="images/speaking/greg_banner.jpg" alt="Greg Cordell">
					<div class="half-block right">
						<p>“Be famous for the people who love you for the way you love them.”</p>
						<a href="speaking.php#form" class="button btn-orange">book greg now</a>
					</div>
				</div>

				<section class="mega-holder">

					<article class="people-post">
						<div class="row heading">
							<h1>Greg Cordell</h1>
						</div>

						<div class="row cols-holder">

							<div class="meta large-4 medium-4 small-12 columns">
								<img src="images/individuals/headshots/cordell-257x257.jpg" alt="Greg Cordell">	
							</div>

							<div class="large-8 medium-8 small-12 columns">
								<div class="large-6 medium-12 small-12 columns">
									<p>Cordell (we think he’s been going by his last name longer than he’s been going by his first) was born and raised in South Carolina and stuck with that theme by attending USC – that’s The University of South Carolina out here on the East Coast. He got involved in the ad biz soon thereafter and never looked back. Concepter, writer, art director, screenwriter – the guy is a superhero who has done it all.</p>
									<p>At Brains on Fire, Greg is not only a principal, but he’s also our conduit for inspirational energy. (We don’t call him our Chief Inspiration Officer for nothing.)</p>
									<p>He's a visionary. A philosopher. He gets employees and clients excited about what could be and then finds ways to make it happen.</p>
								</div>
								<div class="large-6 medium-12 small-12 columns">
									<p>Greg is constantly figuring out how to take the tired and make it inspired - across all industries and brands. He has developed creative solutions for national brands that include Coca-Cola, Yakima, BMW, Don Pablo's Mexican Restaurants, Applebee’s, the brands of Confluence Watersports and Best Buy. His work has even been used as the backdrop for an American President’s War on Drugs and added crazy-big numbers to our clients’ bottom lines. In between saving the world one creative solution at a time, Cordell somehow managed to squeeze in co-authoring two books, “Brains On Fire: Igniting Powerful, Sustainable Word of Mouth Movements,” and “The Passion Conversation: Understanding, Sparking and Sustaining Word of Mouth Marketing.” Like we said…he’s a superhero. </p>
								</div>
							</div>
						</div>

					</article>
				</section>

				<div class="direction-nav bottom">
					<div class="row">
						<ul>
							<li><a class="previous" href="geno_speaker.php"><span>previous speaker</span></a></li>
							<li><a class="center" href="speaking.php"><span>back to speakers</span></a></li>
							<li><a class="next" href="robbin_speaker.php"><span>next speaker</span></a></li>
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
			$('.secondary-nav li:eq(2)').addClass('current');
		});
	</script>

</body>
</html>