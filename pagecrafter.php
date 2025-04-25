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




//--------------------------------------------enqueue script for pagination----------------------------------

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
		'nonce' => wp_create_nonce('pg_nonce'), // Nonce for security
	]);


	// Also pass attributes for AJAX reuse
	wp_add_inline_script('pg-pagination-js', 'window.pgBlockAttributes = {};'); // Replace with actual block attributes if needed
}
add_action('wp_enqueue_scripts', 'pg_enqueue_assets');




//-------------------------------------------- trancate content function 30 words----------------------------------`
if (!function_exists('truncate_excerpt')) {
	function truncate_excerpt($excerpt, $word_limit = 30)
	{
		if (empty($excerpt)) {
			return '';
		}
		$excerpt = wp_strip_all_tags($excerpt);
		$words = explode(' ', $excerpt);

		if (count($words) <= $word_limit) {
			return implode(' ', $words);
		}
		$truncated = array_slice($words, 0, $word_limit);
		return implode(' ', $truncated) . '...';
	}
}



//-------------------------------------------pagination handler this function will run when paginate----------------------------------

add_action('wp_ajax_pagination', 'handle_pagination');
add_action('wp_ajax_nopriv_pagination', 'handle_pagination'); // For non-logged-in users

function handle_pagination() {
	// Optional: verify nonce
	if (!isset($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'pg_nonce')) {
		wp_send_json_error('Invalid nonce');
	}

	$paged = intval($_POST['paged']) ?: 1;
	$query = $_POST['data_query'] ?? [];
	$attrs = $_POST['data_attr'] ?? [];

	$query_args = array_merge($query, ['paged' => $paged]);

	$posts = get_posts($query_args);
	$attributes = $attrs;

	$posts_per_page = !empty($attributes['numberOfPosts']) ? intval($attributes['numberOfPosts']) : 5;
	$total_posts = wp_count_posts()->publish;
	$pagination = $posts_per_page > 0 ? ceil($total_posts / $posts_per_page) : 1;
	ob_start();
	?>

<div class="post-grid-wrapper" style="
        gap: <?php echo esc_attr($attributes['columnGap'] ?? 20); ?>px;
        --columns: <?php echo esc_attr($attributes['columns'] ?? 3); ?>;
    ">

    <?php foreach ($posts as $post) {
					setup_postdata($post);
					?>
    <div class="grid-card" style="
								--card-bg: <?php echo esc_attr($attributes['contentBackground'] ?? '#fff'); ?>;
								--card-bg-hover: <?php echo esc_attr($attributes['contentBackgroundHover'] ?? '#f5f5f5'); ?>;
							">
        <?php if (has_post_thumbnail($post) && $attributes['displayImage'] !== false && $attributes['displayImage'] !== 'false'): ?>
        <div class="post-grid-thumbnail">
            <?php echo get_the_post_thumbnail($post, 'medium'); ?>
        </div>
        <?php endif; ?>

        <div class="content-body" style="
									padding: <?php echo esc_attr($attributes['contentPadding']['top'] ?? 0) . ' ' .
												esc_attr($attributes['contentPadding']['right'] ?? 0) . ' ' .
												esc_attr($attributes['contentPadding']['bottom'] ?? 0) . ' ' .
												esc_attr($attributes['contentPadding']['left'] ?? 0); ?>;
									margin: <?php echo esc_attr($attributes['contentMargin']['top'] ?? 0) . ' ' .
												esc_attr($attributes['contentMargin']['right'] ?? 0) . ' ' .
												esc_attr($attributes['contentMargin']['bottom'] ?? 0) . ' ' .
												esc_attr($attributes['contentMargin']['left'] ?? 0); ?>;
								">

            <?php if ($attributes['showTitle'] !== false && $attributes['showTitle'] !== 'false'): ?>
            <div class="post-grid-title">
                <h5 style="text-align: <?php echo esc_attr($attributes['contentAlignment'] ?? 'left'); ?>;">
                    <a href="<?php the_permalink($post); ?>" style="
													--titleColor: <?php echo esc_attr($attributes['titleColor'] ?? '#000'); ?>;
													--titleHoverColor: <?php echo esc_attr($attributes['titleHoverColor'] ?? '#555'); ?>;
												">
                        <?php echo esc_html(get_the_title($post)); ?>
                    </a>
                </h5>
            </div>
            <?php endif; ?>

            <?php if ($attributes['showMeta'] !== false && $attributes['showMeta'] !== 'false'): ?>
            <div class="post-grid-meta" style="
											--metaTextAlign: <?php echo esc_attr($attributes['contentAlignment'] ?? 'left'); ?>;
											--metaHoverColor: <?php echo esc_attr($attributes['metaHoverColor'] ?? '#999'); ?>;
											--metaColor: <?php echo esc_attr($attributes['metaColor'] ?? '#777'); ?>;
											--metaMarginTop: <?php echo esc_attr($attributes['metaMargin']['top'] ?? '10px'); ?>;
											--metaMarginBottom: <?php echo esc_attr($attributes['metaMargin']['bottom'] ?? '10px'); ?>;
											--metaMarginLeft: <?php echo esc_attr($attributes['metaMargin']['left'] ?? '0'); ?>;
											--metaMarginRight: <?php echo esc_attr($attributes['metaMargin']['right'] ?? '0'); ?>;
										">
                <span>By <?php echo esc_html(get_the_author_meta('display_name', $post->post_author)); ?></span>
                <time datetime="<?php echo esc_attr(get_the_date('c', $post)); ?>">
                    <?php echo esc_html(get_the_date('', $post)); ?>
                </time>
            </div>
            <?php endif; ?>

            <?php if ($attributes['showExcerpt'] !== false && $attributes['showExcerpt'] !== 'false'): ?>
            <div class="post-grid-excerpt"
                style="text-align: <?php echo esc_attr($attributes['contentAlignment'] ?? 'left'); ?>;">
                <p><?php echo esc_html(truncate_excerpt(get_the_excerpt($post), $attributes['excerptMaxWords'] ?? 30)); ?>
                </p>
            </div>
            <?php endif; ?>

            <?php if ($attributes['readMore'] !== false && $attributes['readMore'] !== 'false'): ?>
            <div class="post-grid-btn"
                style="text-align: <?php echo esc_attr($attributes['readMoreAlignment'] ?? 'left'); ?>;">
                <a href="<?php the_permalink($post); ?>" class="read-more-link" style="
												--readMoreColor: <?php echo esc_attr($attributes['readMoreColor'] ?? '#fff'); ?>;
												--readMoreBackground: <?php echo esc_attr($attributes['readMoreBackground'] ?? '#0073aa'); ?>;
												--readMoreColorHover: <?php echo esc_attr($attributes['readMoreColorHover'] ?? '#fff'); ?>;
												--readMoreBackgroundHover: <?php echo esc_attr($attributes['readMoreBackgroundHover'] ?? '#005177'); ?>;
												--readMorePaddingTop: <?php echo esc_attr($attributes['readMorePadding']['top'] ?? '0px'); ?>;
												--readMorePaddingRight: <?php echo esc_attr($attributes['readMorePadding']['right'] ?? '0px'); ?>;
												--readMorePaddingBottom: <?php echo esc_attr($attributes['readMorePadding']['bottom'] ?? '0px'); ?>;
												--readMorePaddingLeft: <?php echo esc_attr($attributes['readMorePadding']['left'] ?? '0px'); ?>;
												--readMoreMarginTop: <?php echo esc_attr($attributes['readMoreMargin']['top'] ?? '0px'); ?>;
												--readMoreMarginRight: <?php echo esc_attr($attributes['readMoreMargin']['right'] ?? '0px'); ?>;
												--readMoreMarginBottom: <?php echo esc_attr($attributes['readMoreMargin']['bottom'] ?? '0px'); ?>;
												--readMoreMarginLeft: <?php echo esc_attr($attributes['readMoreMargin']['left'] ?? '0px'); ?>;
											">
                    <span><?php esc_html_e('Read More', 'postgrid'); ?></span>
                </a>
            </div>
            <?php endif; ?>
        </div>
    </div>
    <?php }
				wp_reset_postdata(); ?>

</div>

<?php if ($pagination > 1): ?>
<div class="pagination ajax-pagination">

    <!-- Prev Button -->
    <button class="pg-prev" <?php echo $paged <= 1 ? 'disabled' : ''; ?>
        data-page="<?php echo max( 1, $paged - 1 ); ?>">
        Prev
    </button>

    <?php for ( $i = 1; $i <= $pagination; $i++ ) : ?>
    <button class="pg-page <?php echo $i === $paged ? 'active' : ''; ?>" data-page="<?php echo $i; ?>">
        <?php echo $i; ?>
    </button>
    <?php endfor; ?>

    <!-- Next Button -->
    <button class="pg-next" <?php echo $paged >= $pagination ? 'disabled' : ''; ?>
        data-page="<?php echo min( $pagination, $paged + 1 ); ?>">
        Next
    </button>

</div>
<?php endif; ?>



<?php






	$html = ob_get_clean();

	wp_send_json_success($html);
} ?>