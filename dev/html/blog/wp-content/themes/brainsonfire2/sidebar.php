<aside id="sidebar">
	<?php get_search_form(); ?>
    
    <?php if (is_active_sidebar('default-sidebar')) : ?>
    <ul class="accordion">
    	<?php dynamic_sidebar('default-sidebar'); ?>                
    </ul>
    <?php endif; ?>
</aside>