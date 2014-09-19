<?php $title = 'Brains on Fire | John Moore' ?>
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
								<img src="images/individuals/lobby-shots/john.png" alt="John Moore" class="john active">
							</div>
							<div class="holder02">
								<img src="images/individuals/lobby-shots/john.png" alt="John Moore" class="john active">
							</div>
						</div>
						<div class="window"></div>
					</div>

					<article class="people-post">
						<div class="row heading">
							<h1>John Moore</h1>
							<em class="job-title">Chief of Wahoo</em>
						</div>

						<div class="row cols-holder">

							<div class="meta large-4 medium-4 small-12 columns">
								<img src="images/individuals/headshots/john-257x257.jpg" alt="John Moore">
								<div class="holder">
									<h3>Find John Online:</h3>
									<ul class="social">
										<li><a href="http://www.brandautopsy.com/" class="blog">Blog</a></li>
										<li><a href="https://twitter.com/brandautopsy" class="twitter">Twitter</a></li>
										<li><a href="https://www.facebook.com/johnhmoore" class="facebook">Facebook</a></li>
										<li><a href="http://www.linkedin.com/in/johnhardinmoore" class="linkedin">Linked In</a></li>
									</ul>
								</div>
							</div>

							<div class="large-8 medium-8 small-12 columns">
								<div class="large-6 medium-12 small-12 columns">
									<ul class="arbitrary-facts">
										<li>Former two-time Pinewood Derby champion</li>
										<li>Current beer smuggler</li>
										<li>Dandayamana – Dhanuraiana doer</li>
										<li>Business book junkie</li>
										<li>Inner child is in the throes of puberty</li>
									</ul>
									<p>John Moore takes his job seriously, himself lightly. His business side was shaped as a long-time marketing manager with Starbucks, and later as Director of National Marketing at Whole Foods. For many years, John operated his own consultancy, the Brand Autopsy Marketing Practice.</p>
									<p>These days, John is the Chief of Wahoo for the Brains on Fire tribe. In this role he is responsible for helping grow the business, ensuring clients achieve their desired growth, and developing learners and leaders within the tribe.</p>
								</div>
								<div class="large-6 medium-12 small-12 columns">
									<p>Along the way, John has authored three business books: “Tribal Knowledge,” “Tough Love,” and “The Passion Conversation: Understanding, Sparking and Sustaining Word of Mouth Marketing.”</p>
									<p>John’s Brand Autopsy blog has been sharing hot marketing opinions since long before social media became the cool thing to do. He continues sharing his insights, traveling the world to speak to marketers on a range of topics, including word of mouth marketing strategies and how to build a captivating brand.</p>
									<p>John’s lighthearted side is a sucker for beer and music. He treats beer like others treat wine. (He maintains a beer cellar. Seriously.) He is also deep into funky jazz and jazzy funk. Think Sly Stone, Gil Scott-Heron, Meters, and anything that is “on the one.”</p>
									<p>John resides in Greenville, South Carolina. Yeah, THAT Greenville.</p>
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