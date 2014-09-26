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
									<img src="images/case-study/project_01.jpg" alt="Love 146">
									<span class="rollover">
										<span class="middle">
											<span class="title">Love 146</span>
											<span class="desc">End child trafficking and exploitation.</span>
										</span>
									</span>
								</a>
							</li>
							<li class="large-4 medium-4 small-12 columns">
								<a href="heroes_in_recovery.php">
									<img src="images/case-study/project_02.jpg" alt="Heroes in Recovery">
									<span class="rollover">
										<span class="middle">
											<span class="title">Heroes in Recovery</span>
											<span class="desc">Eliminate the social stigma of mental illness and addiction.</span>
										</span>
									</span>
								</a>
							</li>
							<li class="large-4 medium-4 small-12 columns">
								<a href="fiskateers.php">
									<img src="images/case-study/project_03.jpg" alt="Fiskateers">
									<span class="rollover">
										<span class="middle">
											<span class="title">Fiskateers</span>
											<span class="desc">Reframing the conversation around a 350 year old brand.</span>
										</span>
									</span>
								</a>
							</li>
							<li class="large-4 medium-4 small-12 columns">
								<a href="fitness_rebellion.php">
									<img src="images/case-study/project_04.jpg" alt="Fitness Rebellion">
									<span class="rollover">
										<span class="middle">
											<span class="title">Fitness Rebellion</span>
											<span class="desc">Celebrate everyday accomplishments in fitness.</span>
										</span>
									</span>
								</a>
							</li>
							<li class="large-4 medium-4 small-12 columns">
								<a href="tinkernation.php">
									<img src="images/case-study/project_05.jpg" alt="Tinkernation">
									<span class="rollover">
										<span class="middle">
											<span class="title">Tinkernation</span>
											<span class="desc">Making Liquid Wrench relevant to makers, restorers, and fixers.</span>
										</span>
									</span>
								</a>
							</li>
							<li class="large-4 medium-4 small-12 columns">
								<a href="greenville.php">
									<img src="images/case-study/project_06.jpg" alt="Greenville">
									<span class="rollover">
										<span class="middle">
											<span class="title">Yeah, That Greenville</span>
											<span class="desc">Celebrating the best thing about Greenville, SC - it's people.</span>
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