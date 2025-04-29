import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import VisibilityOptions from '../../../components/VisibilityOptions';
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
			<VisibilityOptions
				setAttributes={ setAttributes }
				desktopHide={ desktopHide }
				tabHide={ tabHide }
				MobileHide={ MobileHide }
			/>

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
