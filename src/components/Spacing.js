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

	const sanitizeBoxValues = ( obj = {} ) => ( {
		top: parseInt( obj.top ) || 0,
		right: parseInt( obj.right ) || 0,
		bottom: parseInt( obj.bottom ) || 0,
		left: parseInt( obj.left ) || 0,
	} );

	return (
		<>
			<Responsive />
			<BoxControl
				label={ __( label, 'postinfo' ) }
				values={ sanitizeBoxValues( space?.[ device ] ) }
				onChange={ ( newSpace ) => {
					const updateSpacing = {
						...space,
						[ device ]: sanitizeBoxValues( newSpace ),
					};
					setAttributes( {
						[ attributesKey ]: updateSpacing,
					} );
				} }
			/>
		</>
	);
}
