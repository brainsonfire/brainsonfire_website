<?php $title = 'Brains on Fire | Speaking | Geno Church' ?>
<?php include("inc/head.php"); ?>
<body>
	<!--[if lte IE 8]>
		<p class="chromeframe"> <strong>You are using an outdated browser.</strong><br /> <br />Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
	<![endif]-->
	<div class="off-canvas-wrap" data-offcanvas>
		<div class="inner-wrap">

			<?php include("inc/header.php"); ?>
			
			<main id="main" class="speaker-detail">

				<div class="direction-nav top">
					<div class="row">
						<ul>
							<li><a class="previous" href="robbin_speaker.php"><span>previous speaking</span></a></li>
							<li><a class="center" href="speaking.php"><span>back to speakers</span></a></li>
							<li><a class="next" href="john_speaker.php"><span>next speaker</span></a></li>
						</ul>
					</div>
				</div>

				<div id="speaker-banner" class="white-text main-photo">
					<img src="images/speaking/geno_banner.jpg" alt="Geno Church">
					<div class="half-block right">
						<p>“A brand is not a label, it's a lens. People want to see what's happening on the other side.”</p>
						<a href="speaking.php#form" class="button btn-orange">book geno now</a>
					</div>
				</div>

				<section class="mega-holder">
				
					<article class="people-post">
						<div class="row heading">
							<h1>Geno Church</h1>
						</div>

						<div class="row cols-holder">

							<div class="meta large-4 medium-4 small-12 columns">
								<img src="images/individuals/headshots/geno-257x257.jpg" alt="Geno Church">
							</div>

							<div class="large-8 medium-8 small-12 columns">
								<div class="large-6 medium-12 small-12 columns">
									<p>Geno is the Word of Mouth Inspiration Officer at Brains on Fire, but he considers himself more of a “WOM Cupid” and a pathfinder for our clients.</p>
									<p>Geno shines at uncovering the DNA of sustainable word of mouth movements, and has walked the path with brands and organizations including Fiskars Brands, the National Center for Families Learning, Anytime Fitness, Love146 and The Environmental Defense Fund.</p>
								</div>
								<div class="large-6 medium-12 small-12 columns">
									<p>Geno is also a highly sought-after speaker, and relishes the opportunity to share his thoughts and spark conversation with brands and organizations of all sizes. He has been a presenter and a workshop facilitator at events hosted by the Public Relations Society of America (PRSA), Public Relations Student Society of America (PRSSA), Blackbaud BBCON (Australia), Influence Session Sydney, and the Word of Mouth Marketing Association, to name a few. He is widely quoted in blogs and co-author of two books, “Brains On Fire: Igniting Powerful, Sustainable Word of Mouth Movements,” and “The Passion Conversation: Understanding, Sparking and Sustaining Word of Mouth Marketing.” Geno is quoted in print on a regular basis, and thanks to his southern charm, is one of the nicest guys you'll ever meet.</p>
								</div>
							</div>
						</div>

					</article>
				</section>

				<div class="direction-nav bottom">
					<div class="row">
						<ul>
							<li><a class="previous" href="robbin_speaker.php"><span>previous speaker</span></a></li>
							<li><a class="center" href="speaking.php"><span>back to speakers</span></a></li>
							<li><a class="next" href="john_speaker.php"><span>next speaker</span></a></li>
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