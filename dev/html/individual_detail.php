<?php $title = 'Brains on Fire | Greg Ramsey' ?>
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
						<img src="images/individuals/lobby-shots/alison.png" alt="Alison Quarles" class="alison active">
					</div>
					<div class="holder02">
						<img src="images/individuals/lobby-shots/alison.png" alt="Alison Quarles" class="alison active">
					</div>
				</div>
				<div class="window"></div>
			</div>
			<article class="people-post">
				<div class="heading">
					<h1>Alison Quarles</h1>
					<em class="job-title">Fixer of Graphic Conundrums</em>
				</div>
				<div class="cols-holder">
					<div class="meta">
						<img src="images/individuals/headshots/alison-257x257.jpg" alt="greg cordell">
						<div class="holder">
							<h3>Find Alison Online:</h3>
							<ul class="social">
								<li><a href="http://instagram.com/maryaq2" class="instagram">Instagram</a></li>
								<li><a href="http://www.linkedin.com/in/alisonq" class="linkedin">Linked In</a></li>
							</ul>
						</div>
					</div>
					<div class="two-columns">
						<div class="column">
							<ul class="arbitrary-facts">
								<li>Ballet dancer</li>
								<li>Uncle invented the term "cyberspace"</li>
								<li>Has a standing breakfast date with her family every Saturday</li>
							</ul>
							<p>Have a problem? Alison can fix it. Seriously. AQ grew up in Greenville, South Carolina, receiving a degree in Art Education from the University of Georgia and a degree in Graphic design from Ringling School of Art. Pretty impressive, eh?</p>
						</div>
						<div class="column">
							<p>Alison’s roster of happy clients includes BMW Manufacturing, AFGA Healthcare and Bon Secours St. Francis Health System (among many, many others). Her production skills are unparalleled around these parts, and everything the woman touches turns to graphic gold. If you have the good fortune to meet Alison in person, be sure to ask her about her adventures overseas – you won’t be disappointed.</p>
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
			$('.secondary-nav li:eq(1)').addClass('current');
		});
	</script>

</body>
</html>