<?php


?>
<div <?php echo get_block_wrapper_attributes(); ?>>
    <div class="info-box">
        <div class="info-box__icon">
            <span class="dashicons dashicons-info"></span>
        </div>
        <div class="info-box__title">
            <h3 class="text"><?php esc_html_e( <?php  ?>, 'text-domain' ); ?></h3>
        </div>
        <div class="info-box__content">
            <p>
                <?php esc_html_e(
						'Lorem ipsum dolor sit amet consectetur. Sem leo dictumst ac imperdiet arcu duis tempor non adipiscing.',
						'text-domain'
					); ?>
            </p>
        </div>
    </div>
</div>