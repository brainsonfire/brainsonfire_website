<?php $title = 'Brains on Fire | Cathy Harrison' ?>
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
							<li><a class="previous" href="brandy_amidon.php"><span>previous individual</span></a></li>
							<li><a class="center" href="individual.php"><span>back to all people</span></a></li>
							<li><a class="next" href="emily_everhart.php"><span>next individual</span></a></li>
						</ul>
					</div>
				</div>

				<section class="mega-holder">
				
					<div class="mega-banner">
						<div class="photo-container">
							<div class="holder">
								<img src="images/individuals/lobby-shots/cathy.png" alt="Cathy Harrison" class="cathy active">
							</div>
							<div class="holder02">
								<img src="images/individuals/lobby-shots/cathy.png" alt="Cathy Harrison" class="cathy active">
							</div>
						</div>
						<div class="window"></div>
					</div>

					<article class="people-post">
						<div class="row heading">
							<h1>Cathy Harrison</h1>
							<em class="job-title">Account Shepherd</em>
						</div>

						<div class="row cols-holder">

							<div class="meta large-4 medium-4 small-12 columns">
								<img src="images/individuals/headshots/cathy-257x257.jpg" alt="Cathy Harrison">
							</div>

							<div class="large-8 medium-8 small-12 columns">
								<div class="large-6 medium-12 small-12 columns">
									<ul class="arbitrary-facts">
										<li>BS in Communication, Minor in English</li>
										<li>Straight Talker</li>
										<li>Full-Time Weekend Sports Spectator</li>
										<li>Buys Wine Based Solely on the Design of the Label</li>
									</ul>														
									<p>There aren’t many people around here who can remember Brains on Fire without Cathy, but she kept plenty busy before she graced our halls. A Florida native, Cathy graduated from University of North Carolina Greensboro. She married a swell guy, and spent some time working as a Media Director and Account Director, getting some serious experience under her belt.</p>
								</div>
								<div class="large-6 medium-12 small-12 columns">
									<p>When Cathy arrived at Brains on Fire, she was looking for a more collaborative atmosphere than she had found in her previous work lives. Cathy’s years at Brains on Fire has surpassed a baker’s dozen, so it’s probably fair to say she found more than that collaborative atmosphere… she found a home. At Brains on Fire, Cathy has shepherded clients including Bon Secours St. Francis Health System, Find Great People and Rage Against the Haze, to name only a few. And somehow she still manages to play Super Mom to Kate and Sam, two of the busiest kids on the planet.</p>
								</div>
							</div>
						</div>

					</article>
				</section>

				<div class="direction-nav bottom">
					<div class="row">
						<ul>
							<li><a class="previous" href="brandy_amidon.php"><span>previous individual</span></a></li>
							<li><a class="center" href="individual.php"><span>back to all people</span></a></li>
							<li><a class="next" href="emily_everhart.php"><span>next individual</span></a></li>
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