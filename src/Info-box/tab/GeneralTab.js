import { PanelBody } from '@wordpress/components';
import { useState } from '@wordpress/element';
export default function GeneralTab() {
	const [ openPanel, setOpenPanel ] = useState( 'general' ); // default open panel

	const togglePanel = ( panelKey ) => {
		setOpenPanel( openPanel === panelKey ? null : panelKey );
	};

	return (
		<div>
			<PanelBody
				title="Pagination"
				opened={ openPanel === 'pagination' }
				onToggle={ () => togglePanel( 'pagination' ) }
			>
				<p>General settings content here</p>
			</PanelBody>
		</div>
	);
}
