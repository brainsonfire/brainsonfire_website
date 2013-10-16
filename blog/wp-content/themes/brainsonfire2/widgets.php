<?php

// Custom Text Widget without <div>
class Custom_Widget_Text extends WP_Widget {

	function Custom_Widget_Text() {
		$widget_ops = array('classname' => 'widget_text', 'description' => __('Arbitrary text or HTML', 'base'));
		$control_ops = array('width' => 400, 'height' => 350);
		$this->WP_Widget('text', __('Text', 'base'), $widget_ops, $control_ops);
	}

	function widget( $args, $instance ) {
		extract($args);
		$title = apply_filters( 'widget_title', empty($instance['title']) ? '' : $instance['title'], $instance, $this->id_base);
		$text = apply_filters( 'widget_text', $instance['text'], $instance );
		echo $before_widget;
		if ( !empty( $title ) ) { echo $before_title . $title . $after_title; } ?>
			<?php echo $instance['filter'] ? wpautop($text) : $text; ?>
		<?php
		echo $after_widget;
	}

	function update( $new_instance, $old_instance ) {
		$instance = $old_instance;
		$instance['title'] = strip_tags($new_instance['title']);
		if ( current_user_can('unfiltered_html') )
			$instance['text'] =  $new_instance['text'];
		else
			$instance['text'] = stripslashes( wp_filter_post_kses( addslashes($new_instance['text']) ) ); // wp_filter_post_kses() expects slashed
		$instance['filter'] = isset($new_instance['filter']);
		return $instance;
	}

	function form( $instance ) {
		$instance = wp_parse_args( (array) $instance, array( 'title' => '', 'text' => '' ) );
		$title = strip_tags($instance['title']);
		$text = esc_textarea($instance['text']);
?>
		<p><label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:', 'base'); ?></label>
		<input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo esc_attr($title); ?>" /></p>

		<textarea class="widefat" rows="16" cols="20" id="<?php echo $this->get_field_id('text'); ?>" name="<?php echo $this->get_field_name('text'); ?>"><?php echo $text; ?></textarea>

		<p><input id="<?php echo $this->get_field_id('filter'); ?>" name="<?php echo $this->get_field_name('filter'); ?>" type="checkbox" <?php checked(isset($instance['filter']) ? $instance['filter'] : 0); ?> />&nbsp;<label for="<?php echo $this->get_field_id('filter'); ?>"><?php _e('Automatically add paragraphs', 'base'); ?></label></p>
<?php
	}
}

add_action('widgets_init', create_function('', 'return register_widget("Custom_Widget_Text");'));


//Custom widget Recent Posts From Specific Category
class Widget_Recent_Posts_From_Category extends WP_Widget {

    function __construct() {
        $widget_ops = array('classname' => 'widget_recent_entries_from_category', 'description' => __( 'The most recent posts from specific category on your site', 'base') );
        parent::__construct('recent-posts-from-category', __('Recent Posts From Specific Category', 'base'), $widget_ops);
        $this->alt_option_name = 'widget_recent_entries_from_category';

        add_action( 'save_post', array(&$this, 'flush_widget_cache') );
        add_action( 'deleted_post', array(&$this, 'flush_widget_cache') );
        add_action( 'switch_theme', array(&$this, 'flush_widget_cache') );
    }

    function widget($args, $instance) {
        $cache = wp_cache_get('widget_recent_posts_from_category', 'widget');

        if ( !is_array($cache) )
            $cache = array();

        if ( isset($cache[$args['widget_id']]) ) {
            echo $cache[$args['widget_id']];
            return;
        }

        ob_start();
        extract($args);

        $title = apply_filters('widget_title', empty($instance['title']) ? __('Recent Posts', 'base') : $instance['title'], $instance, $this->id_base);
        if ( ! $number = absint( $instance['number'] ) )
             $number = 10;

        $r = new WP_Query(array('posts_per_page' => $number, 'no_found_rows' => true, 'post_status' => 'publish', 'ignore_sticky_posts' => true, 'cat' => $instance['cat']));
        if ($r->have_posts()) :
?>
<?php echo $before_widget; ?>
<?php if ( $title ) echo $before_title . $title . $after_title; ?>
<ul>
<?php  while ($r->have_posts()) : $r->the_post(); ?>
<li><a href="<?php the_permalink() ?>" title="<?php echo esc_attr(get_the_title() ? get_the_title() : get_the_ID()); ?>"><?php if ( get_the_title() ) the_title(); else the_ID(); ?></a></li>
<?php endwhile; ?>
</ul>
<?php echo $after_widget; ?>
<?php
        // Reset the global $the_post as this query will have stomped on it
        wp_reset_postdata();

        endif;

        $cache[$args['widget_id']] = ob_get_flush();
        wp_cache_set('widget_recent_posts_from_category', $cache, 'widget');
    }

    function update( $new_instance, $old_instance ) {
        $instance = $old_instance;
        $instance['title'] = strip_tags($new_instance['title']);
        $instance['number'] = (int) $new_instance['number'];
        $instance['cat'] = (int) $new_instance['cat'];
        $this->flush_widget_cache();

        $alloptions = wp_cache_get( 'alloptions', 'options' );
        if ( isset($alloptions['widget_recent_entries_from_category']) )
            delete_option('widget_recent_entries_from_category');

        return $instance;
    }

    function flush_widget_cache() {
        wp_cache_delete('widget_recent_posts_from_category', 'widget');
    }

    function form( $instance ) {
        $title = isset($instance['title']) ? esc_attr($instance['title']) : '';
        $number = isset($instance['number']) ? absint($instance['number']) : 5;
        $cat = $instance['cat'];
?>
<p><label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:', 'base'); ?></label>
<input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo $title; ?>" /></p>

<p>
<label>
<?php _e( 'Category', 'base' ); ?>:
<?php wp_dropdown_categories( array( 'name' => $this->get_field_name("cat"), 'selected' => $instance["cat"] ) ); ?>
</label>
</p>

<p><label for="<?php echo $this->get_field_id('number'); ?>"><?php _e('Number of posts to show:', 'base'); ?></label>
<input id="<?php echo $this->get_field_id('number'); ?>" name="<?php echo $this->get_field_name('number'); ?>" type="text" value="<?php echo $number; ?>" size="3" /></p>
<?php
    }
}

add_action('widgets_init', create_function('', 'return register_widget("Widget_Recent_Posts_From_Category");')); 


class Custom_WP_Widget_Categories extends WP_Widget {

	function __construct() {
		$widget_ops = array( 'classname' => 'widget_categories', 'description' => __( "A list or dropdown of categories" ) );
		parent::__construct('categories', __('Categories'), $widget_ops);
	}

	function widget( $args, $instance ) {
		extract( $args );

		$title = apply_filters('widget_title', empty( $instance['title'] ) ? __( 'Categories' ) : $instance['title'], $instance, $this->id_base);
		$c = ! empty( $instance['count'] ) ? '1' : '0';
		$h = ! empty( $instance['hierarchical'] ) ? '1' : '0';
		$d = ! empty( $instance['dropdown'] ) ? '1' : '0';

		echo $before_widget;
		if ($title) 
		{
			echo $before_title . $title . $after_title;
			echo '<a href="#" class="opener">'.$title.'</a>';
		}

		$cat_args = array('orderby' => 'name', 'show_count' => $c, 'hierarchical' => $h);

		if ( $d ) {
			$cat_args['show_option_none'] = __('Select Category');
			wp_dropdown_categories(apply_filters('widget_categories_dropdown_args', $cat_args));
?>

<script type='text/javascript'>
/* <![CDATA[ */
	var dropdown = document.getElementById("cat");
	function onCatChange() {
		if ( dropdown.options[dropdown.selectedIndex].value > 0 ) {
			location.href = "<?php echo home_url(); ?>/?cat="+dropdown.options[dropdown.selectedIndex].value;
		}
	}
	dropdown.onchange = onCatChange;
/* ]]> */
</script>

<?php
		} else {
?>
		<div class="slide">
        <ul>
<?php
		$cat_args['title_li'] = '';
		
		//wp_list_categories(apply_filters('widget_categories_args', $cat_args));
		$categories = get_categories('pad_counts=0'); 
		foreach ($categories as $category)
		{
?>
			<li><a href="<?php echo get_category_link( $category->term_id ); ?>"><?php echo $category->cat_name; ?> (<?php echo $category->category_count; ?>)</a></li>
<?php
		}
?>
		</ul>
        </div>
<?php
		}

		echo $after_widget;
	}

	function update( $new_instance, $old_instance ) {
		$instance = $old_instance;
		$instance['title'] = strip_tags($new_instance['title']);
		$instance['count'] = !empty($new_instance['count']) ? 1 : 0;
		$instance['hierarchical'] = !empty($new_instance['hierarchical']) ? 1 : 0;
		$instance['dropdown'] = !empty($new_instance['dropdown']) ? 1 : 0;

		return $instance;
	}

	function form( $instance ) {
		//Defaults
		$instance = wp_parse_args( (array) $instance, array( 'title' => '') );
		$title = esc_attr( $instance['title'] );
		$count = isset($instance['count']) ? (bool) $instance['count'] :false;
		$hierarchical = isset( $instance['hierarchical'] ) ? (bool) $instance['hierarchical'] : false;
		$dropdown = isset( $instance['dropdown'] ) ? (bool) $instance['dropdown'] : false;
?>
		<p><label for="<?php echo $this->get_field_id('title'); ?>"><?php _e( 'Title:' ); ?></label>
		<input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo $title; ?>" /></p>

		<p><input type="checkbox" class="checkbox" id="<?php echo $this->get_field_id('dropdown'); ?>" name="<?php echo $this->get_field_name('dropdown'); ?>"<?php checked( $dropdown ); ?> />
		<label for="<?php echo $this->get_field_id('dropdown'); ?>"><?php _e( 'Display as dropdown' ); ?></label><br />

		<input type="checkbox" class="checkbox" id="<?php echo $this->get_field_id('count'); ?>" name="<?php echo $this->get_field_name('count'); ?>"<?php checked( $count ); ?> />
		<label for="<?php echo $this->get_field_id('count'); ?>"><?php _e( 'Show post counts' ); ?></label><br />

		<input type="checkbox" class="checkbox" id="<?php echo $this->get_field_id('hierarchical'); ?>" name="<?php echo $this->get_field_name('hierarchical'); ?>"<?php checked( $hierarchical ); ?> />
		<label for="<?php echo $this->get_field_id('hierarchical'); ?>"><?php _e( 'Show hierarchy' ); ?></label></p>
<?php
	}

}
add_action('widgets_init', create_function('', 'return register_widget("Custom_WP_Widget_Categories");')); 

class Custom_WP_Widget_Links extends WP_Widget {

	function __construct() {
		$widget_ops = array('description' => __( "Your blogroll" ) );
		parent::__construct('links', __('Links'), $widget_ops);
	}

	function widget( $args, $instance ) {
		extract($args, EXTR_SKIP);

		$show_description = isset($instance['description']) ? $instance['description'] : false;
		$show_name = isset($instance['name']) ? $instance['name'] : false;
		$show_rating = isset($instance['rating']) ? $instance['rating'] : false;
		$show_images = isset($instance['images']) ? $instance['images'] : true;
		$category = isset($instance['category']) ? $instance['category'] : false;
		$orderby = isset( $instance['orderby'] ) ? $instance['orderby'] : 'name';
		$order = $orderby == 'rating' ? 'DESC' : 'ASC';
		$limit = isset( $instance['limit'] ) ? $instance['limit'] : -1;

		
		$title = apply_filters('widget_title', empty( $instance['title'] ) ? __( '' ) : $instance['title'], $instance, $this->id_base);			
		$before_widget = preg_replace('/id="[^"]*"/','id="%id"', $before_widget);
		echo $before_widget;
		//echo '<h3>Kindred Spirits</h3>' ;
		echo '<a href="#" class="opener">Kindred Spirits</a>' ;			
		
		echo '<div class="slide">
		      <ul>';
		wp_list_bookmarks(apply_filters('widget_links_args', array(
			'title_li' => '','title_before' => $before_title, 'title_after' => $after_title,
			'category_before' => $before_widget, 'category_after' => $after_widget,
			'show_images' => $show_images, 'show_description' => $show_description,
			'show_name' => $show_name, 'show_rating' => $show_rating,
			'category' => $category, 'class' => 'linkcat widget',
			'orderby' => $orderby, 'order' => $order,
			'limit' => $limit,
		)));
		echo '</ul></div>';
	}

	function update( $new_instance, $old_instance ) {
		$new_instance = (array) $new_instance;
		$instance['title'] = strip_tags($new_instance['title']);
		$instance = array( 'images' => 0, 'name' => 0, 'description' => 0, 'rating' => 0 );
		foreach ( $instance as $field => $val ) {
			if ( isset($new_instance[$field]) )
				$instance[$field] = 1;
		}

		$instance['orderby'] = 'name';
		if ( in_array( $new_instance['orderby'], array( 'name', 'rating', 'id', 'rand' ) ) )
			$instance['orderby'] = $new_instance['orderby'];

		$instance['category'] = intval( $new_instance['category'] );
		$instance['limit'] = ! empty( $new_instance['limit'] ) ? intval( $new_instance['limit'] ) : -1;

		return $instance;
	}

	function form( $instance ) {

		//Defaults
		$gettitle = $instance['title'];
		$instance = wp_parse_args( (array) $instance, array( 'images' => true, 'name' => true, 'description' => false, 'rating' => false, 'category' => false, 'orderby' => 'name', 'limit' => -1 ) );
		$link_cats = get_terms( 'link_category' );
		if ( ! $limit = intval( $instance['limit'] ) )
			$limit = -1;
?>
		<p><label for="<?php echo $this->get_field_id('title1'); ?>"><?php _e( 'Title:' ); ?></label>
		<input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo $gettitle; ?>" /></p>
        
        <p>
		<label for="<?php echo $this->get_field_id('category'); ?>"><?php _e( 'Select Link Category:' ); ?></label>
		<select class="widefat" id="<?php echo $this->get_field_id('category'); ?>" name="<?php echo $this->get_field_name('category'); ?>">
		<option value=""><?php _ex('All Links', 'links widget'); ?></option>
		<?php
		foreach ( $link_cats as $link_cat ) {
			echo '<option value="' . intval( $link_cat->term_id ) . '"'
				. selected( $instance['category'], $link_cat->term_id, false )
				. '>' . $link_cat->name . "</option>\n";
		}
		?>
		</select>
		<label for="<?php echo $this->get_field_id('orderby'); ?>"><?php _e( 'Sort by:' ); ?></label>
		<select name="<?php echo $this->get_field_name('orderby'); ?>" id="<?php echo $this->get_field_id('orderby'); ?>" class="widefat">
			<option value="name"<?php selected( $instance['orderby'], 'name' ); ?>><?php _e( 'Link title' ); ?></option>
			<option value="rating"<?php selected( $instance['orderby'], 'rating' ); ?>><?php _e( 'Link rating' ); ?></option>
			<option value="id"<?php selected( $instance['orderby'], 'id' ); ?>><?php _e( 'Link ID' ); ?></option>
			<option value="rand"<?php selected( $instance['orderby'], 'rand' ); ?>><?php _ex( 'Random', 'Links widget' ); ?></option>
		</select>
		</p>
		<p>
		<input class="checkbox" type="checkbox" <?php checked($instance['images'], true) ?> id="<?php echo $this->get_field_id('images'); ?>" name="<?php echo $this->get_field_name('images'); ?>" />
		<label for="<?php echo $this->get_field_id('images'); ?>"><?php _e('Show Link Image'); ?></label><br />
		<input class="checkbox" type="checkbox" <?php checked($instance['name'], true) ?> id="<?php echo $this->get_field_id('name'); ?>" name="<?php echo $this->get_field_name('name'); ?>" />
		<label for="<?php echo $this->get_field_id('name'); ?>"><?php _e('Show Link Name'); ?></label><br />
		<input class="checkbox" type="checkbox" <?php checked($instance['description'], true) ?> id="<?php echo $this->get_field_id('description'); ?>" name="<?php echo $this->get_field_name('description'); ?>" />
		<label for="<?php echo $this->get_field_id('description'); ?>"><?php _e('Show Link Description'); ?></label><br />
		<input class="checkbox" type="checkbox" <?php checked($instance['rating'], true) ?> id="<?php echo $this->get_field_id('rating'); ?>" name="<?php echo $this->get_field_name('rating'); ?>" />
		<label for="<?php echo $this->get_field_id('rating'); ?>"><?php _e('Show Link Rating'); ?></label>
		</p>
		<p>
		<label for="<?php echo $this->get_field_id('limit'); ?>"><?php _e( 'Number of links to show:' ); ?></label>
		<input id="<?php echo $this->get_field_id('limit'); ?>" name="<?php echo $this->get_field_name('limit'); ?>" type="text" value="<?php echo $limit == -1 ? '' : intval( $limit ); ?>" size="3" />
		</p>
<?php
	}
}
add_action('widgets_init', create_function('', 'return register_widget("Custom_WP_Widget_Links");')); 

//Custom widget Recent Posts From Specific Category
class Widget_List_of_Authors extends WP_Widget {

    function __construct() {
        $widget_ops = array('classname' => 'widget_list_of_authors', 'description' => __( 'List of Authors', 'base') );
        parent::__construct('list-of-authours', __('List of Authours', 'base'), $widget_ops);
        $this->alt_option_name = 'widget_list_of_authors';

        add_action( 'save_post', array(&$this, 'flush_widget_cache') );
        add_action( 'deleted_post', array(&$this, 'flush_widget_cache') );
        add_action( 'switch_theme', array(&$this, 'flush_widget_cache') );
    }

    function widget($args, $instance) {
        $cache = wp_cache_get('widget_recent_posts_from_category', 'widget');

        if ( !is_array($cache) )
            $cache = array();

        if ( isset($cache[$args['widget_id']]) ) {
            echo $cache[$args['widget_id']];
            return;
        }

        ob_start();
        extract($args);

        $title = apply_filters('widget_title', empty($instance['title']) ? __('Recent Posts', 'base') : $instance['title'], $instance, $this->id_base);
        if ( ! $number = absint( $instance['number'] ) )
             $number = 10;

      global $wpdb;
 
	$authors = $wpdb->get_results("SELECT ID, user_nicename from $wpdb->users ORDER BY display_name");

	  if ($authors) :
?>
<?php echo $before_widget; ?>
<?php if ( $title )
{
	 echo $before_title . $title . $after_title;
	 echo '<a href="#" class="opener">'.$title.'</a>';
}?>
<div class="slide">
<ul>
<?php  foreach($authors as $author): ?>
	<?php $authorposts = get_posts('author='.$author->ID.'&showposts=-1'); ?>
	<?php if (count($authorposts) > 0): ?>
<li>
	<a href="<?php echo get_bloginfo('url').'/?author='.$author->ID;  ?>" ><?php the_author_meta('display_name', $author->ID); ?> (<?php echo count($authorposts)?>)</a>
</li>
<?php endif; ?>
<?php endforeach; ?>
</ul>
</div>
<?php echo $after_widget; ?>
<?php
        // Reset the global $the_post as this query will have stomped on it       

        endif;

        $cache[$args['widget_id']] = ob_get_flush();
        wp_cache_set('widget_recent_posts_from_category', $cache, 'widget');
    }

    function update( $new_instance, $old_instance ) {
        $instance = $old_instance;
        $instance['title'] = strip_tags($new_instance['title']);
        $instance['number'] = (int) $new_instance['number'];
        $instance['cat'] = (int) $new_instance['cat'];
        $this->flush_widget_cache();

        $alloptions = wp_cache_get( 'alloptions', 'options' );
        if ( isset($alloptions['widget_recent_entries_from_category']) )
            delete_option('widget_recent_entries_from_category');

        return $instance;
    }

    function flush_widget_cache() {
        wp_cache_delete('widget_recent_posts_from_category', 'widget');
    }

    function form( $instance ) {
        $title = isset($instance['title']) ? esc_attr($instance['title']) : '';
        $number = isset($instance['number']) ? absint($instance['number']) : 5;
        $cat = $instance['cat'];
?>
<p><label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:', 'base'); ?></label>
<input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo $title; ?>" /></p>

<?php
    }
}

add_action('widgets_init', create_function('', 'return register_widget("Widget_List_of_Authors");')); 

class Custom_WP_Widget_Archives extends WP_Widget {

	function __construct() {
		$widget_ops = array('classname' => 'widget_archive', 'description' => __( 'A monthly archive of your site&#8217;s posts') );
		parent::__construct('archives', __('Archives'), $widget_ops);
	}

	function widget( $args, $instance ) {
		extract($args);
		$c = ! empty( $instance['count'] ) ? '1' : '0';
		$d = ! empty( $instance['dropdown'] ) ? '1' : '0';
		$title = apply_filters('widget_title', empty($instance['title']) ? __('Archives') : $instance['title'], $instance, $this->id_base);

		echo '<ul class="accordion">' ;
		echo '<li>' ;
		
		if ( $title )
		{
			echo $before_title . $title . $after_title;
			echo '<a href="#" class="opener">'.$title.'</a>';
		}

		if ( $d ) {
?>
		<select name="archive-dropdown" onchange='document.location.href=this.options[this.selectedIndex].value;'> <option value=""><?php echo esc_attr(__('Select Month')); ?></option> <?php wp_get_archives(apply_filters('widget_archives_dropdown_args', array('type' => 'monthly', 'format' => 'option', 'show_post_count' => $c))); ?> </select>
<?php
		} else {
?>
		<div class="slide">
			<ul class="month-list">
				<?php
					global $wpdb;
					$counter = 1; 
					$limit = 0;
					$year_prev = null;
					$years = $wpdb->get_results("SELECT YEAR(post_date) AS `year` FROM $wpdb->posts WHERE post_status = 'publish' and post_date <= now( ) and post_type = 'post' GROUP BY YEAR(post_date) ORDER BY post_date $order");
					foreach($years as $year)
					{
				?>
                		<li>
                            <strong class="title"><?php echo $year->year; ?></strong>
                            <ul>
                            	<?php for($i=1; $i<=12; $i++): ?>
                                	<?php
                                    	if($i<10)
										{
											$monthnumber = '0'.$i ;
										}
										else
										{
											$monthnumber = $i ;
										}
										$checkmontposts = get_posts('year='.$year->year.'&monthnum='.$monthnumber); 
									?>
                                    
                                    <?php if(count($checkmontposts)>0): ?>
	                                	<li><a href="<?php echo get_month_link($year->year, $monthnumber); ?>"><?php echo $i; ?></a></li>
                                    <?php else: ?>  
                                    	<li><span><?php echo $i; ?></span></li>  
                                    <?php endif; ?>
                                <?php endfor; ?>
                            </ul>
                        </li>
                <?php } ?>
			</ul>
		</div>
<?php
		}

		echo '</li></ul>' ;
	}

	function update( $new_instance, $old_instance ) {
		$instance = $old_instance;
		$new_instance = wp_parse_args( (array) $new_instance, array( 'title' => '', 'count' => 0, 'dropdown' => '') );
		$instance['title'] = strip_tags($new_instance['title']);
		$instance['count'] = $new_instance['count'] ? 1 : 0;
		$instance['dropdown'] = $new_instance['dropdown'] ? 1 : 0;

		return $instance;
	}

	function form( $instance ) {
		$instance = wp_parse_args( (array) $instance, array( 'title' => '', 'count' => 0, 'dropdown' => '') );
		$title = strip_tags($instance['title']);
		$count = $instance['count'] ? 'checked="checked"' : '';
		$dropdown = $instance['dropdown'] ? 'checked="checked"' : '';
?>
		<p><label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:'); ?></label> <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo esc_attr($title); ?>" /></p>
		<p>
			<input class="checkbox" type="checkbox" <?php echo $dropdown; ?> id="<?php echo $this->get_field_id('dropdown'); ?>" name="<?php echo $this->get_field_name('dropdown'); ?>" /> <label for="<?php echo $this->get_field_id('dropdown'); ?>"><?php _e('Display as dropdown'); ?></label>
			<br/>
			<input class="checkbox" type="checkbox" <?php echo $count; ?> id="<?php echo $this->get_field_id('count'); ?>" name="<?php echo $this->get_field_name('count'); ?>" /> <label for="<?php echo $this->get_field_id('count'); ?>"><?php _e('Show post counts'); ?></label>
		</p>
<?php
	}
}
add_action('widgets_init', create_function('', 'return register_widget("Custom_WP_Widget_Archives");')); 
?>