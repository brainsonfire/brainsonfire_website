<?php $title = 'Brains on Fire | Word of Mouth Marketing and Movement Igniting Company' ?>

<?php include("inc/head.php"); ?>

<body>

	<!--[if lte IE 7]>
		<p class="chromeframe"> <strong>You are using an outdated browser.</strong><br /> <br />Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
	<![endif]-->
	
	<div class="off-canvas-wrap" data-offcanvas>

		<div class="inner-wrap">



			<?php include("inc/header.php"); ?>


			
			<main id="main">
			


				<div id="home-video">

					<div class="videoHolder">

						<video id="homepagevid" autoplay>
							<source type="video/mp4" src="images/video/ram.mp4">
							<source type="video/webm" src="images/video/ram.webm">
							<source type="video/ogg" src="images/video/ram.ogv">
						</video>

					</div>

				</div>
			


				<!-- da se proveri za ovu sekciju da li ide slider ili ne -->
				<section class="cycle-gallery" id="gallery">

					<div class="mask">

						<div class="slideset">

							<div class="slide bighome">

								<div class="txt row">

									<h1 class="title">We can help your organizations<br> ignite a powerful, sustainable<br> word of mouth movements.</h1>
									
									<a href="work.php" class="button btn-blue left">we’ll teach you how</a>

									<a href="work.php" class="button btn-green left">or build it with you</a>

								</div>

							</div>

						</div>

					</div>

					<a href="#checkpoint1" class="btn-down btn-scroll">Scroll down</a>

				</section>
			


				<section id="checkpoint1" class="section-work">

					<div class="row">

						<h1>Some of our work.</h1>

						<p>Be Famous For The People Who Love You... For The Way You Love Them.</p>

						<ul class="works-list">

							<li>
								<a href="#dummy">
									<img src="images/home/img_home_work_146.jpg" alt="Love 146">
								</a>
							</li>
							
							<li>
								<a href="#dummy">
									<img src="images/home/img_home_work_FR.jpg" alt="Fitness Rebellion">
								</a>
							</li>
							
							<li>
								<a href="#dummy">
									<img src="images/home/img_home_work_heroes.jpg" alt="Heroes in Recovery">
								</a>
							</li>
						
						</ul>

						<div class="btn-holder">

							<a class="button btn-ico btn-orange" href="#dummy">View all of our case studies</a>

						</div>

					</div>

				</section>



				<section id="tagboard-wrap">

					<div class="row">

						<!-- Tagboard widget - start -->

						<div id="tagboard-embed"></div>

						<script>var tagboardOptions = {tagboard:"firesphere/188415", postCount: 50, mobilePostCount: 10};</script>
						
						<script src="https://tagboard.com/public/js/embed.js"></script>

						<!-- Tagboard widget - end -->

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
			$('.primary-nav li:first').addClass('current');
		});
	</script>

</body>

</html>