import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
export default function VisibilityOptions( {
	setAttributes,
	desktopHide,
	tabHide,
	MobileHide,
} ) {
	return (
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
				onChange={ ( newVal ) => setAttributes( { tabHide: newVal } ) }
			/>
			<ToggleControl
				label={ __( 'Hide on Mobile', 'postgrid' ) }
				checked={ !! MobileHide }
				onChange={ ( newVal ) =>
					setAttributes( { MobileHide: newVal } )
				}
			/>
		</PanelBody>
	);
}
