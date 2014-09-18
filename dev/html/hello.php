<?php $title = 'Brains on Fire | Hello' ?>
<?php include("inc/head.php"); ?>
<body>
	<!--[if lte IE 8]>
		<p class="chromeframe"> <strong>You are using an outdated browser.</strong><br /> <br />Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
	<![endif]-->

	<div class="off-canvas-wrap" data-offcanvas>
		<div class="inner-wrap">
			
			<?php include("inc/header.php"); ?>
			
			<main id="main" class="hello">

				<section id="hello-banner" class="white-text">
					<div class="row">
						<h1>Hello!</h1>
						<p>Is it us you’re looking for?</p>
					</div>
				</section>
			
				<div id="cta">
					<div class="row">
						<div class="videoHolder">
							<iframe width="560" height="315" src="//www.youtube.com/embed/hAjPOojI3q8?list=UUmnFg0G2CjtTlizjfs8vpTw" allowfullscreen></iframe>
						</div>	
					</div>
					<div class="row">				
						<div class="cta">

							<div class="large-6 medium-6 small-12 columns">
								<span class="call">Give Us a Call!</span>
								<a class="tel fnc-tel" href="tel:864-676-9663">864-676-9663</a>
							</div>

							<div class="large-6 medium-6 small-12 columns border-left">
								<span class="text-online">Connect</span>
								<ul class="social-networks">
									<li class="twitter"><a href="https://twitter.com/BrainsOnFire">twitter</a></li>
									<li class="instagram"><a href="http://instagram.com/bofagram">instagram</a></li>
									<li class="facebook"><a href="https://www.facebook.com/BrainsOnFire">facebook</a></li>
									<li class="rss"><a href="http://feeds.feedburner.com/BrainsOnFireBlog">rss</a></li>
									<li class="pinterest"><a href="http://pinterest.com/brainsonfire/">pinterest</a></li>
									<li class="slideshare"><a href="http://www.slideshare.net/genochurch">slideshare</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				
				<section id="form">
					<div class="row">
						<h1>Email us</h1>
						<p>By typing away in the form below.</p>
						<form action="#">
							<div class="row">
								<label for="name">
									<span>Name (required)</span>
									<input id="name" name="name" type="text" />
								</label>
							</div>
							<div class="row">
								<label for="email">
									<span>Email (required) - we’ll keep this private</span>
									<input id="email" name="email" type="email" />
								</label>
							</div>
							<div class="row">
								<label for="phone">
									<span>Phone Number</span>
									<input id="phone" name="phone" type="tel" />
								</label>
							</div>
							<div class="row select-style">
								<label for="topic">
									<span>Choose a Topic (required)</span>
									<select id="topic">
										<option value="">-- Select a Time --</option>
										<option value="">1</option>
										<option value="">2</option>
										<option value="">3</option>
									</select>
								</label>
							</div>
							<div class="row">
								<label for="message">
									<textarea id="message"></textarea>
								</label>
							</div>
							<div class="row submit">
								<button class="button btn-orange" type="submit">submit form</button>
							</div>
						</form>
					</div>
				</section>

				<div id="map">
					<img src="images/hello/hello_map.jpg" alt="">
				</div>

			</main>
			
			<footer id="footer">
				<div class="footer-bottom">
					<div class="row">
						<ul>
							<li>Copyright Brains On Fire 2013</li>
							<li><address>148 River Street, Suite 100 Greenville, SC 29601</address></li>
							<li>Legal Mumjum</li>
							<li>Use Hedley Typeface</li>
						</ul>
					</div>
				</div>
			</footer>
			
		</div>
	</div>

	<?php include("inc/js.php"); ?>

	<!-- TEMP ADD CURRENT CLASS TO NAVIGATION -->
	<script>
		$(document).ready(function () {
			$('.secondary-nav li:eq(4)').addClass('current');
		});
	</script>
	
</body>
</html>