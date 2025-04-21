import { PanelBody, TextControl } from '@wordpress/components';
export default function AdvanceTab( { additionalClass, setAttributes } ) {
	return (
		<div>
			<PanelBody title="Visibility Option" initialOpen={ true }>
				<p>General settings content here</p>
			</PanelBody>
			<PanelBody title="Advanced" initialOpen={ false }>
				<TextControl
					label="Custom Class"
					value={ additionalClass || '' }
					onChange={ ( value ) =>
						setAttributes( { additionalClass: value } )
					}
					placeholder="e.g. my-custom-class"
				/>
			</PanelBody>
		</div>
	);
}
