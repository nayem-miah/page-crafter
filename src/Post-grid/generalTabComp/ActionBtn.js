import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	ToggleControl,
} from '@wordpress/components';
import Alignmnet from './Alignmnet';

export default function ActionBtn( {
	setAttributes,
	readMore,
	readMoreAlignment,
} ) {
	const handleReadMoreButton = ( value ) => {
		setAttributes( { readMore: value } );
	};

	return (
		<PanelBody title="Action Button" initialOpen={ false }>
			<ToggleControl
				label={ __( 'Read More', 'postgrid' ) }
				checked={ readMore }
				onChange={ handleReadMoreButton }
			/>
			<Alignmnet alignProp={ readMoreAlignment } setAttributes={setAttributes}   />
		</PanelBody>
	);
}
