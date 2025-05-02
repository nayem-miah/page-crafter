import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl, ToggleControl } from '@wordpress/components';
import Alignmnet from './../../../components/Alignment';

export default function Content( {
	setAttributes,
	showExcerpt,
	showMeta,
	showTitle,
	excerptMaxWords,
	contentAlignment,
	togglePanel,
	openPanel,
} ) {
	const HandleTitleVisibility   = ( value ) => {
		setAttributes(
			{
				showTitle: value,
			}
		);
	};
	const HandleExcerptVisibility = ( value ) => {
		setAttributes(
			{
				showExcerpt: value,
			}
		);
	};
	const HandleMetaVisibility    = ( value ) => {
		setAttributes(
			{
				showMeta: value,
			}
		);
	};

	const handleExcerptMaxWord = ( value ) => {
		setAttributes(
			{
				excerptMaxWords: value,
			}
		);
	};
	return (
		< PanelBody
			title              = "Content"
			opened             = { openPanel === 'content' }
			onToggle           = { () => togglePanel( 'content' ) }
		>
			< Alignmnet
				setAttributes  = { setAttributes }
				value          = { contentAlignment }
				attributeKey   = "contentAlignment"
			/ >

			< PanelBody title = "Title" initialOpen = { false } >
				< ToggleControl
					label     = { __( 'Title Visibility', 'postgrid' ) }
					checked   = { showTitle }
					onChange  = { HandleTitleVisibility }
				/ >
			< / PanelBody >
			< PanelBody title = "Excerpt" initialOpen = { false } >
				< ToggleControl
					label     = { __( 'Excerpt Visibility', 'postgrid' ) }
					checked   = { showExcerpt }
					onChange  = { HandleExcerptVisibility }
				/ >
				< RangeControl
					label     = { __( 'Max Number of Words', 'postgrid' ) }
					min       = { 5 }
					max       = { 50 }
					onChange  = { handleExcerptMaxWord }
					value     = { excerptMaxWords }
				/ >
			< / PanelBody >
			< PanelBody title = "Meta" initialOpen = { false } >
				< ToggleControl
					label     = { __( 'Meta Visibility', 'postgrid' ) }
					checked   = { showMeta }
					onChange  = { HandleMetaVisibility }
				/ >
			< / PanelBody >
		< / PanelBody >
	);
}
