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

				<section id="books-banner" class="white-text">
					<div class="row">
						<h1>Our Books</h1>
						<p>We're more than a pretty cover.</p>
					</div>
				</section>

				<section id="books">
					<div class="row">
						<div class="half-block">
							<a href="brains_on_fire.php">
								<img src="images/library/img9.jpg" alt="Brains on Fire">
							</a>
							<h2>Brains on Fire</h2>
							<p>Igniting Powerful, Sustainable, <br>Word of Mouth Movements</p>
							<div class="btn-holder">
								<a href="brains_on_fire.php" class="button btn-blue">learn more</a>
								<a href="#" data-reveal-id="firstModal" class="button btn-green">buy now</a>
							</div>
						</div>
						<div class="half-block books">
							<a href="the_passion_conversation.php">
								<img src="images/library/img10.jpg" alt="The Passion Conversation">
							</a>
							<h2>The Passion Conversation</h2>
							<p>Understanding, Sparking, Sustaining, <br>Word of Mouth Marketing</p>
							<div class="btn-holder">
								<a href="the_passion_conversation.php" class="button btn-blue">learn more</a>
								<a href="#" data-reveal-id="secondModal" class="button btn-green">buy now</a>
							</div>
						</div>
					</div>
				</section>

				<!-- Reveal Modals begin -->
				<div id="firstModal" class="reveal-modal" data-reveal>
					<div class="retailers">
						<a class="close-reveal-modal">&#215;</a>
						<h2>Where to buy</h2>
						<p>Pick a store, any store.</p>
						<ul>
							<li>
								<a class="ceoread" target="_blank" href="http://800ceoread.com/book/show/9780470614181-Brains_on_Fire">
									<img src="images/modal/ceoread.jpg" alt="">
								</a>
							</li>
							<li>
								<a class="bam" target="_blank" href="http://www.booksamillion.com/p/Brains-Fire/Robbin-Phillips/Q362900852?id=6117550105521">
									<img src="images/modal/bam.jpg" alt="">
								</a>
							</li>
							<li>
								<a class="amazon" target="_blank" href="http://amzn.com/0470614188">
									<img src="images/modal/amazon.jpg" alt="">
								</a>
							</li>
							<li>
								<a class="indiebound" target="_blank" href="http://www.indiebound.org/book/9780470614181">
									<img src="images/modal/indiebound.jpg" alt="">
								</a>
							</li>
							<li>
								<a class="bn" target="_blank" href="http://search.barnesandnoble.com/Brains-on-Fire/Robbin-Phillips/e/9780470614181/?itm=1&amp;USRI=brains+on+fire">
									<img src="images/modal/bn.jpg" alt="">
								</a>
							</li>
						</ul>
					</div>
				</div>

				<!-- Reveal Modals begin -->
				<div id="secondModal" class="reveal-modal" data-reveal>
					<div class="retailers">
						<a class="close-reveal-modal">&#215;</a>
						<h2>Where to buy</h2>
						<p>Pick a store, any store.</p>
						<ul>
							<li>
								<a class="ceoread" target="_blank" href="http://800ceoread.com/products/passion_conversation-geno_church_greg_cordell_john_moore_robbin_phillips-english">
									<img src="images/modal/ceoread.jpg" alt="">
								</a>
							</li>
							<li>
								<a class="bam" target="_blank" href="http://www.booksamillion.com/p/Passion-Conversation/Robbin-Phillips/9781118533338?id=5733101311047">
									<img src="images/modal/bam.jpg" alt="">
								</a>
							</li>
							<li>
								<a class="amazon" target="_blank" href="http://www.amazon.com/The-Passion-Conversation-Understanding-Sustaining/dp/111853333X">
									<img src="images/modal/amazon.jpg" alt="">
								</a>
							</li>
							<li>
								<a class="indiebound" target="_blank" href="http://www.indiebound.org/book/9781118533338">
									<img src="images/modal/indiebound.jpg" alt="">
								</a>
							</li>
							<li>
								<a class="bn" target="_blank" href="http://www.barnesandnoble.com/w/the-passion-conversation-robbin-phillips/1115568255?ean=9781118533338">
									<img src="images/modal/bn.jpg" alt="">
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
			$('.secondary-nav li:eq(1)').addClass('current');
		});
	</script>
	
</body>
</html>