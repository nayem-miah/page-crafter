import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl } from '@wordpress/components';
export default function Image( { displayImage, setAttributes } ) {
	const HandleDisplayFeatureImage = ( value ) => {
		setAttributes( {
			displayImage: value,
		} );
	};
	return (
		<PanelBody title="Image" initialOpen={ false }>
			<ToggleControl
				label={ __( 'Display Featured Image', 'postgrid' ) }
				checked={ displayImage }
				onChange={ HandleDisplayFeatureImage }
			/>
		</PanelBody>
	);
}
