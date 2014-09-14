<?php $title = 'Brains on Fire | Books' ?>

<?php include("inc/head.php"); ?>

<body>

	<!--[if lte IE 8]>
		<p class="chromeframe"> <strong>You are using an outdated browser.</strong><br /> <br />Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
	<![endif]-->
	
	<div class="off-canvas-wrap" data-offcanvas>

		<div class="inner-wrap">


			
			<?php include("inc/header.php"); ?>


			
			<main id="main">



				<section id="books-banner">

					<div class="row">

						<h1>Our Books</h1>

						<p>We're more than a pretty cover.</p>
					
					</div>

				</section>



				<section id="books">

					<div class="row">

						<div class="half-block">
							<img src="images/library/img9.jpg" alt="">
							<h2>Brains on Fire</h2>
							<p>Igniting Powerful, Sustainable, <br>Word of Mouth Movements</p>
							<div class="btn-holder">
								<a href="#" class="button btn-blue">learn more</a>
								<a href="#" class="button btn-green">buy now</a>
							</div>
						</div>

						<div class="half-block books">
							<img src="images/library/img10.jpg" alt="">
							<h2>The PAssion Conversation</h2>
							<p>Understanding, Sparking, Sustaining, <br>Word of Mouth Marketing</p>
							<div class="btn-holder">
								<a href="#" class="button btn-blue">learn more</a>
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

	<!-- TEMP ADD CURRENT CLASS TO NAVIGATION -->
	<script>
		$(document).ready(function () {
			$('.secondary-nav li:eq(1)').addClass('current');
		});
	</script>

</body>

</html>