<?php $title = 'Brains on Fire | Speaking | John Moore' ?>
<?php include("inc/head.php"); ?>
<body>
	<!--[if lte IE 8]>
		<p class="chromeframe"> <strong>You are using an outdated browser.</strong><br /> <br />Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
	<![endif]-->
	<div class="off-canvas-wrap" data-offcanvas>
		<div class="inner-wrap">

			<?php include("inc/header.php"); ?>
			
			<main id="main" class="speaker-detail inner-pages">

				<div class="direction-nav top">
					<div class="row">
						<ul>
							<li><a class="previous" href="geno_speaker.php"><span>previous speaker</span></a></li>
							<li><a class="center" href="speaking.php"><span>back to speakers</span></a></li>
							<li><a class="next" href="greg_speaker.php"><span>next speaker</span></a></li>
						</ul>
					</div>
				</div>

				<div id="speaker-banner" class="white-text main-photo">
					<img src="images/speaking/greg_banner.jpg" alt="John Moore">
					<div class="half-block right">
						<p>“Need image and content here”</p>
						<a href="speaking.php#form" class="button btn-orange">book john now</a>
					</div>
				</div>

				<section class="mega-holder">

					<article class="people-post">
						<div class="row heading">
							<h1>John Moore</h1>
						</div>

						<div class="row cols-holder">

							<div class="meta large-4 medium-4 small-12 columns">
								<img src="images/individuals/headshots/john-257x257.jpg" alt="John Moore">
							</div>

							<div class="large-8 medium-8 small-12 columns">
								<div class="large-6 medium-12 small-12 columns">
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

				<div class="direction-nav bottom">
					<div class="row">
						<ul>
							<li><a class="previous" href="geno_speaker.php"><span>previous speaker</span></a></li>
							<li><a class="center" href="speaking.php"><span>back to speakers</span></a></li>
							<li><a class="next" href="greg_speaker.php"><span>next speaker</span></a></li>
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
			$('.secondary-nav li:eq(2)').addClass('current');
		});
	</script>

</body>
</html>