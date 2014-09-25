<?php $title = 'Brains on Fire | Store' ?>
<?php include("inc/head.php"); ?>
<body>
	<!--[if lte IE 8]>
		<p class="chromeframe"> <strong>You are using an outdated browser.</strong><br /> <br />Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
	<![endif]-->
	
	<div class="off-canvas-wrap" data-offcanvas>
		<div class="inner-wrap">
			
			<?php include("inc/header.php"); ?>
			
			<main id="main" class="store">

				<section id="store-banner" class="white-text">
					<div class="row">
						<h1>Our Store</h1>
						<p>Where the Wild(ly good) things are.</p>
					</div>
				</section>

				<section id="store">
					<div class="row">
						<h1>"No More Timesheets" Whitepaper</h1>
						<p>How we banished timesheets once and for all</p>
						<img src="images/store/whitepaper_hero.jpg" alt="No More Timesheets">
						<div class="row">
							<div class="large-8 medium-8 small-12 columns">
								<p>Once upon a time, an agency found that their team was spending entirely too much time and energy on time sheets. (Precious time and energy that would have been better spent on creating magic for their clients.) Enough was enough. So they made a plan to banish time sheets from their kingdom once and for all, and never looked back. Life was good. (And so was business.)</p>
								<p>Even if you're not quite ready to set your time sheets ablaze and send them downriver, our new white paper outlines the steps we took to phase out time sheets at Brains on Fire. Sure, it might have been an unconventional decision that raised a few eyebrows, but if we had a nickel for every time someone reached out wanting to know the secret to going time sheet-free, well, we'd have a lot of nickels. So here it is. </p>
								<p>A little secret from us to you. Down with time sheets, we say! And up with doing more of what you love.</p>
							</div>
							<div class="large-3 medium-3 small-12 columns right-sidebar">
								<p class="big">$99.00</p>
								<a href="https://plasso.co/s/ua7qgMOFbU" class="plo-button button btn-orange">Buy Now</a>
								<!-- <a href="#dummy">Click here for a sneak peek!</a> -->
							</div>
						</div>
					</div>
				</section>

				<section id="books-store" class="white-text">
					<div class="row">
						<h1>Our Books</h1>
						<p>We're more than a pretty cover.</p>
					</div>
					<div class="row">
						<div class="half-block">
							<a href="book.php">
								<img src="images/library/img9.jpg" alt="Brains on Fire">
							</a>
							<h2>Brains on Fire</h2>
							<p>Igniting Powerful, Sustainable, <br>Word of Mouth Movements</p>
							<div class="btn-holder">
								<a href="book.php" class="button btn-blue">learn more</a>
								<a href="#" class="button btn-green">buy now</a>
							</div>
						</div>
						<div class="half-block books">
							<a href="book.php">
								<img src="images/library/img10.jpg" alt="The Passion Conversation">
							</a>
							<h2>The Passion Conversation</h2>
							<p>Understanding, Sparking, Sustaining, <br>Word of Mouth Marketing</p>
							<div class="btn-holder">
								<a href="book.php" class="button btn-blue">learn more</a>
								<a href="#" class="button btn-green">buy now</a>
							</div>
						</div>
					</div>
				</section>

			</main>
			
			<?php include("inc/footer.php"); ?>
			
		</div>
	</div>

	<?php include("inc/js.php"); ?>

	<!-- Shopping Cart Embed -->
	<script type='text/javascript' src='https://plasso.co/embed/v2/embed.js'></script>

	<!-- TEMP ADD CURRENT CLASS TO NAVIGATION -->
	<script>
		$(document).ready(function () {
			$('.secondary-nav li:eq(3)').addClass('current');
		});
	</script>
	
</body>
</html>