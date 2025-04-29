import { BoxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDeviceType } from '../utils/diviceType';
import Responsive from './Responsive';
export default function Spacing( {
	setAttributes,
	space,
	label,
	attributesKey,
} ) {
	const device = useDeviceType();
	return (
		<>
			<Responsive />
			<BoxControl
				label={ __( label, 'postinfo' ) }
				values={ space?.[ device ] }
				onChange={ ( newSpace ) => {
					const updateSpacing = {
						...space,
						[ device ]: newSpace,
					};
					setAttributes( {
						[ attributesKey ]: updateSpacing,
					} );
				} }
			/>
		</>
	);
}
