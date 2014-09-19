<?php $title = 'Brains on Fire | Emily Everhart' ?>
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
								<img src="images/individuals/lobby-shots/emily.png" alt="Emily Everhart" class="emily active">
							</div>
							<div class="holder02">
								<img src="images/individuals/lobby-shots/emily.png" alt="Emily Everhart" class="emily active">
							</div>
						</div>
						<div class="window"></div>
					</div>

					<article class="people-post">
						<div class="row heading">
							<h1>Emily Everhart</h1>
							<em class="job-title">Gentle Nudger + Account Executive</em>
						</div>

						<div class="row cols-holder">

							<div class="meta large-4 medium-4 small-12 columns">
								<img src="images/individuals/headshots/emily-257x257.jpg" alt="Emily Everhart">
								<div class="holder">
									<h3>Find Emily Online:</h3>
									<ul class="social">
										<li><a href="http://www.pinterest.com/ems01224/" class="pinterest">Pinterest</a></li>
										<li><a href="http://instagram.com/ems01224/" class="instagram">Instagram</a></li>
										<li><a href="http://www.linkedin.com/in/emilykeverhart" class="linkedin">Linked In</a></li>
									</ul>
								</div>
							</div>

							<div class="large-8 medium-8 small-12 columns">
								<div class="large-6 medium-12 small-12 columns">
									<ul class="arbitrary-facts">
										<li>Chapstick Addict</li>
										<li>Middle Child</li>
										<li>Dog Rescuer</li>
									</ul>
									<p>Emily helps hold down the Brains on Fire fort as one of our Account Executives, which keeps her busy navigating details, keeping clients happy and extinguishing or fanning fires as needed. Originally hired as a Community Manager, Emily has had the privilege of working with many of Brains on Fire’s communities (Heroes in Recovery, Tinkernation, DeVry University, Wonderopolis, just to name a few) before fully jumping into the AE pond.</p>
									<p>Emily’s blood runneth orange, as a Tigers’ fan and Clemson University grad. She picked up two degrees during her time at Clemson: a BA in Communications with a focus in Media and a BA in Modern Languages (Spanish)…just for fun.</p>
								</div>
								<div class="large-6 medium-12 small-12 columns">
									<p>Emily came to Brains with a background in PR, public education and event planning, having mainly worked with nonprofits and government agencies in the Upstate. She channels that eclectic experience in her ever-evolving role at Brains, and loves pinch hitting on any project, especially the crafty ones. (Pinterest addict over here!)</p>
									<p>Emily is an Upstate native that enjoyed a minor detour through Europe as kid, and now resides in Easley with her hubby and a small pack of large dogs. When she’s not vacuuming up after her huskies, Emily also loves to cook. Ask her about Emeals at your own risk.</p>			
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