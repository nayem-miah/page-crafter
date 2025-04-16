<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$columns = isset( $attributes['columns'] ) ? intval( $attributes['columns'] ) : 3;
?>

<p <?php echo get_block_wrapper_attributes(); ?>>
    <?php esc_html_e( 'Post grid – hello from a dynamic block!', 'postgrid' ); ?>
</p>

<h1>
    <?php echo esc_html( $columns ); ?>
</h1>