<?php $title = 'Brains on Fire | Megan Byrd' ?>
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
								<img src="images/individuals/lobby-shots/megan.png" alt="Megan Byrd" class="megan active">
							</div>
							<div class="holder02">
								<img src="images/individuals/lobby-shots/megan.png" alt="Megan Byrd" class="megan active">
							</div>
						</div>
						<div class="window"></div>
					</div>

					<article class="people-post">
						<div class="row heading">
							<h1>Megan Byrd</h1>
							<em class="job-title">Whipcracker</em>
						</div>

						<div class="row cols-holder">

							<div class="meta large-4 medium-4 small-12 columns">
								<img src="images/individuals/headshots/megan-257x257.jpg" alt="Megan Byrd">
							</div>

							<div class="large-8 medium-8 small-12 columns">
								<div class="large-6 medium-12 small-12 columns">
									<ul class="arbitrary-facts">
										<li>Pet Portrait Artist</li>
										<li>Twin (the younger)</li>
										<li>Mother of Patrick</li>
										<li>Color organized closet</li>
									</ul>
									<p>Our Sherpa of Traffic was born and raised just to the south in Macon, Georgia. A graduate of Wofford College, Megan worked for an online magazine and later an internet company in Atlanta where she learned how to establish order in a world of creative chaos. (Fun fact: Megan has been voted MVP everywhere she has ever worked.) </p> 
								</div>
								<div class="large-6 medium-12 small-12 columns">
									<p>In 2005, Brains on Fire was lucky enough to snag her. She returned to Greenville with her husband Mitchell, and their son Patrick joined our extended tribe in 2010. As the Director of Traffic and Production, Megan oversees the timelines and resources for every project that comes through our doors. She is a master of schedules and keeps our team in line and on track. Robbin likes to call Megan our "Chief of Staff," and there is no doubt that it takes a good chief to keep Brains on Fire running like a well-oiled machine. Don't let the infectious smile fool you; Megan cracks the whip around here! Thankfully, she has a true talent for telling us what to do while somehow making it feel like it was our idea all along. </p>
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