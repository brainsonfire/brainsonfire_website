
<!DOCTYPE html>
<!--[if IE 9]><html class="no-js ie9 lt-ie10" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" lang="en"><!--<![endif]-->
<head>
    <meta charset="utf-8">
    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->

    <title>Brains on Fire | Mary Susan Henderson</title>
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
	<!--[if lte IE 8]><script type="text/javascript" src="js/min/selectivizr.js"></script><![endif]--> 
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
							<li><a class="previous" href="jack_welch.php"><span>previous individual</span></a></li>
							<li><a class="center" href="individual.php"><span>back to all people</span></a></li>
							<li><a class="next" href="moe_megan.php"><span>next individual</span></a></li>
						</ul>
					</div>
				</div>

				<section class="mega-holder">
				
					<div class="mega-banner">
						<div class="photo-container">
							<div class="holder">
								<img src="images/individuals/lobby-shots/marysusan.png" alt="Mary Susan Henderson" class="marysusan active">
							</div>
							<div class="holder02">
								<img src="images/individuals/lobby-shots/marysusan.png" alt="Mary Susan Henderson" class="marysusan active">
							</div>
						</div>
						<div class="window"></div>
					</div>

					<article class="people-post">
						<div class="row heading">
							<h1>Mary Susan Henderson</h1>
							<em class="job-title">Office Mom + Brains on Fire Detective</em>
						</div>

						<div class="row cols-holder">
							<div class="meta large-4 medium-4 small-12 columns">
								<img src="images/individuals/headshots/marysusan-257x257.jpg" alt="Mary Susan Henderson">
							</div>

							<div class="large-8 medium-8 small-12 columns">
								<div class="large-6 medium-12 small-12 columns">
									<ul class="arbitrary-facts">
										<li>Crime show enthusiast</li>
										<li>Sews her own clothes</li>
										<li>Art history lover</li>
									</ul>
									<p>A native of the Upstate, Mary Susan grew up in the micropolis of Laurens, South Carolina. She eventually ventured to the “big city” to attend Furman University, where she discovered a love of art that inspired her to make it her degree.</p>
								</div>
								<div class="large-6 medium-12 small-12 columns">
									<p>Post-graduation, Mary Susan traded in the rolling hills of the upstate for coastline, but the charms of her native stomping grounds ultimately brought her back home. (And that’s when Brains on Fire scooped her up!)</p>
									<p>Even though Mary Susan doesn't use her art degree on a daily basis, she utilizes her other talent — organization — every minute of the workweek. These days, Mary Susan can be found keeping The Firesphere in check and Brains on Fire running like a well-oiled machine. And we're so thankful for that.</p>
								</div>
							</div>
						</div>

					</article>
				</section>

				<div class="direction-nav bottom">
					<div class="row">
						<ul>
							<li><a class="previous" href="jack_welch.php"><span>previous individual</span></a></li>
							<li><a class="center" href="individual.php"><span>back to all people</span></a></li>
							<li><a class="next" href="moe_megan.php"><span>next individual</span></a></li>
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