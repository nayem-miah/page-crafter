import { useSelect } from '@wordpress/data';

export const useDeviceType = () => {
	const deviceType = useSelect( ( select ) => {
		const canvas = document.getElementsByClassName(
			'edit-site-visual-editor__editor-canvas'
		);
		const store = canvas.length > 0 ? 'core/edit-site' : 'core/edit-post';

		return (
			select( store )?.__experimentalGetPreviewDeviceType() || 'Desktop'
		);
	}, [] );

	return deviceType;
};
