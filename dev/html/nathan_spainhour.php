
<!DOCTYPE html>
<!--[if IE 9]><html class="no-js ie9 lt-ie10" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" lang="en"><!--<![endif]-->
<head>
    <meta charset="utf-8">
    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->

    <title>Brains on Fire | Nathan Spainhour</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="shortcut icon" href="images/layout/favicon.ico" />
    <link rel="apple-touch-icon" href="images/layout/apple-favicon.png"/>

	<script src="//use.typekit.net/gyt8tgn.js"></script>
	<script>try{Typekit.load();}catch(e){}</script>

    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/foundation.css" />
    <link media="screen, projection" rel="stylesheet" type="text/css" href="css/screen.css" />
    <script src="js/min/modernizr.custom.01216.min.js"></script>
	<!--[if lte IE 8]><link media="screen, projection" rel="stylesheet" type="text/css" href="css/ie8.css" /><![endif]-->
	<!--[if lte IE 8)]><script type="text/javascript" src="js/min/selectivizr.js"></script><![endif]--> 
</head>

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
							<li><a class="previous" href="moe_megan.php"><span>previous individual</span></a></li>
							<li><a class="center" href="individual.php"><span>back to all people</span></a></li>
							<li><a class="next" href="sarah_leitner.php"><span>next individual</span></a></li>
						</ul>
					</div>
				</div>

				<section class="mega-holder">
				
					<div class="mega-banner">
						<div class="photo-container">
							<div class="holder">
								<img src="images/individuals/lobby-shots/nathan.png" alt="Nathan Spainhour" class="nathan active">
							</div>
							<div class="holder02">
								<img src="images/individuals/lobby-shots/nathan.png" alt="Nathan Spainhour" class="nathan active">
							</div>
						</div>
						<div class="window"></div>
					</div>

					<article class="people-post">
						<div class="row heading">
							<h1>Nathan Spainhour</h1>
							<em class="job-title">Design Thinker + Solver of Digital Quandaries</em>
						</div>

						<div class="row cols-holder">

							<div class="meta large-4 medium-4 small-12 columns">
								<img src="images/individuals/headshots/nathan-257x257.jpg" alt="Nathan Spainhour">
								<div class="holder">
									<h3>Find Nathan Online:</h3>
									<ul class="social">
										<li><a href="http://instagram.com/natespain" class="instagram">Instagram</a></li>
										<li><a href="https://twitter.com/nathanspainhour" class="twitter">Twitter</a></li>
										<li><a href="http://www.stringshot.com/" class="blog">Blog</a></li>
										<li><a href="http://www.linkedin.com/in/nathanspainhour" class="linkedin">Linked In</a></li>
									</ul>
								</div>
							</div>

							<div class="large-8 medium-8 small-12 columns">
								<div class="large-6 medium-12 small-12 columns">
									<ul class="arbitrary-facts">
										<li>Photophile</li>
										<li>Loves maps</li>
										<li>Collects cheesy 80s fantasy movies</li>
										<li>Exceptional trivia prowess</li>
									</ul>
									<p>A native to South Carolina, Nathan spent his childhood summers climbing trees and playing King’s Quest, while burning through VHS copies of the Labyrinth and Neverending Story on rainier days.</p>
									<p>During his college years, he lived in Tallahassee, FL and attended the Florida State University bouncing between majors ranging from theatrical scene design to photography. Somehow in the end, he ended up with a degree in graphic design, a girlfriend that would become his wife, and two small dogs that are still sleeping their way through life to this day.</p>
								</div>
								<div class="large-6 medium-12 small-12 columns">
									<p>Nathan began his career in advertising, point-of-purchase, and packaging for Ryobi and Craftsman tools. He also did print work for local orchestras and other non-profits. Somewhere along the way he caught the digital bug, taking the lead on interactive projects for household brands like Hoover Vacuums, Dirt Devil, Sears and Home Depot. Now he’s happily leading the digital efforts at Brains on Fire and working to translate big ideas into functional identities and web applications.</p>
									<p>These days Nathan and his wife, Jess, spend their time pampering their two little pooches, Wicket (named after an Ewok) and Echo. (Did we mention Nathan has a huge Star Wars obsession that still lingers today?) In his spare time Nathan enjoys good wine, new tech, and cool maps.</p>		
								</div>
							</div>
						</div>

					</article>
				</section>

				<div class="direction-nav bottom">
					<div class="row">
						<ul>
							<li><a class="previous" href="moe_megan.php"><span>previous individual</span></a></li>
							<li><a class="center" href="individual.php"><span>back to all people</span></a></li>
							<li><a class="next" href="sarah_leitner.php"><span>next individual</span></a></li>
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