import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl } from '@wordpress/components';
export default function Image( {
	displayImage,
	setAttributes,
	togglePanel,
	openPanel,
} ) {
	const HandleDisplayFeatureImage = ( value ) => {
		setAttributes( {
			displayImage: value,
		} );
	};
	return (
		<PanelBody
			title="Image"
			opened={ openPanel === 'image' }
			onToggle={ () => togglePanel( 'image' ) }
		>
			<ToggleControl
				label={ __( 'Display Featured Image', 'postgrid' ) }
				checked={ displayImage }
				onChange={ HandleDisplayFeatureImage }
			/>
		</PanelBody>
	);
}
