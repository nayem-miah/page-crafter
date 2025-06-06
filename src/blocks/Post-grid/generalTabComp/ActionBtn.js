import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Alignmnet from './../../../components/Alignment';

export default function ActionBtn( {
	setAttributes,
	readMore,
	readMoreAlignment,
	togglePanel,
	openPanel,
} ) {
	const handleReadMoreButton = ( value ) => {
		setAttributes( { readMore: value } );
	};

	return (
		< PanelBody
			title             = "Action Button"
			opened            = { openPanel === 'actionBtn' }
			onToggle          = { () => togglePanel( 'actionBtn' ) }
		>
			< ToggleControl
				label         = { __( 'Read More', 'postgrid' ) }
				checked       = { readMore }
				onChange      = { handleReadMoreButton }
			/ >
			< Alignmnet
				value         = { readMoreAlignment }
				attributeKey  = { 'readMoreAlignment' }
				setAttributes = { setAttributes }
			/ >
		< / PanelBody >
	);
}
