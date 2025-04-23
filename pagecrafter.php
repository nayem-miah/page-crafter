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




// /**
//  * This function for enqueuing script, styles for block.
//  */
// function nls_book_block_assets_enqueue()
// {
//     wp_enqueue_script('nls_block_front_script', plugin_dir_url(__FILE__) . 'src/Post-grid/jq.js', array('jquery'), '1.0.0', true);
//     wp_localize_script('nls_block_front_script', 'frontend_ajax', array('ajax_url' => admin_url('admin-ajax.php')));
// }
// add_action('enqueue_block_assets', 'nls_book_block_assets_enqueue');



add_action('wp_ajax_nopriv_pg_ajax_posts', 'pg_ajax_posts_callback');
add_action('wp_ajax_pg_ajax_posts', 'pg_ajax_posts_callback');

function pg_ajax_posts_callback()
{
	// You can validate nonce here if needed
	$attributes = json_decode(stripslashes($_POST['attributes']), true);
	try {
		include plugin_dir_path(__FILE__) . 'src/Post-grid/render.php';
	} catch (Throwable $e) {
		error_log($e->getMessage());
		wp_send_json_error(['error' => $e->getMessage()]);
	}


	wp_die();
}


function pg_enqueue_assets()
{
	wp_enqueue_script('pg-pagination-js', plugin_dir_url(__FILE__) . 'pagination.js', [], null, true);
	wp_localize_script('pg-pagination-js', 'pg_ajax_object', [
		'ajax_url' => admin_url('admin-ajax.php'),
	]);


	// Also pass attributes for AJAX reuse
	wp_add_inline_script('pg-pagination-js', 'window.pgBlockAttributes = {};'); // Replace with actual block attributes if needed
}
add_action('wp_enqueue_scripts', 'pg_enqueue_assets');
