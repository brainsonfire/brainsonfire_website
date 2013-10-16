<aside id="sidebar">
    <?php get_search_form(); ?>
    <ul class="accordion">
        <?php if(is_author()): ?>
        <li>
        	<?php $authordata = get_userdata(get_query_var('author')); ?>
            <h3>author: <a href="http://bof.crowdstaging.com/blog/author/<?php echo strtolower( get_the_author_meta('display_name') ); ?>/"><em><?php echo $authordata->nickname; ?></em></a></h3>
            <a href="#" class="opener">authors: <?php echo $authordata->nickname; ?></a>
            <div class="slide">
                <?php echo get_the_author_meta('description',$authordata->ID);?>
            </div>
        </li>
        <?php endif; ?>
        
        <?php if(is_active_sidebar('archive-sidebar')) : ?>
        <li>
        	<?php dynamic_sidebar('archive-sidebar'); ?>
        </li>
        <?php endif; ?>
    </ul>
</aside>