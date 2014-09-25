<?php $title = 'Brains on Fire | Learn to Build a Movement' ?>
<?php include("inc/head.php"); ?>
<body>
	<!--[if lte IE 8]>
		<p class="chromeframe"> <strong>You are using an outdated browser.</strong><br /> <br />Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
	<![endif]-->
	
	<div class="off-canvas-wrap" data-offcanvas>
		<div class="inner-wrap">
			
			<?php include("inc/header.php"); ?>
			
			<main id="main">
			
				<section id="learn-banner" class="white-text">
					<div class="row">
						<h1>Learn to Build a Movement</h1>
						<p>Cum sociis natoque penatibus et magnis dis parturient montes.</p>
					</div>
				</section>
				
				<section id="help">
					<div class="row">
						<h1>We can help you find your way</h1>
						<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
						<div class="half-block">
							<a href="2x2_workshops.php"><img src="images/movement/learn-1.jpg" alt="2x2 Workshop"></a>
							<h2>2x2 Workshop</h2>
							<p>We understand that travel can pose a challenge at times, which is precisely why we created the 2x2 Workshop. Instead of asking you to bring your team to Brains on Fire, we’ll send two of our strategic partners to you. Don’t worry, the dogs aren’t required... unless, of course, you’d like them to be.</p>
							<a href="2x2_workshops.php" class="button btn-green">learn more</a>
						</div>
						<div class="half-block">
							<a href="gut_check.php"><img src="images/movement/learn-2.jpg" alt="Get check my thinking"></a>
							<h2>Gut check my thinking</h2>
							<p>Feeling uncertain about the marketing programs your company is implementing to build its brand and increase sales? Want to bounce an idea off the brains of proven marketing pros? Sounds like you could use a Gut Check My Thinking video chat with Brains on Fire.</p>
							<a href="gut_check.php" class="button btn-green">learn more</a>
						</div>
					</div>
				</section>

				<section id="other-way" class="white-text">
					<div class="row">
						<h1>Other ways we can help</h1>
						<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
						<div class="half-block">
							<a href="books.php"><img src="images/movement/learn-3.jpg" alt="Our Book"></a>
							<h2>Our Book</h2>
							<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis interdum.</p>
							<a href="books.php" class="button btn-orange">learn more</a>
						</div>
						<div class="half-block">
							<a href="speaking.php"><img src="images/movement/learn-4.jpg" alt="Speaking"></a>
							<h2>Speaking</h2>
							<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis interdum.</p>
							<a href="speaking.php" class="button btn-orange">learn more</a>
						</div>
					</div>
				</section>

			</main>
			
			<?php include("inc/footer.php"); ?>
			
		</div>
	</div>
	
	<?php include("inc/js.php"); ?>

	<!-- TEMP ADD CURRENT CLASS TO NAVIGATION -->
	<script>
		$(document).ready(function () {
			$('.primary-nav li:eq(2)').addClass('current');
		});
	</script>
	
</body>
</html>