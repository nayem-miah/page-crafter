<?php

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

$paged = isset($_POST['paged']) ? intval($_POST['paged']) : 1;
$posts_per_page = !empty($attributes['numberOfPosts']) ? intval($attributes['numberOfPosts']) : 5;

$args = array(
    'posts_per_page' => $posts_per_page,
    'post_status'    => 'publish',
    'order'          => $attributes['order'] ?? 'desc',
    'orderby'        => $attributes['orderBy'] ?? 'date',
    'paged'          => $paged,
);

if (!empty($attributes['categories'])) {
    $args['category__in'] = array_column($attributes['categories'], 'id');
}

$posts = get_posts($args);
$total_posts = wp_count_posts()->publish;
$pagination = $posts_per_page > 0 ? ceil($total_posts / $posts_per_page) : 1;

// Encode data for frontend AJAX calls
$encoded_query = esc_attr(wp_json_encode($args));
$encoded_attr  = esc_attr(wp_json_encode($attributes));
?>

<div <?php echo get_block_wrapper_attributes(); ?> data-query="<?php echo $encoded_query; ?>"
    data-attributes="<?php echo $encoded_attr; ?>">

    <div class="post-grid" style="
        gap: <?php echo esc_attr($attributes['columnGap'] ?? 20); ?>px;
        --columns: <?php echo esc_attr($attributes['columns'] ?? 3); ?>;
    ">
        <?php foreach ($posts as $post): setup_postdata($post); ?>
        <div class="grid-card" style="
                --card-bg: <?php echo esc_attr($attributes['contentBackground'] ?? '#fff'); ?>;
                --card-bg-hover: <?php echo esc_attr($attributes['contentBackgroundHover'] ?? '#f5f5f5'); ?>;
            ">
            <?php if (has_post_thumbnail($post) && !empty($attributes['displayImage'])): ?>
            <div class="post-grid-thumbnail">
                <?php echo get_the_post_thumbnail($post, 'large', array('alt' => get_the_title($post))); ?>
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
                <?php if (!empty($attributes['showTitle'])): ?>
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

                <?php if (!empty($attributes['showMeta'])): ?>
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

                <?php if (!empty($attributes['showExcerpt'])): ?>
                <div class="post-grid-excerpt"
                    style="text-align: <?php echo esc_attr($attributes['contentAlignment'] ?? 'left'); ?>;">
                    <p><?php echo esc_html(truncate_excerpt(get_the_excerpt($post), $attributes['excerptMaxWords'] ?? 30)); ?>
                    </p>
                </div>
                <?php endif; ?>

                <?php if (!empty($attributes['readMore'])): ?>
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
            </div> <!-- /.content-body -->
        </div> <!-- /.grid-card -->
        <?php endforeach;
        wp_reset_postdata(); ?>
    </div> <!-- /.post-grid -->

    <?php if ($pagination > $paged): ?>
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
</div> <!-- /.wp-block -->