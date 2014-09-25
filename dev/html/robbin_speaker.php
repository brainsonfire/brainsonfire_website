<?php $title = 'Brains on Fire | Speaking | Robbin Phillips' ?>
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
							<li><a class="previous" href="greg_speaker.php"><span>previous speaker</span></a></li>
							<li><a class="center" href="speaking.php"><span>back to speakers</span></a></li>
							<li><a class="next" href="geno_speaker.php"><span>next speaker</span></a></li>
						</ul>
					</div>
				</div>

				<div id="speaker-banner" class="white-text main-photo">
					<img src="images/speaking/robbin_banner.jpg" alt="Robbin Phillips">
					<div class="half-block right">
						<p>“People love brands who love people.”</p>
						<a href="speaking.php#form" class="button btn-orange">book robbin now</a>
					</div>
				</div>

				<section class="mega-holder">

					<article class="people-post">
						<div class="row heading">
							<h1>Robbin Phillips</h1>
						</div>

						<div class="row cols-holder">

							<div class="meta large-4 medium-4 small-12 columns">
								<img src="images/individuals/headshots/robbin-257x257.jpg" alt="Robbin Phillips">
							</div>

							<div class="large-8 medium-8 small-12 columns">
								<!-- <div class="large-6 medium-12 small-12 columns"> -->
									<p>Robbin Phillips gets out of bed each morning inspired by a single focus: to make a positive, meaningful change in the world.</p> 
									<p>As one of the founders and Courageous President of Brains on Fire, Robbin has recruited a highly talented team of kindred spirits committed to the belief that marketing has the power to truly touch lives. Having begun her career as a graphic designer, Robbin remains involved in the creative development of client identities, while tapping into her keen business sense to facilitate strategy.</p>
									<p>Inspired by the power of purpose, passion and people, Robbin and her team rally daily to deliver innovative, impactful solutions that elevate and celebrate a diverse range of clients including</p>
								<!-- </div>
								<div class="large-6 medium-12 small-12 columns"> -->
									<p>Love146, Foundations Recovery Network, Anytime Fitness, Bon Secours St. Francis Health System, BMW, DeVry University, GreenDot Public Schools, Fiskars Brands, Perception Kayaks, Ryobi Tools, Colonial Williamsburg, the National Center for Families Learning and Best Buy.</p>
									<p>During Robbin’s tenure, Brains on Fire has received numerous national awards including a GOLD EFFIE and the Word of Mouth Marketing Association’s WOMMIE Award. She is co-author of the books “Brains on Fire: Igniting Powerful, Sustainable, World of Mouth Movements,” and “The Passion Conversation: Understanding, Sparking and Sustaining Word of Mouth Marketing.” As a highly sought-after presenter, Robbin frequently hits the road to speak at conferences and private events around the country. She has shared insights on word of mouth marketing with groups big and small, including the Word of Mouth Marketing Association and the Association of National Advertisers.</p>
								</div>
							</div>
						</div>

					</article>
				</section>

				<div class="direction-nav bottom">
					<div class="row">
						<ul>
							<li><a class="previous" href="greg_speaker.php"><span>previous speaker</span></a></li>
							<li><a class="center" href="speaking.php"><span>back to speakers</span></a></li>
							<li><a class="next" href="geno_speaker.php"><span>next speaker</span></a></li>
						</ul>
					</div>
				</div>

			</main>

			<?php include("inc/footer.php"); ?>

		</div>
	</div>

	<?php include("inc/js.php"); ?>

	<!-- TEMP ADD CURRENT CLASS TO NAVIGATION -->
	<script>
		$(document).ready(function () {
			$('.secondary-nav li:eq(2)').addClass('current');
		});
	</script>

</body>
</html>