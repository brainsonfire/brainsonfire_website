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
			
			<section id="cta">
				<div class="row">
					<div class="videoHolder">
						<iframe></iframe>
					</div>
					
					<div class="cta">
						<div class="row">
							<span class="call">Give Us a Call!</span>
							<a class="tel fnc-tel" href="tel:864-676-9663">864-676-9663</a>
						</div>
						<div class="row">
							<span class="text-online">Connect</span>
							<ul class="social-networks">
								<li class="twitter">
									<a href="https://twitter.com/BrainsOnFire">twitter</a>
								</li>
								<li class="instagram">
									<a href="http://instagram.com/bofagram">instagram</a>
								</li>
								<li class="facebook">
									<a href="https://www.facebook.com/BrainsOnFire">facebook</a>
								</li>
								<li class="rss">
									<a href="http://feeds.feedburner.com/BrainsOnFireBlog">rss</a>
								</li>
								<li class="pinterest">
									<a href="http://pinterest.com/brainsonfire/">pinterest</a>
								</li>
								<li class="slideshare">
									<a href="http://www.slideshare.net/genochurch">slideshare</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			
			<section>
				<div class="row">
					<h1>Email us</h1>
					<p>By typing away in the form below.</p>
					<form action="#">
						
						<div class="row">
							<div class="large-8 columns">
								<label>
									<input id="name" type="text" />
									<span>Name (required)</span>
								</label>
							</div>
						</div>

						<div class="row">
							<div class="large-8 columns">
								<label>
									<input id="email" type="email" />
									<span>Email (required) - we’ll keep this private</span>
								</label>
							</div>
						</div>
						<div class="row">
							<div class="large-8 columns">
								<label>
									<input id="phone" type="tel" />
									<span>Phone Number</span>
								</label>
							</div>
						</div>

						<div class="row">
							<div class="large-8 columns">
								<label>
									<select>
										<option value="">-- Select a Time --</option>
										<option value="">1</option>
										<option value="">2</option>
										<option value="">3</option>
									</select>
									<span>Choose a Topic (required)</span>
								</label>
							</div>
						</div>
						<div class="row">
							<div class="large-12 columns">
								<label>
									<textarea placeholder="small-12 columns"></textarea>
								</label>
							</div>
						</div>
						<div class="row">
							<button class="button btn-orange" type="submit">submit form</button>
						</div>
					</form>
				</div>
			</section>

			<section id="map">
				<div class="row">
					<div class="mapHolder">
						<iframe></iframe>
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