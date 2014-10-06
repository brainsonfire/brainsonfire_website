<?php $title = '' ?>
<!DOCTYPE html>
<!--[if IE 9]><html class="no-js ie9 lt-ie10" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" lang="en"><!--<![endif]-->
<head>
    <meta charset="utf-8">
    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->

    <title>Brains on Fire | Brandy Amidon</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="shortcut icon" href="images/layout/favicon.ico" />
    <link rel="apple-touch-icon" href="images/layout/apple-favicon.png"/>

	<script src="//use.typekit.net/xqj8rqh.js"></script>
	<script>try{Typekit.load();}catch(e){}</script>

    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/foundation.css" />
    <link media="screen, projection" rel="stylesheet" type="text/css" href="css/screen.css" />
    <link media="screen, projection" rel="stylesheet" type="text/css" href="css/dev.css" />
    <link media="print" rel="stylesheet" type="text/css" href="css/print.css" />

    <!--[if lte IE 8]><link media="screen, projection" rel="stylesheet" type="text/css" href="css/ie8.css" /><![endif]-->
    <script src="js/min/modernizr.custom.01216.min.js"></script>
    <!--[if lte IE 8]><script type="text/javascript" src="js/min/respond.min.js"></script><![endif]-->

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
							<li><a class="previous" href="amy_taylor.php"><span>previous individual</span></a></li>
							<li><a class="center" href="individual.php"><span>back to all people</span></a></li>
							<li><a class="next" href="cathy_harrison.php"><span>next individual</span></a></li>
						</ul>
					</div>
				</div>

				<section class="mega-holder">
				
					<div class="mega-banner">
						<div class="photo-container">
							<div class="holder">
								<img src="images/individuals/lobby-shots/brandy.png" alt="Brandy Amidon" class="brandy active">
							</div>
							<div class="holder02">
								<img src="images/individuals/lobby-shots/brandy.png" alt="Brandy Amidon" class="brandy active">
							</div>
						</div>
						<div class="window"></div>
					</div>

					<article class="people-post">
						<div class="row heading">
							<h1>Brandy Amidon</h1>
							<em class="job-title">CPA + Gun-for-hire</em>
						</div>

						<div class="row cols-holder">

							<div class="meta large-4 medium-4 small-12 columns">
								<img src="images/individuals/headshots/brandy-257x257.jpg" alt="Brandy Amidon">
								<div class="holder">
									<h3>Find Brandy Online:</h3>
									<ul class="social">
										<li><a href="https://www.facebook.com/brandy.amidon" class="facebook">Facebook</a></li>
										<li><a href="http://www.pinterest.com/bha16321/" class="pinterest">Pinterest</a></li>
									</ul>
								</div>
							</div>

							<div class="large-8 medium-8 small-12 columns">
								<div class="large-6 medium-12 small-12 columns">
									<ul class="arbitrary-facts">
										<li>Television Junkie</li>
										<li>Theater loving non-thespian</li>
										<li>Ink pen thief</li>
										<li>Made in Travelers Rest</li>
									</ul>
									<p>Brandy graduated from North Greenville University in just two-and-a-half years. Why? Because she could. Well, that and she wanted to get hitched. After graduation, Brandy began working at Carolina First Bank (one of Brains on Fire's former clients), and spent three years in their accounting department. But she had her sights set on something bigger. (And has since started her own <a href="http://www.brandyamidoncpa.com" target="_blank">gig</a>.)</p>
								</div>
								<div class="large-6 medium-12 small-12 columns">
									<p>Brandy is a teacher, tax guru, retirement planner, debt re-constructor, forward-thinking business consultant, problem solver and a stress reliever. She’s also the coolest CPA you’ll ever meet. But around here, we just call her our CFO!</p>
								</div>
							</div>
						</div>

					</article>
				</section>

				<div class="direction-nav bottom">
					<div class="row">
						<ul>
							<li><a class="previous" href="amy_taylor.php"><span>previous individual</span></a></li>
							<li><a class="center" href="individual.php"><span>back to all people</span></a></li>
							<li><a class="next" href="cathy_harrison.php"><span>next individual</span></a></li>
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