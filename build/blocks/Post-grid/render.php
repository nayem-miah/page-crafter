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

if (!function_exists('get_padding_css')) {
    function get_padding_css($values)
    {
        $top = isset($values['top']) ? $values['top'] : 0;
        $right = isset($values['right']) ? $values['right'] : 0;
        $bottom = isset($values['bottom']) ? $values['bottom'] : 0;
        $left = isset($values['left']) ? $values['left'] : 0;

        return "{$top}px {$right}px {$bottom}px {$left}px;";
    }
}



$paged = isset($_POST['paged']) ? intval($_POST['paged']) : 1;
$posts_per_page = !empty($attributes['numberOfPosts']) ? intval($attributes['numberOfPosts']) : 5;

$args = array(
    'posts_per_page' => $posts_per_page,
    'post_status' => 'publish',
    'order' => $attributes['order'] ?? 'desc',
    'orderby' => $attributes['orderBy'] ?? 'date',
    'paged' => $paged,
);

if (!empty($attributes['categories'])) {
    $args['category__in'] = array_column($attributes['categories'], 'id');
}

$posts = get_posts($args);
$total_posts = wp_count_posts()->publish;
$pagination = $posts_per_page > 0 ? ceil($total_posts / $posts_per_page) : 1;

// Encode data for frontend AJAX calls
$encoded_query = esc_attr(wp_json_encode($args));
$encoded_attr = esc_attr(wp_json_encode($attributes));
?>

<div <?php echo get_block_wrapper_attributes(); ?> data-query="<?php echo $encoded_query; ?>"
    data-attributes="<?php echo $encoded_attr; ?>">


    <div
        class="post-grid <?php echo $attributes['desktopHide'] ? 'desktopHide' : ''; ?> <?php echo $attributes['tabHide'] ? 'tabHide' : ''; ?> <?php echo $attributes['MobileHide'] ? 'MobileHide' : ''; ?>">


        <div class="post-grid-wrapper" style="
        gap: <?php echo esc_attr($attributes['columnGap'] ?? 20); ?>px;
        --columns: <?php echo esc_attr($attributes['columns'] ?? 3); ?>;
    ">

            <?php foreach ($posts as $post):
                setup_postdata($post); ?>
                <div class="grid-card" style="
                --card-bg: <?php echo esc_attr($attributes['contentBackground'] ?? '#fff'); ?>;
                --card-bg-hover: <?php echo esc_attr($attributes['contentBackgroundHover'] ?? '#f5f5f5'); ?>;
            ">
                    <?php if (has_post_thumbnail($post) && !empty($attributes['displayImage'])): ?>
                        <div class="post-grid-thumnail">
                            <?php echo get_the_post_thumbnail($post, 'large', array('alt' => get_the_title($post))); ?>
                        </div>
                    <?php endif; ?>

                    <div class="content-body" style="

                        --contentPadding-desktop: <?php echo get_padding_css($attributes['contentPadding']['Desktop']); ?>;
                        --contentPadding-mobile: <?php echo get_padding_css($attributes['contentPadding']['Mobile']); ?>;
                        --contentPadding-tablet: <?php echo get_padding_css($attributes['contentPadding']['Tablet']); ?>;    
                
                        --contentMargin-desktop: <?php echo get_padding_css($attributes['contentMargin']['Desktop']); ?>;
                        --contentMargin-mobile: <?php echo get_padding_css($attributes['contentMargin']['Mobile']); ?>;
                        --contentMargin-tablet: <?php echo get_padding_css($attributes['contentMargin']['Tablet']); ?>;    
                ">
                        <?php if (!empty($attributes['showTitle'])): ?>
                            <div class=" post-grid-title">
                                <h5 style="text-align: <?php echo esc_attr($attributes['contentAlignment'] ?? 'left'); ?>; 

                                --titleMargin-desktop: <?php echo get_padding_css($attributes['titleMargin']['Desktop']); ?>;
                                --titleMargin-mobile: <?php echo get_padding_css($attributes['titleMargin']['Mobile']); ?>;
                                --titleMargin-tablet: <?php echo get_padding_css($attributes['titleMargin']['Tablet']); ?>;    
                                ">
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
                

                            
                                --metaMargin-desktop: <?php echo get_padding_css($attributes['metaMargin']['Desktop']); ?>;
                                --metaMargin-mobile: <?php echo get_padding_css($attributes['metaMargin']['Mobile']); ?>;
                                --metaMargin-tablet: <?php echo get_padding_css($attributes['metaMargin']['Tablet']); ?>;  
                        ">
                                <span>By <?php echo esc_html(get_the_author_meta('display_name', $post->post_author)); ?></span>
                                <time datetime="<?php echo esc_attr(get_the_date('c', $post)); ?>">
                                    <?php echo esc_html(get_the_date('', $post)); ?>
                                </time>
                            </div>
                        <?php endif; ?>

                        <?php if (!empty($attributes['showExcerpt'])): ?>
                            <div class="post-grid-excerpt" style="text-align: <?php echo esc_attr($attributes['contentAlignment'] ?? 'left'); ?>;
                                
                                  --desMargin-desktop: <?php echo get_padding_css($attributes['desMargin']['Desktop']); ?>;
                                --desMargin-mobile: <?php echo get_padding_css($attributes['desMargin']['Mobile']); ?>;
                                --desMargin-tablet: <?php echo get_padding_css($attributes['desMargin']['Tablet']); ?>;  
                                
                                
                                ">
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

                                --readMorePadding-desktop: <?php echo get_padding_css($attributes['readMorePadding']['Desktop']); ?>;
                                --readMorePadding-mobile: <?php echo get_padding_css($attributes['readMorePadding']['Mobile']); ?>;
                                --readMorePadding-tablet: <?php echo get_padding_css($attributes['readMorePadding']['Tablet']); ?>;  


                                --readMoreMargin-desktop: <?php echo get_padding_css($attributes['readMoreMargin']['Desktop']); ?>;
                                --readMoreMargin-mobile: <?php echo get_padding_css($attributes['readMoreMargin']['Mobile']); ?>;
                                --readMoreMargin-tablet: <?php echo get_padding_css($attributes['readMoreMargin']['Tablet']); ?>;  
                            
                            ">
                                    <span><?php esc_html_e('Read More', 'postgrid'); ?></span>
                                </a>
                            </div>
                        <?php endif; ?>
                    </div> <!-- /.content-body -->
                </div> <!-- /.grid-card -->
            <?php endforeach;
            wp_reset_postdata(); ?>

        </div>



        <?php if ($pagination > $paged && !empty($attributes['useAjaxPagination'])): ?>
            <div class="pagination ajax-pagination">

                <!-- Prev Button -->
                <button class="pg-prev" <?php echo $paged <= 1 ? 'disabled' : ''; ?>
                    data-page="<?php echo max(1, $paged - 1); ?>">
                    Prev
                </button>

                <?php for ($i = 1; $i <= $pagination; $i++): ?>
                    <button class="pg-page <?php echo $i === $paged ? 'active' : ''; ?>" data-page="<?php echo $i; ?>">
                        <?php echo $i; ?>
                    </button>
                <?php endfor; ?>

                <!-- Next Button -->
                <button class="pg-next" <?php echo $paged >= $pagination ? 'disabled' : ''; ?>
                    data-page="<?php echo min($pagination, $paged + 1); ?>">
                    Next
                </button>

            </div>
        <?php endif; ?>


    </div>








</div> <!-- /.wp-block -->