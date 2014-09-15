<?php $title = 'Brains on Fire | Case Studies' ?>

<?php include("inc/head.php"); ?>

<body>

	<!--[if lte IE 8]>
		<p class="chromeframe"> <strong>You are using an outdated browser.</strong><br /> <br />Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
	<![endif]-->
	
	<div class="off-canvas-wrap" data-offcanvas>

		<div class="inner-wrap">


			
			<?php include("inc/header.php"); ?>


			
			<main id="main">



				<section id="case-studies-banner">

					<div class="row">

						<h1>Case Studies</h1>

						<p>Need Background Image Here.</p>
					
					</div>

				</section>



				<section id="case-studies-list">

					<div class="row">

						<h1>Title Here</h1>

						<p>Content Here.</p>
					
						<ul class="list">
							<li>
								<a href="#dummy">
									<img src="images/library/example-3.jpg" alt="">
								</a>
							</li>
							<li>
								<a href="#dummy">
									<img src="images/library/example-2.jpg" alt="">
								</a>
							</li>
							<li>
								<a href="#dummy">
									<img src="images/library/example-3.jpg" alt="">
								</a>
							</li>
							<li>
								<a href="#dummy">
									<img src="images/library/example-2.jpg" alt="">
								</a>
							</li>
							<li>
								<a href="#dummy">
									<img src="images/library/example-3.jpg" alt="">
								</a>
							</li>
							<li>
								<a href="#dummy">
									<img src="images/library/example-2.jpg" alt="">
								</a>
							</li>
						</ul>
						
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
			$('.primary-nav li:eq(3)').addClass('current');
		});
	</script>

</body>

</html>