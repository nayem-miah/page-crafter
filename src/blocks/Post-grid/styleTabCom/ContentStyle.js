import { BoxControl, ColorPalette, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import GroupButton from './../../../components/GroupButton';
import Spacing from './../../../components/Spacing';
export default function ContentStyle( {
	setAttributes,
	activeBackground,
	contentBackgroundHover,
	contentBackground,
	contentPadding,
	contentMargin,
	titleMargin,
	titleActiveColor,
	titleHoverColor,
	titleColor,
	metaColor,
	metaHoverColor,
	metaActiveColor,
	metaMargin,
	desMargin,
	desColor,
	desHoverColor,
	desActiveColor,
	togglePanel,
	openPanel,
} ) {
	const currentContentBackgroundColor =
		activeBackground === 'default'
			? contentBackground
			: contentBackgroundHover;

	const currentTitleColor =
		titleActiveColor === 'default' ? titleColor : titleHoverColor;

	const currentMetaColor =
		metaActiveColor === 'default' ? metaColor : metaHoverColor;

	const currentDesColor   =
		desActiveColor === 'default' ? desColor : desHoverColor;
	const handleColorChange = ( color ) => {
		if ( activeBackground === 'default' ) {
			setAttributes( { contentBackground: color } );
		} else {
			setAttributes( { contentBackgroundHover: color } );
		}
	};

	const handleTitleColorChange = ( color ) => {
		if ( titleActiveColor === 'default' ) {
			setAttributes( { titleColor: color } );
		} else {
			setAttributes( { titleHoverColor: color } );
		}
	};
	const handleMetaColorChange = ( color ) => {
		if ( metaActiveColor === 'default' ) {
			setAttributes( { metaColor: color } );
		} else {
			setAttributes( { metaHoverColor: color } );
		}
	};
	const handleDesColorChange = ( color ) => {
		if ( desActiveColor === 'default' ) {
			setAttributes( { desColor: color } );
		} else {
			setAttributes( { desHoverColor: color } );
		}
	};

	return (
		< PanelBody
			title                     = "Content"
			opened                    = { openPanel === 'content' }
			onToggle                  = { () => togglePanel( 'content' ) }
		>
			< div style               = { { marginTop: '16px', marginBottom: '16px' } } >
				< strong > { __( 'Background', 'postgrid' ) } < / strong >
				< div
					style             = { {
						display: 'flex',
						justifyContent: 'center',
						marginTop: '8px',
						} }
				>
					< GroupButton
						active        = { activeBackground }
						setAttributes = { setAttributes }
						from          = { 'contentBackground' }
					/ >
				< / div >
			< / div >

			< div style                     = { { marginTop: '16px' } } >
				< ColorPalette
					value                   = { currentContentBackgroundColor }
					onChange                = { handleColorChange }
					disableCustomColors     = { false }
				/ >
			< / div >
			< PanelBody title               = "Padding" initialOpen = { false } >
				< Spacing
					setAttributes           = { setAttributes }
					space                   = { contentPadding }
					label                   = "Padding"
					attributesKey           = "contentPadding"
				/ >
			< / PanelBody >
			< PanelBody title               = "Margin" initialOpen = { false } >
				< Spacing
					setAttributes           = { setAttributes }
					space                   = { contentMargin }
					label                   = "Margin"
					attributesKey           = "contentMargin"
				/ >
			< / PanelBody >
			< PanelBody title               = "Title" initialOpen = { false } >
				< strong > { __( 'Color', 'postgrid' ) } < / strong >
				< GroupButton
					active                  = { titleActiveColor }
					setAttributes           = { setAttributes }
					from                    = { 'titleColor' }
				/ >
				< div style                 = { { marginTop: '16px' } } >
					< ColorPalette
						value               = { currentTitleColor }
						onChange            = { handleTitleColorChange }
						disableCustomColors = { false }
					/ >
				< / div >
				< Spacing
					setAttributes           = { setAttributes }
					space                   = { titleMargin }
					label                   = "Title Margin"
					attributesKey           = "titleMargin"
				/ >
			< / PanelBody >
			< PanelBody title               = "Meta" initialOpen = { false } >
				< strong > { __( 'Color', 'postgrid' ) } < / strong >
				< GroupButton
					active                  = { metaActiveColor }
					setAttributes           = { setAttributes }
					from                    = { 'metaColor' }
				/ >
				< div style                 = { { marginTop: '16px' } } >
					< ColorPalette
						value               = { currentMetaColor }
						onChange            = { handleMetaColorChange }
						disableCustomColors = { false }
					/ >
				< / div >

				< Spacing
					setAttributes           = { setAttributes }
					space                   = { metaMargin }
					label                   = "Meta Margin"
					attributesKey           = "metaMargin"
				/ >
			< / PanelBody >
			< PanelBody title               = "Description" initialOpen = { false } >
				< strong > { __( 'Color', 'postgrid' ) } < / strong >
				< GroupButton
					active                  = { desActiveColor }
					setAttributes           = { setAttributes }
					from                    = { 'desColor' }
				/ >
				< div style                 = { { marginTop: '16px' } } >
					< ColorPalette
						value               = { currentDesColor }
						onChange            = { handleDesColorChange }
						disableCustomColors = { false }
					/ >
				< / div >

				< Spacing
					setAttributes = { setAttributes }
					space         = { desMargin }
					label         = "Margin"
					attributesKey = "desMargin"
				/ >
			< / PanelBody >
		< / PanelBody >
	);
}
