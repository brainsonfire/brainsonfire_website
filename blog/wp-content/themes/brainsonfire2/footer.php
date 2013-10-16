			<footer id="footer">
                <a href="#header" class="btn-top">top</a>
                <div class="footer-holder">
                	<?php if(is_active_sidebar('contact-info')): dynamic_sidebar('contact-info'); endif; ?>
                    <?php if(is_active_sidebar('social-network')): ?>
                    <div class="social-block">
                    	<?php dynamic_sidebar('social-network'); ?>                      
                    </div>
                    <?php endif; ?>
                </div>
                <div class="bottom-block">
                    <div class="holder">
                        <p>Copyright Brains On Fire <?php echo date('Y'); ?>  // 148 River Street, Suite 100 Greenville, SC 29601 // Legal mumjum // Use Hedley Typeface</p>
                    </div>
                </div>
            </footer>
        </div>
		<script type="text/javascript">
			jQuery(document).ready(function() {
				jQuery('.blog article#content .post img').css({
				   'max-width' : '100%',
				   'height' : 'auto'
				});
			});
		</script>
        <?php wp_footer(); ?>
    </body>
</html>