import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
export default function AdvanceTab( { additionalClass, setAttributes, useAjaxPagination } ) {
	return (
		<div>
			<PanelBody title="Visibility Option" initialOpen={ false }>
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
				<ToggleControl
					label={ __( 'Enable AJAX Pagination', 'postgrid' ) }
					checked={ !! useAjaxPagination }
					onChange={ ( newVal ) =>
						setAttributes( { useAjaxPagination: newVal } )
					}
				/>
			</PanelBody>
		</div>
	);
}
