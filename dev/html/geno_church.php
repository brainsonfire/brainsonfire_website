<?php $title = 'Brains on Fire | Geno Church' ?>
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
							<li><a class="previous" href="greg_ramsey.php"><span>previous individual</span></a></li>
							<li><a class="center" href="individual.php"><span>back to all people</span></a></li>
							<li><a class="next" href="john_moore.php"><span>next individual</span></a></li>
						</ul>
					</div>
				</div>

				<section class="mega-holder">
				
					<div class="mega-banner">
						<div class="photo-container">
							<div class="holder">
								<img src="images/individuals/lobby-shots/geno.png" alt="Geno Church" class="geno active">
							</div>
							<div class="holder02">
								<img src="images/individuals/lobby-shots/geno.png" alt="Geno Church" class="geno active">
							</div>
						</div>
						<div class="window"></div>
					</div>

					<article class="people-post">
						<div class="row heading">
							<h1>Geno Church</h1>
							<em class="job-title">WOM Cupid</em>
						</div>

						<div class="row cols-holder">

							<div class="meta large-4 medium-4 small-12 columns">
								<img src="images/individuals/headshots/geno-257x257.jpg" alt="Geno Church">
							</div>

							<div class="large-8 medium-8 small-12 columns">
								<div class="large-6 medium-12 small-12 columns">
									<ul class="arbitrary-facts">
										<li>Never washes his selvage denim</li>
										<li>Has been to Disney World 35 times and counting</li>
										<li>Moonshine and bootlegging run on both sides of his family</li>
										<li>Has been known to eat a candy bar on the treadmill</li>
										<li>You’ll find him snapping photos on the sidelines of Furman Football games on Saturdays</li>
										<li>Role model is Peter Pan</li>
									</ul>
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
							<li><a class="previous" href="greg_ramsey.php"><span>previous individual</span></a></li>
							<li><a class="center" href="individual.php"><span>back to all people</span></a></li>
							<li><a class="next" href="john_moore.php"><span>next individual</span></a></li>
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