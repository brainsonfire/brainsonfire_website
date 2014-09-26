<?php $title = 'Brains on Fire | Ambassador-Led Movements | Fitness Rebellion' ?>
<?php include("inc/head.php"); ?>
<body>
	<!--[if lte IE 8]>
		<p class="chromeframe"> <strong>You are using an outdated browser.</strong><br /> <br />Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
	<![endif]-->
	
	<div class="off-canvas-wrap" data-offcanvas>
		<div class="inner-wrap">
			
			<?php include("inc/header.php"); ?>
			
			<main id="main" class="case-study inner-pages">

				<div class="direction-nav top">
					<div class="row">
						<ul>
							<li><a class="previous" href="fiskateers.php"><span>previous story</span></a></li>
							<li><a class="center" href="case_studies.php"><span>back to all case studies</span></a></li>
							<li><a class="next" href="tinkernation.php"><span>next story</span></a></li>
						</ul>
					</div>
				</div>
				
				<div id="fitness-rebellion" class="main-photo">
					<img src="images/case-study/fitness-rebellion/fitness-hero.jpg" alt="Fitness Rebellion">
				</div>

				<section id="fitness-rebellion-intro" class="intro">
					<div class="row">
						<h1>The Fitness Rebellion</h1>
						<div class="two-col">
							<div class="left">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates laudantium doloremque dolorum repellat blanditiis earum aspernatur consequuntur sequi iste beatae neque, repudiandae sint amet at tempore, autem cum, quam ab.</p>
							</div>
							<div class="right">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, tempore error fuga placeat sed velit odit corporis eius aliquam, veritatis iusto adipisci recusandae molestiae iste repellendus pariatur! Aut, consequatur, ducimus?</p>
							</div>
						</div>
					</div>
				</section>
								
				<div class="direction-nav bottom">
					<div class="row">
						<ul>
							<li><a class="previous" href="fiskateers.php"><span>previous story</span></a></li>
							<li><a class="center" href="case_studies.php"><span>back to all case studies</span></a></li>
							<li><a class="next" href="tinkernation.php"><span>next story</span></a></li>
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