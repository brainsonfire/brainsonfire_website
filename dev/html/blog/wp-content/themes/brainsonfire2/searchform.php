<?php $sq = get_search_query() ? get_search_query() : __('Type and press enter to search', 'base'); ?>
<form method="get" class="search-form" id="searchform" action="<?php echo home_url(); ?>" >
	<fieldset>
		<input type="text" name="s" value="<?php echo $sq; ?>" />
	</fieldset>
</form>