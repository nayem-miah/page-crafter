<?php
/**
 * Plugin Name:       PageCrafter
 * Plugin URI:  https://nayemmiah.com/
 * Description:       Page-crafter is a WordPress Gutenberg Blocks plugin to shape your website in your way without coding knowledge
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Nayem Miah
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       pagecrafter
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}


/**
 * Adds a custom block category for Page Crafter blocks.
 *
 * @param array   $categories Existing block categories.
 * @param WP_Post $_post      Current post object (unused).
 *
 * @return array Modified block categories.
 */
function pagecrafter_block_categories( $categories, $_post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'Page-Crafter',
				'title' => __( 'Page Crafter', 'pagecrafter' ),
			),
		)
	);
}
add_filter( 'block_categories_all', 'pagecrafter_block_categories', 10, 2 );


/**
 * Registers custom Gutenberg blocks for the Page Crafter plugin.
 * block using the build directory structure.
 *
 * @return void
 */
function pagecrafter_register_blocks() {
	$blocks = array( 'Info-box', 'Post-grid', 'Button' ); // the array are blocks name.

	foreach ( $blocks as $block ) {
		register_block_type( __DIR__ . "/build/blocks/{$block}" );
	}
}
add_action( 'init', 'pagecrafter_register_blocks' );



/**
 * This is for AJAX Pagination
 * return void
 */
function pg_enqueue_assets() {
	wp_enqueue_script(
		'pg-pagination',
		plugin_dir_url( __FILE__ ) . './src/utils/pagination.js',
		array( 'jquery' ),
		'1.0',
		true
	);

	wp_localize_script(
		'pg-pagination',
		'pg_ajax_object',
		array(
			'ajax_url' => admin_url( 'admin-ajax.php' ),
			'nonce'    => wp_create_nonce( 'pg_nonce' ), // Nonce for security.
		)
	);

	// Also pass attributes for AJAX reuse.
	wp_add_inline_script( 'pg-pagination-js', 'window.pgBlockAttributes = {};' ); // Replace with actual block attributes if needed.
}
add_action( 'wp_enqueue_scripts', 'pg_enqueue_assets' );


/**
 * Truncates a given content excerpt to a specified word limit.
 *
 * This function strips all HTML tags from the excerpt, splits the content into words,
 * ("...") at the end if the content exceeds the word limit.
 *
 * @param string $excerpt     The content to be truncated.
 * @param int    $word_limit The number of words to limit the content to. Defaults to 30.
 *
 * @return string The truncated content.
 */

if ( ! function_exists( 'truncate_excerpt' ) ) {
	function truncate_excerpt( $excerpt, $word_limit = 30 ) {
		if ( empty( $excerpt ) ) {
			return '';
		}
		$excerpt = wp_strip_all_tags( $excerpt );
		$words   = explode( ' ', $excerpt );

		if ( count( $words ) <= $word_limit ) {
			return implode( ' ', $words );
		}
		$truncated = array_slice( $words, 0, $word_limit );
		return implode( ' ', $truncated ) . '...';
	}
}

/**
 * Generates a CSS string for padding with pixel values.
 *
 * This function accepts an array of padding values for top, right, bottom, and left.
 * string with the respective padding values, adding "px" to each.
 *
 * @param array $values An associative array with keys 'top', 'right', 'bottom', 'left'.
 *                      If a value is missing, it defaults to `0`.
 *
 * @return string A CSS string with the padding values in pixels.
 */
if ( ! function_exists( 'get_padding_css' ) ) {
	function get_padding_css( $values ) {
		$top    = isset( $values['top'] ) ? $values['top'] : 0;
		$right  = isset( $values['right'] ) ? $values['right'] : 0;
		$bottom = isset( $values['bottom'] ) ? $values['bottom'] : 0;
		$left   = isset( $values['left'] ) ? $values['left'] : 0;

		return "{$top}px {$right}px {$bottom}px {$left}px;";
	}
}


// -------------------------------------------pagination handler this function will run when paginate----------------------------------

add_action( 'wp_ajax_pagination', 'handle_pagination' );
add_action( 'wp_ajax_nopriv_pagination', 'handle_pagination' ); // For non-logged-in users.
/**
 * Handles AJAX pagination for the post grid.
 * This function is triggered when the user clicks on pagination buttons. It retrieves the appropriate posts based on the requested page and query parameters, then returns the updated HTML for the post grid along with pagination controls.
 *
 * @return void Outputs the HTML content of the post grid and pagination.
 */
function handle_pagination() {
	// Optional: verify nonce.
	if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( $_POST['nonce'], 'pg_nonce' ) ) {
		wp_send_json_error( 'Invalid nonce' );
	}

	$paged = isset( $_POST['paged'] ) ? intval( $_POST['paged'] ) : 1;
	$query = isset( $_POST['data_query'] ) ? $_POST['data_query'] : array();
	$attrs = isset( $_POST['data_attr'] ) ? $_POST['data_attr'] : array();

	$query_args = array_merge( $query, array( 'paged' => $paged ) );

	$posts      = get_posts( $query_args );
	$attributes = $attrs;

	$posts_per_page = ! empty( $attributes['numberOfPosts'] ) ? intval( $attributes['numberOfPosts'] ) : 5;
	$total_posts    = wp_count_posts()->publish;
	$pagination     = $posts_per_page > 0 ? ceil( $total_posts / $posts_per_page ) : 1;
	ob_start();
	?>

	<div class="post-grid-wrapper" style="
		gap: <?php echo esc_attr( $attributes['columnGap'] ?? 20 ); ?>px;
		--columns: <?php echo esc_attr( $attributes['columns'] ?? 3 ); ?>;
	">

		<?php
		foreach ( $posts as $post ) {
			setup_postdata( $post );
			?>
			<div class="grid-card" style="
								--card-bg: <?php echo esc_attr( $attributes['contentBackground'] ?? '#fff' ); ?>;
								--card-bg-hover: <?php echo esc_attr( $attributes['contentBackgroundHover'] ?? '#f5f5f5' ); ?>;
							">
				<?php if ( has_post_thumbnail( $post ) && false !== $attributes['displayImage'] && 'false' !== $attributes['displayImage'] ) : ?>
					<div class="post-grid-thumnail">
						<?php echo get_the_post_thumbnail( $post, 'medium' ); ?>
					</div>
				<?php endif; ?>

				<div class="content-body" style="

						--contentPadding-desktop: <?php echo esc_attr( get_padding_css( $attributes['contentPadding']['Desktop'] ) ); ?>;
						--contentPadding-mobile: <?php echo esc_attr( get_padding_css( $attributes['contentPadding']['Mobile'] ) ); ?>;
						--contentPadding-tablet: <?php echo esc_attr( get_padding_css( $attributes['contentPadding']['Tablet'] ) ); ?>;

						--contentMargin-desktop: <?php echo esc_attr( get_padding_css( $attributes['contentMargin']['Desktop'] ) ); ?>;
						--contentMargin-mobile: <?php echo esc_attr( get_padding_css( $attributes['contentMargin']['Mobile'] ) ); ?>;
						--contentMargin-tablet: <?php echo esc_attr( get_padding_css( $attributes['contentMargin']['Tablet'] ) ); ?>;	 

								">

					<?php if ( false !== $attributes['showTitle'] && 'false' !== $attributes['showTitle'] ) : ?>
						<div class="post-grid-title">
							<h5 style="text-align: <?php echo esc_attr( $attributes['contentAlignment'] ?? 'left' ); ?>;
				
								--titleMargin-desktop: <?php echo esc_attr( get_padding_css( $attributes['titleMargin']['Desktop'] ) ); ?>;
								--titleMargin-mobile: <?php echo esc_attr( get_padding_css( $attributes['titleMargin']['Mobile'] ) ); ?>;
								--titleMargin-tablet: <?php echo esc_attr( get_padding_css( $attributes['titleMargin']['Tablet'] ) ); ?>;  
								
								">
								<a href="<?php the_permalink( $post ); ?>" style="
													--titleColor: <?php echo esc_attr( $attributes['titleColor'] ?? '#000' ); ?>;
													--titleHoverColor: <?php echo esc_attr( $attributes['titleHoverColor'] ?? '#555' ); ?>;
												">
									<?php echo esc_html( get_the_title( $post ) ); ?>
								</a>
							</h5>
						</div>
					<?php endif; ?>

					<?php if ( false !== $attributes['showMeta'] && 'false' !== $attributes['showMeta'] ) : ?>
						<div class="post-grid-meta" style="
								--metaTextAlign: <?php echo esc_attr( $attributes['contentAlignment'] ?? 'left' ); ?>;
								--metaHoverColor: <?php echo esc_attr( $attributes['metaHoverColor'] ?? '#999' ); ?>;
								--metaColor: <?php echo esc_attr( $attributes['metaColor'] ?? '#777' ); ?>;
												
								--metaMargin-desktop: <?php echo esc_attr( get_padding_css( $attributes['metaMargin']['Desktop'] ) ); ?>;
								--metaMargin-mobile: <?php echo esc_attr( get_padding_css( $attributes['metaMargin']['Mobile'] ) ); ?>;
								--metaMargin-tablet: <?php echo esc_attr( get_padding_css( $attributes['metaMargin']['Tablet'] ) ); ?>;  
										">
							<span>By <?php echo esc_html( get_the_author_meta( 'display_name', $post->post_author ) ); ?></span>
							<time datetime="<?php echo esc_attr( get_the_date( 'c', $post ) ); ?>">
								<?php echo esc_html( get_the_date( '', $post ) ); ?>
							</time>
						</div>
					<?php endif; ?>

					<?php if ( false !== $attributes['showExcerpt'] && 'false' !== $attributes['showExcerpt'] ) : ?>
						<div class="post-grid-excerpt" style="text-align: <?php echo esc_attr( $attributes['contentAlignment'] ?? 'left' ); ?>;
							
								--desMargin-desktop: <?php echo esc_attr( get_padding_css( $attributes['desMargin']['Desktop'] ) ); ?>;
								--desMargin-mobile: <?php echo esc_attr( get_padding_css( $attributes['desMargin']['Mobile'] ) ); ?>;
								--desMargin-tablet: <?php echo esc_attr( get_padding_css( $attributes['desMargin']['Tablet'] ) ); ?>;  
							
							">
							<p><?php echo esc_html( truncate_excerpt( get_the_excerpt( $post ), $attributes['excerptMaxWords'] ?? 30 ) ); ?>
							</p>
						</div>
					<?php endif; ?>

					<?php if ( false !== $attributes['readMore'] && 'false' !== $attributes['readMore'] ) : ?>
						<div class="post-grid-btn"
							style="text-align: <?php echo esc_attr( $attributes['readMoreAlignment'] ?? 'left' ); ?>;">
							<a href="<?php the_permalink( $post ); ?>" class="read-more-link" style="
												--readMoreColor: <?php echo esc_attr( $attributes['readMoreColor'] ?? '#fff' ); ?>;
												--readMoreBackground: <?php echo esc_attr( $attributes['readMoreBackground'] ?? '#0073aa' ); ?>;
												--readMoreColorHover: <?php echo esc_attr( $attributes['readMoreColorHover'] ?? '#fff' ); ?>;
												--readMoreBackgroundHover: <?php echo esc_attr( $attributes['readMoreBackgroundHover'] ?? '#005177' ); ?>;
												--readMorePadding-desktop: <?php echo esc_attr( get_padding_css( $attributes['readMorePadding']['Desktop'] ) ); ?>;
												--readMorePadding-mobile: <?php echo esc_attr( get_padding_css( $attributes['readMorePadding']['Mobile'] ) ); ?>;
												--readMorePadding-tablet: <?php echo esc_attr( get_padding_css( $attributes['readMorePadding']['Tablet'] ) ); ?>;  

												--readMoreMargin-desktop: <?php echo esc_attr( get_padding_css( $attributes['readMoreMargin']['Desktop'] ) ); ?>;
												--readMoreMargin-mobile: <?php echo esc_attr( get_padding_css( $attributes['readMoreMargin']['Mobile'] ) ); ?>;
												--readMoreMargin-tablet: <?php echo esc_attr( get_padding_css( $attributes['readMoreMargin']['Tablet'] ) ); ?>;  
							
											">
								<span><?php esc_html_e( 'Read More', 'postgrid' ); ?></span>
							</a>
						</div>
					<?php endif; ?>
				</div>
			</div>
			<?php
		}
		wp_reset_postdata();
		?>

	</div>

	<?php if ( $pagination > 1 ) : ?>
		<div class="pagination ajax-pagination">

			<!-- Prev Button -->
			<button class="pg-prev" <?php echo $paged <= 1 ? 'disabled' : ''; ?> data-page="<?php echo esc_attr( max( 1, $paged - 1 ) ); ?>">
				Prev
			</button>

			<?php for ( $i = 1; $i <= $pagination; $i++ ) : ?>
				<button class="pg-page <?php echo $i === $paged ? 'active' : ''; ?>" data-page="<?php echo esc_attr( $i ); ?>">
					<?php echo esc_attr( $i ); ?>
				</button>
			<?php endfor; ?>

			<!-- Next Button -->
			<button class="pg-next" <?php echo $paged >= $pagination ? 'disabled' : ''; ?>
				data-page="<?php echo esc_attr( min( $pagination, $paged + 1 ) ); ?>">
				Next
			</button>

		</div>
	<?php endif; ?>

	<?php

	$html = ob_get_clean();

	wp_send_json_success( $html );
} ?>
