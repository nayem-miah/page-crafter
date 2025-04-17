<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
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


// Set up the query arguments
$args = array(
    'posts_per_page' => $attributes['numberOfPosts'],
    'post_status'    => 'publish',
    'order' => $attributes['order'],
    'orderby' => $attributes['orderBy']
);

if(isset($attributes['categories'])){
    $args['category__in'] = array_column($attributes['categories'], 'id');  // will give like this [3, 7]
}

// Get the recent posts
$posts = get_posts( $args );
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
    <div class="post-grid">
        <?php foreach ( $posts as $post ) : setup_postdata( $post ); ?>
        <div class="grid-card">
            <?php if ( has_post_thumbnail( $post ) && $attributes['displayImage'] ) : ?>
            <div class="post-grid-thumnail">
                <?php echo get_the_post_thumbnail( $post, 'large', [ 'alt' => get_the_title( $post ) ] ); ?>
            </div>
            <?php endif; ?>

            <div class="content-body">
                <?php if ( $attributes['showTitle']) : ?>
                <div class="post-grid-title">
                    <h5>
                        <a href="<?php the_permalink( $post ); ?>">
                            <?php echo get_the_title( $post ); ?>
                        </a>
                    </h5>
                </div>
                <?php endif; ?>

                <?php if ( $attributes['showMeta'] ) : ?>
                <div class="post-grid-meta">
                    <span>By <?php echo get_the_author_meta( 'display_name', $post->post_author ); ?></span>
                    <time datetime="<?php echo esc_attr( get_the_date( 'c', $post ) ); ?>">
                        <?php echo get_the_date( '', $post ); ?>
                    </time>
                </div>
                <?php endif; ?>

                <?php if ( $attributes['showExcerpt'] ) : ?>
                <div class="post-grid-excerpt">
                    <p>
                        <?php  echo truncate_excerpt(  get_the_excerpt( $post ), $attributes['excerptMaxWords'] ); ?>

                    </p>
                </div>
                <?php endif; ?>

                <?php if ( $attributes['readMore'] ) : ?>
                <div class="post-grid-btn"
                    style="text-align: <?php echo esc_attr( $attributes['readMoreAlignment'] ); ?>;">
                    <a href="<?php the_permalink( $post ); ?>">
                        <span><?php esc_html_e( 'Read More', 'postgrid' ); ?></span>
                    </a>
                </div>
                <?php endif; ?>
            </div>
        </div>
        <?php endforeach; wp_reset_postdata(); ?>
    </div>
</div>