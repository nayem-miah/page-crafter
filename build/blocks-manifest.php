<?php
// This file is generated. Do not modify it manually.
return array(
	'Info-box' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/infobox',
		'version' => '0.1.0',
		'title' => 'infobox',
		'category' => 'Page-Crafter',
		'icon' => 'edit-page',
		'description' => 'A simple info box block.',
		'keywords' => array(
			'info',
			'box',
			'pagecrafter'
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'additionalClass' => array(
				'type' => 'string',
				'default' => ''
			),
			'desktopHide' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tabHide' => array(
				'type' => 'boolean',
				'default' => false
			),
			'MobileHide' => array(
				'type' => 'boolean',
				'default' => false
			),
			'icon' => array(
				'type' => 'string',
				'default' => 'fas fa-info-circle'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Title Here'
			),
			'content' => array(
				'type' => 'string',
				'default' => 'Lorem ipsum dolor sit amet consectetur. Sem leo dictumst ac imperdiet arcu duis tempor non adipiscing.'
			),
			'readMoreAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'readMore' => array(
				'type' => 'string',
				'default' => 'Read More'
			),
			'readMoreType' => array(
				'type' => 'string',
				'default' => 'Button'
			),
			'readMoreLink' => array(
				'type' => 'string',
				'default' => '#'
			),
			'readMoreIcon' => array(
				'type' => 'string',
				'default' => 'fas fa-arrow-right'
			),
			'readMoreIconShow' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showContent' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showTitle' => array(
				'type' => 'boolean',
				'default' => true
			),
			'contentAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'titleTag' => array(
				'type' => 'string',
				'default' => 'h3'
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'titleHoverColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'activeColor' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'titleMargin' => array(
				'type' => 'object',
				'default' => array(
					'top' => '0px',
					'right' => '0px',
					'bottom' => '0px',
					'left' => '0px'
				)
			),
			'ContentColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'ContentHoverColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'activeContentColor' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'ContentMargin' => array(
				'type' => 'object',
				'default' => array(
					'top' => '10px',
					'right' => '0px',
					'bottom' => '10px',
					'left' => '0px'
				)
			),
			'callActionColor' => array(
				'type' => 'string',
				'default' => '#FFFFFF'
			),
			'callActionHoverColor' => array(
				'type' => 'string',
				'default' => '#F0FDF4'
			),
			'activeCallActionColor' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'callActionBack' => array(
				'type' => 'string',
				'default' => '#10B981'
			),
			'callActionHoverBack' => array(
				'type' => 'string',
				'default' => '#059669'
			),
			'activeCallActionBack' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'callActionPadding' => array(
				'type' => 'object',
				'default' => array(
					'top' => '8px',
					'right' => '20px',
					'bottom' => '8px',
					'left' => '20px'
				)
			),
			'callActionBorderType' => array(
				'type' => 'string',
				'default' => 'solid'
			),
			'callActionBorderWidth' => array(
				'type' => 'object',
				'default' => array(
					'top' => '0',
					'right' => '0',
					'bottom' => '0',
					'left' => '0'
				)
			),
			'callActionborderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'callActionborderHoverColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'ActiveCallActionborderColor' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'callActionBorderRadius' => array(
				'type' => 'object',
				'default' => array(
					'top' => '2',
					'right' => '2',
					'bottom' => '2',
					'left' => '2'
				)
			),
			'BorderType' => array(
				'type' => 'string',
				'default' => 'solid'
			),
			'BorderWidth' => array(
				'type' => 'object',
				'default' => array(
					'top' => '1px',
					'right' => '1px',
					'bottom' => '1px',
					'left' => '1px'
				)
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'borderHoverColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'ActiveBorderColor' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'BorderRadius' => array(
				'type' => 'object',
				'default' => array(
					'top' => '5px',
					'right' => '5px',
					'bottom' => '5px',
					'left' => '5px'
				)
			)
		),
		'textdomain' => 'infobox',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'pagecrafter' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/pagecrafter',
		'version' => '0.1.0',
		'title' => 'PageCrafter',
		'category' => 'Page-Crafter',
		'icon' => 'edit-page',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'pagecrafter',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'Post-grid' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/postgrid',
		'version' => '0.1.0',
		'title' => 'PostGrid',
		'category' => 'Page-Crafter',
		'icon' => 'edit-page',
		'description' => 'A simple post grid',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'additionalClass' => array(
				'type' => 'string',
				'default' => ''
			),
			'columns' => array(
				'type' => 'number',
				'default' => 3
			),
			'columnGap' => array(
				'type' => 'number',
				'default' => 20
			),
			'numberOfPosts' => array(
				'type' => 'number',
				'default' => 6
			),
			'displayImage' => array(
				'type' => 'boolean',
				'default' => true
			),
			'order' => array(
				'type' => 'string',
				'default' => 'desc'
			),
			'orderBy' => array(
				'type' => 'string',
				'default' => 'date'
			),
			'categories' => array(
				'type' => 'array',
				'items' => array(
					'type' => 'object'
				)
			),
			'readMore' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showExcerpt' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showMeta' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showTitle' => array(
				'type' => 'boolean',
				'default' => true
			),
			'excerptMaxWords' => array(
				'type' => 'number',
				'default' => 10
			),
			'readMoreAlignment' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'contentAlignment' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'contentBackground' => array(
				'type' => 'string',
				'default' => '#F5F5F5'
			),
			'contentBackgroundHover' => array(
				'type' => 'string',
				'default' => '#E0E0E0'
			),
			'activeBackground' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'contentPadding' => array(
				'type' => 'object',
				'default' => array(
					'top' => '0px',
					'right' => '12px',
					'bottom' => '24px',
					'left' => '12px'
				)
			),
			'contentMargin' => array(
				'type' => 'object',
				'default' => array(
					'top' => '0px',
					'right' => '0px',
					'bottom' => '0px',
					'left' => '0px'
				)
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#1a202c '
			),
			'titleActiveColor' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'titleHoverColor' => array(
				'type' => 'string',
				'default' => '#2b6cb0 '
			),
			'titleMargin' => array(
				'type' => 'object',
				'default' => array(
					'top' => '12px',
					'right' => '0px',
					'bottom' => '0px',
					'left' => '0px'
				)
			),
			'metaColor' => array(
				'type' => 'string',
				'default' => '#718096'
			),
			'metaActiveColor' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'metaHoverColor' => array(
				'type' => 'string',
				'default' => '#4a5568 '
			),
			'metaMargin' => array(
				'type' => 'object',
				'default' => array(
					'top' => '0px',
					'right' => '0px',
					'bottom' => '0px',
					'left' => '0px'
				)
			),
			'desColor' => array(
				'type' => 'string',
				'default' => '#4a5568 '
			),
			'desActiveColor' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'desHoverColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'desMargin' => array(
				'type' => 'object',
				'default' => array(
					'top' => '0px',
					'right' => '0px',
					'bottom' => '0px',
					'left' => '0px'
				)
			),
			'readMoreBackground' => array(
				'type' => 'string',
				'default' => '#10b981'
			),
			'readMoreBackgroundHover' => array(
				'type' => 'string',
				'default' => '#059669'
			),
			'readMoreBackgroundActive' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'readMoreColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'readMoreColorHover' => array(
				'type' => 'string',
				'default' => '#f0fdf4'
			),
			'readMoreColorActive' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'readMoreMargin' => array(
				'type' => 'object',
				'default' => array(
					'top' => '20px',
					'right' => '0px',
					'bottom' => '0px',
					'left' => '0px'
				)
			),
			'readMorePadding' => array(
				'type' => 'object',
				'default' => array(
					'top' => '8px',
					'right' => '16px',
					'bottom' => '8px',
					'left' => '16px'
				)
			),
			'currentPage' => array(
				'type' => 'number',
				'default' => 1
			),
			'totalPages' => array(
				'type' => 'number',
				'default' => 1
			),
			'useAjaxPagination' => array(
				'type' => 'boolean',
				'default' => true
			),
			'pagination_number' => array(
				'type' => 'integer',
				'default' => 3
			),
			'pagination_type' => array(
				'type' => 'string',
				'selector' => '.pagination-type',
				'default' => 'nm'
			),
			'load_more_btn_txt' => array(
				'type' => 'string',
				'selector' => 'load-more-string',
				'default' => 'Load More'
			),
			'desktopHide' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tabHide' => array(
				'type' => 'boolean',
				'default' => false
			),
			'MobileHide' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'textdomain' => 'postgrid',
		'editorScript' => 'file:./index.js',
		'script' => 'file:./frontend.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
