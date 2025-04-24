<?php

/**
 * Plugin Name:       PageCrafter
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       pagecrafter
 *
 * @package CreateBlock
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

function pagecrafter_block_categories($categories, $post)
{
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'Page-Crafter',
				'title' => __('Page Crafter', 'pagecrafter'),
			),
		)
	);
}
add_filter('block_categories_all', 'pagecrafter_block_categories', 10, 2);
// this code is to set category Page_Crafter




function create_block_pagecrafter_block_init()
{

	if (function_exists('wp_register_block_types_from_metadata_collection')) {
		wp_register_block_types_from_metadata_collection(__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php');
		return;
	}

	if (function_exists('wp_register_block_metadata_collection')) {
		wp_register_block_metadata_collection(__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php');
	}
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach (array_keys($manifest_data) as $block_type) {
		register_block_type(__DIR__ . "/build/{$block_type}");
	}
}
add_action('init', 'create_block_pagecrafter_block_init');




function pg_enqueue_assets()
{
	wp_enqueue_script(
		'pg-pagination',
		plugin_dir_url(__FILE__) . 'pagination.js',
		['jquery'],
		'1.0',
		true
	);

	wp_localize_script('pg-pagination', 'pg_ajax_object', [
		'ajax_url' => admin_url('admin-ajax.php'),
		'nonce' => wp_create_nonce('pg_nonce'), // ✅ must match 'pg_nonce' in wp_verify_nonce
	]);


	// Also pass attributes for AJAX reuse
	wp_add_inline_script('pg-pagination-js', 'window.pgBlockAttributes = {};'); // Replace with actual block attributes if needed
}
add_action('wp_enqueue_scripts', 'pg_enqueue_assets');





add_action('wp_ajax_styble_pagination', 'handle_styble_pagination');
add_action('wp_ajax_nopriv_styble_pagination', 'handle_styble_pagination');

function handle_styble_pagination()
{
	// Optional: verify nonce
	if (!isset($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'pg_nonce')) {
		wp_send_json_error('Invalid nonce');
	}

	$paged = intval($_POST['paged']) ?: 1;
	$query = $_POST['data_query'] ?? [];
	$attrs = $_POST['data_attr'] ?? [];

	$query_args = array_merge($query, ['paged' => $paged]);

	$posts = get_posts($query_args);

	ob_start();
	foreach ($posts as $post) {
		setup_postdata($post);
		?>
		<div class="grid-card">
			<h2><?php echo esc_html(get_the_title($post)); ?></h2>
		</div>
		<?php
	}
	wp_reset_postdata();

	$html = ob_get_clean();

	wp_send_json_success($html);
}
