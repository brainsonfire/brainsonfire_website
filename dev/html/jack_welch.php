<?php $title = 'Brains on Fire | Jack Welch' ?>
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
								<img src="images/individuals/lobby-shots/jack.png" alt="Jack Welch" class="jack active">
							</div>
							<div class="holder02">
								<img src="images/individuals/lobby-shots/jack.png" alt="Jack Welch" class="jack active">
							</div>
						</div>
						<div class="window"></div>
					</div>

					<article class="people-post">
						<div class="row heading">
							<h1>Jack Welch</h1>
							<em class="job-title">Media Boss</em>
						</div>

						<div class="row cols-holder">
							
							<div class="meta large-4 medium-4 small-12 columns">
								<img src="images/individuals/headshots/jack-257x257.jpg" alt="Jack Welch">
							</div>
							<div class="large-8 medium-8 small-12 columns">
								<div class="large-6 medium-12 small-12 columns">
									<ul class="arbitrary-facts">
										<li>Broadcast Journalism Major</li>
										<li>Bluegrass Picker</li>
										<li>Worked in a Textile Mill</li>
										<li>Played in Top 40 Bands</li>
									</ul>
									<p>Jack's experience spans a few decades in this business. He is also is a self-proclaimed "homeboy,” meaning he grew up just down the road in Spartanburg, SC. Keeping with the theme, Jack earned a degree in Journalism with an emphasis in Broadcast Production from the University of South Carolina. Who knows what he did after that, but what we do know is that we’re glad he joined what would one day become Brains on Fire in July of 1988.</p>
								</div>
								<div class="large-6 medium-12 small-12 columns">
									<p>Jack is the man. No, really. In addition to his workload as Media Boss and lending a helping hand on accounts from American Federal to Bon Secours St. Francis Health System to VisitGreenvilleSC, Jack holds the key to all the logistics at Brains on Fire. When he's not in the office, you'll probably find Jack practicing with his bluegrass band or serving on the Greenville Family Partnership board.</p>
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