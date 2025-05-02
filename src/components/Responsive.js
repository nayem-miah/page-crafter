import { Button } from '@wordpress/components';
import { dispatch, select } from '@wordpress/data';
import { useSelect } from '@wordpress/data';

import { DesktopIcon, TabletIcon, MobileIcon } from '../utils/svgIcon';

const Responsive     = () => {
	const deviceType = useSelect(
		() =>
		select( 'core/edit-post' ).__experimentalGetPreviewDeviceType ? .(
	) ||
			select( 'core/edit-site' ).__experimentalGetPreviewDeviceType ? .()
	);

	const Device             = ( e ) => {
		const canvas         = document.getElementsByClassName(
			'edit-site-visual-editor__editor-canvas'
		);
		const selectedDevice = e.target.closest( 'button' ).value;

	if ( canvas.length > 0 ) {
		dispatch( 'core/edit-site' ).__experimentalSetPreviewDeviceType(
			selectedDevice
		);
	} else {
		dispatch( 'core/edit-post' ).__experimentalSetPreviewDeviceType(
			selectedDevice
		);
	}
	};

	return (
		< div
			style = { {
				padding: '12px',
				border: '1px solid #ddd',
				borderRadius: '8px',
				marginTop: '12px',
				backgroundColor: '#f9f9f9',
				} }
		>

			< div style       = { { display: 'flex', gap: '8px' } } >
				< Button
					isPressed = { deviceType === 'Desktop' }
					value     = "Desktop"
					onClick   = { Device }
				>
					< DesktopIcon / >
				< / Button >
				< Button
					isPressed = { deviceType === 'Tablet' }
					value     = "Tablet"
					onClick   = { Device }
				>
					< TabletIcon / >
				< / Button >
				< Button
					isPressed = { deviceType === 'Mobile' }
					value     = "Mobile"
					onClick   = { Device }
				>
					< MobileIcon / >
				< / Button >
			< / div >
		< / div >
	);
};

export default Responsive;
