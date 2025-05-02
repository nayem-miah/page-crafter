import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import Spacing from '../../../components/Spacing';
import ColorPickerGroup from '../../../components/ColorPickerGroup';

export default function StyleTab( { attributes, setAttributes } ) {
	const {
		titleMargin,
		titleHoverColor,
		titleColor,
		activeColor,
		activeContentColor,
		ContentMargin,
		ContentHoverColor,
		ContentColor,
		callActionBack,
		callActionColor,
		callActionHoverBack,
		callActionHoverColor,
		activeCallActionBack,
		activeCallActionColor,
		callActionPadding,
		callActionBorderType,
		callActionBorderRadius,
		callActionborderColor,
		callActionBorderWidth,
		callActionborderHoverColor,
		ActiveCallActionborderColor,
		BorderType,
		BorderWidth,
		borderHoverColor,
		BorderRadius,
		ActiveBorderColor,
		borderColor,
		activeBackground,
		backgroundHover,
		background,
		isBoxShadow,
		boxShadowColor,
		boxShadowHover,
		boxShadowControl,
		ActiveboxShadowColor,
		margin,
		padding,
		readMoreType,
	} = attributes;

	const [ openPanel, setOpenPanel ] = useState( 'general' );
	const togglePanel                 = ( panelKey ) =>
		setOpenPanel( openPanel === panelKey ? null : panelKey );

	// Utility for conditional color selection
	const getActiveColor = ( defaultColor, hoverColor, activeKey ) =>
		activeKey === 'default' ? defaultColor : hoverColor;

	const handleColorChange = ( color, defaultKey, hoverKey, activeKey ) => {
		setAttributes(
			{
					[ activeKey === 'default' ? defaultKey : hoverKey ] : color,
			}
		);
	};

	return (
		< div >
			< PanelBody
				title             = "Title"
				opened            = { openPanel === 'title' }
				onToggle          = { () => togglePanel( 'title' ) }
			>
				< ColorPickerGroup
					label         = "Color"
					value         = { getActiveColor(
						titleColor,
						titleHoverColor,
						activeColor
					) }
					onChange      = { ( color ) =>
						handleColorChange(
							color,
							'titleColor',
							'titleHoverColor',
							activeColor
						)
					}
					activeKey     = { activeColor }
					from          = "infoTitleColor"
					setAttributes = { setAttributes }
				/ >

				< Spacing
					label         = "Title Margin"
					setAttributes = { setAttributes }
					space         = { titleMargin }
					attributesKey = "titleMargin"
				/ >
			< / PanelBody >

			< PanelBody
				title             = "Content"
				opened            = { openPanel === 'content' }
				onToggle          = { () => togglePanel( 'content' ) }
			>
				< ColorPickerGroup
					label         = "Color"
					value         = { getActiveColor(
						ContentColor,
						ContentHoverColor,
						activeContentColor
					) }
					onChange      = { ( color ) =>
						handleColorChange(
							color,
							'ContentColor',
							'ContentHoverColor',
							activeContentColor
						)
					}
					activeKey     = { activeContentColor }
					from          = "infoContentColor"
					setAttributes = { setAttributes }
				/ >

				< Spacing
					label         = "Content Margin"
					setAttributes = { setAttributes }
					space         = { ContentMargin }
					attributesKey = "ContentMargin"
				/ >
			< / PanelBody >

			{ readMoreType === 'Button' && (
				< PanelBody
					title             = "Call To Action"
					opened            = { openPanel === 'callAction' }
					onToggle          = { () => togglePanel( 'callAction' ) }
				>
					< ColorPickerGroup
						label         = "Color"
						value         = { getActiveColor(
							callActionColor,
							callActionHoverColor,
							activeCallActionColor
						) }
						onChange      = { ( color ) =>
							handleColorChange(
								color,
								'callActionColor',
								'callActionHoverColor',
								activeCallActionColor
							)
						}
						activeKey     = { activeCallActionColor }
						from          = "infoCallActionColor"
						setAttributes = { setAttributes }
					/ >

					< ColorPickerGroup
						label         = "Background"
						value         = { getActiveColor(
							callActionBack,
							callActionHoverBack,
							activeCallActionBack
						) }
						onChange      = { ( color ) =>
							handleColorChange(
								color,
								'callActionBack',
								'callActionHoverBack',
								activeCallActionBack
							)
						}
						activeKey     = { activeCallActionBack }
						from          = "infoCallActionBackColor"
						setAttributes = { setAttributes }
					/ >

					< Spacing
						setAttributes = { setAttributes }
						space         = { callActionPadding }
						label         = "Padding"
						attributesKey = "callActionPadding"
					/ >

					< PanelBody title = "Border" initialOpen = { false } >
						< SelectControl
							label     = { __( 'Border Type', 'postinfo' ) }
							value     = { callActionBorderType }
							options   = { [
								{ label: 'None', value: 'none' },
								{ label: 'Solid', value: 'solid' },
								{ label: 'Dotted', value: 'dotted' },
								{ label: 'Dashed', value: 'dashed' },
								{ label: 'Groove', value: 'groove' },
								{ label: 'Inset', value: 'inset' },
								{ label: 'Outset', value: 'outset' },
								{ label: 'Ridge', value: 'ridge' },
								] }
							onChange  = { ( val ) =>
								setAttributes( { callActionBorderType: val } )
							}
						/ >

						< Spacing
							setAttributes = { setAttributes }
							space         = { callActionBorderWidth }
							label         = "Border Width"
							attributesKey = "callActionBorderWidth"
						/ >

						< ColorPickerGroup
							label         = "Border Color"
							value         = { getActiveColor(
								callActionborderColor,
								callActionborderHoverColor,
								ActiveCallActionborderColor
							) }
							onChange      = { ( color ) =>
								handleColorChange(
									color,
									'callActionborderColor',
									'callActionborderHoverColor',
									ActiveCallActionborderColor
								)
							}
							activeKey     = { ActiveCallActionborderColor }
							from          = "infoCallActionBorderColor"
							setAttributes = { setAttributes }
						/ >

						< Spacing
							setAttributes = { setAttributes }
							space         = { callActionBorderRadius }
							label         = "Border Radius"
							attributesKey = "callActionBorderRadius"
						/ >
					< / PanelBody >
				< / PanelBody >
			) }

			{ /* Global Border */ }
			< PanelBody title = "Border" initialOpen = { false } >
				< SelectControl
					label     = { __( 'Border Type', 'postinfo' ) }
					value     = { BorderType }
					options   = { [
						{ label: 'None', value: 'none' },
						{ label: 'Solid', value: 'solid' },
						{ label: 'Dotted', value: 'dotted' },
						{ label: 'Dashed', value: 'dashed' },
						{ label: 'Groove', value: 'groove' },
						{ label: 'Inset', value: 'inset' },
						{ label: 'Outset', value: 'outset' },
						{ label: 'Ridge', value: 'ridge' },
						] }
					onChange  = { ( val ) => setAttributes( { BorderType: val } ) }
				/ >

				< Spacing
					setAttributes = { setAttributes }
					space         = { BorderWidth }
					label         = "Border Width"
					attributesKey = "BorderWidth"
				/ >

				< ColorPickerGroup
					label         = "Border Color"
					value         = { getActiveColor(
						borderColor,
						borderHoverColor,
						ActiveBorderColor
					) }
					onChange      = { ( color ) =>
						handleColorChange(
							color,
							'borderColor',
							'borderHoverColor',
							ActiveBorderColor
						)
					}
					activeKey     = { ActiveBorderColor }
					from          = "infoBorderColor"
					setAttributes = { setAttributes }
				/ >

				< Spacing
					setAttributes = { setAttributes }
					space         = { BorderRadius }
					label         = "Border Radius"
					attributesKey = "BorderRadius"
				/ >
			< / PanelBody >

			{ /* Background */ }
			< PanelBody title     = "Background" initialOpen = { false } >
				< ColorPickerGroup
					label         = "Background"
					value         = { getActiveColor(
						background,
						backgroundHover,
						activeBackground
					) }
					onChange      = { ( color ) =>
						handleColorChange(
							color,
							'background',
							'backgroundHover',
							activeBackground
						)
					}
					activeKey     = { activeBackground }
					from          = "infoBackground"
					setAttributes = { setAttributes }
				/ >
			< / PanelBody >

			{ /* Box Shadow */ }
			< PanelBody title             = "Box-Shadow" initialOpen = { false } >
				< ToggleControl
					label                 = { __( 'Box-Shadow', 'infobox' ) }
					checked               = { isBoxShadow }
					onChange              = { ( val ) =>
						setAttributes( { isBoxShadow: val } )
					}
				/ >
				{ isBoxShadow && (
					< >
						< Spacing
							setAttributes = { setAttributes }
							space         = { boxShadowControl }
							label         = "Shadow"
							attributesKey = "boxShadowControl"
						/ >

						< ColorPickerGroup
							label         = "Shadow Color"
							value         = { getActiveColor(
								boxShadowColor,
								boxShadowHover,
								ActiveboxShadowColor
							) }
							onChange      = { ( color ) =>
								handleColorChange(
									color,
									'boxShadowColor',
									'boxShadowHover',
									ActiveboxShadowColor
								)
							}
							activeKey     = { ActiveboxShadowColor }
							from          = "infoBoxShadow"
							setAttributes = { setAttributes }
						/ >
					< / >
				) }
			< / PanelBody >

			{ /* spacing */ }
			< PanelBody title         = "Spacing" initialOpen = { false } >
				< PanelBody title     = "Padding" initialOpen = { false } >
					< Spacing
						label         = { 'Padding' }
						setAttributes = { setAttributes }
						space         = { padding }
						attributesKey = "padding"
					/ >
				< / PanelBody >
				< PanelBody title     = "Margin" initialOpen = { false } >
					< Spacing
						label         = { 'Margin' }
						setAttributes = { setAttributes }
						space         = { margin }
						attributesKey = "margin"
					/ >
				< / PanelBody >
			< / PanelBody >
		< / div >
	);
}
