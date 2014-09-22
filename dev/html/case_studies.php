<?php $title = 'Brains on Fire | Case Studies' ?>
<?php include("inc/head.php"); ?>
<body>
	<!--[if lte IE 8]>
		<p class="chromeframe"> <strong>You are using an outdated browser.</strong><br /> <br />Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
	<![endif]-->

	<div class="off-canvas-wrap" data-offcanvas>
		<div class="inner-wrap">
			
			<?php include("inc/header.php"); ?>
			
			<main id="main" class="case-study">

				<section id="case-studies-banner">
					<div class="row">
						<h1>Case Studies</h1>
						<img src="images/case-study/case_studies_title.png" alt="Case Studies">
					</div>
				</section>

				<div id="projects-list">
				
					<div class="row">

						<ul class="row project-list">
							<li class="large-4 medium-4 small-12 columns">
								<a href="love_146.php">
									<img src="images/case-study/project_01.jpg" alt="Lorem Ipsum">
									<span class="rollover">
										<span class="middle">
											<span class="title">Lorem Ipsum</span>
											<span class="desc">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</span>
										</span>
									</span>
								</a>
							</li>
							<li class="large-4 medium-4 small-12 columns">
								<a href="heroes_in_recovery.php">
									<img src="images/case-study/project_02.jpg" alt="Lorem Ipsum">
									<span class="rollover">
										<span class="middle">
											<span class="title">Lorem Ipsum</span>
											<span class="desc">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</span>
										</span>
									</span>
								</a>
							</li>
							<li class="large-4 medium-4 small-12 columns">
								<a href="#dummy">
									<img src="images/case-study/project_03.jpg" alt="Lorem Ipsum">
									<span class="rollover">
										<span class="middle">
											<span class="title">Lorem Ipsum</span>
											<span class="desc">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</span>
										</span>
									</span>
								</a>
							</li>
							<li class="large-4 medium-4 small-12 columns">
								<a href="#dummy">
									<img src="images/case-study/project_04.jpg" alt="Lorem Ipsum">
									<span class="rollover">
										<span class="middle">
											<span class="title">Lorem Ipsum</span>
											<span class="desc">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</span>
										</span>
									</span>
								</a>
							</li>
							<li class="large-4 medium-4 small-12 columns">
								<a href="#dummy">
									<img src="images/case-study/project_05.jpg" alt="Lorem Ipsum">
									<span class="rollover">
										<span class="middle">
											<span class="title">Lorem Ipsum</span>
											<span class="desc">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</span>
										</span>
									</span>
								</a>
							</li>
							<li class="large-4 medium-4 small-12 columns">
								<a href="#dummy">
									<img src="images/case-study/project_06.jpg" alt="Lorem Ipsum">
									<span class="rollover">
										<span class="middle">
											<span class="title">Lorem Ipsum</span>
											<span class="desc">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</span>
										</span>
									</span>
								</a>
							</li>
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
			$('.primary-nav li:eq(3)').addClass('current');
		});
	</script>
</body>
</html>