import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
export default function AdvanceTab( {
	additionalClass,
	setAttributes,
	useAjaxPagination,
	desktopHide,
	tabHide,
	MobileHide,
} ) {
	return (
		<div>
			<PanelBody title="Visibility Option" initialOpen={ false }>
				<ToggleControl
					label={ __( 'Hide on Desktop', 'postgrid' ) }
					checked={ !! desktopHide }
					onChange={ ( newVal ) =>
						setAttributes( { desktopHide: newVal } )
					}
				/>
				<ToggleControl
					label={ __( 'Hide on Tablet', 'postgrid' ) }
					checked={ !! tabHide }
					onChange={ ( newVal ) =>
						setAttributes( { tabHide: newVal } )
					}
				/>
				<ToggleControl
					label={ __( 'Hide on Mobile', 'postgrid' ) }
					checked={ !! MobileHide }
					onChange={ ( newVal ) =>
						setAttributes( { MobileHide: newVal } )
					}
				/>
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
