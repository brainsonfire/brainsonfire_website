<?php
/*
YARPP Template: Custom
Description: Requires a theme which supports post thumbnails
Author: mitcho (Michael Yoshitaka Erlewine)
*/ ?>
<h3>Related Posts</h3>
<a href="#" class="opener">Related Posts</a>
<div class="slide">
	<?php if (have_posts()):?>
    <ul class="post-list">
    	<?php while (have_posts()) : the_post(); ?>
        <li>
            <?php if(has_post_thumbnail()): ?>
                <?php $image_url = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()), 'related-post-thumbnail');?>
            	<div class="img-box"><a href="<?php the_permalink(); ?>"><img src="<?php echo $image_url[0]; ?>" alt="image description"></a></div>
			<?php endif; ?>
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </li>
        <?php endwhile; ?>
    </ul>
    <?php else: ?>
    <p>No related photos.</p>
    <?php endif; ?>
</div>





