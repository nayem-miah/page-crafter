<?php
// This file is generated. Do not modify it manually.
return array(
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
			'columns' => array(
				'type' => 'number',
				'default' => 4
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
				'default' => 15
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
				'default' => '#ff5722'
			),
			'titleActiveColor' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'titleHoverColor' => array(
				'type' => 'string',
				'default' => '#000000'
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
				'default' => '#ff5722'
			),
			'metaActiveColor' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'metaHoverColor' => array(
				'type' => 'string',
				'default' => '#000000'
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
				'default' => '#ff5722'
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
			)
		),
		'textdomain' => 'postgrid',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
