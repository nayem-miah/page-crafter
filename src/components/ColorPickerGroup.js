import { ColorPalette } from '@wordpress/components';
import GroupButton from './GroupButton';
import { __ } from '@wordpress/i18n';
const ColorPickerGroup = ( {
	label,
	value,
	onChange,
	activeKey,
	from,
	setAttributes      = { setAttributes },
} ) => (
	< >
		< div style                 = { { marginTop: '16px', marginBottom: '16px' } } >
			< strong > { __( label, 'postinfo' ) } < / strong >
			< div
				style               = { {
					display: 'flex',
					justifyContent: 'center',
					marginTop: '8px',
					} }
			>
				< GroupButton
					active          = { activeKey }
					setAttributes   = { setAttributes }
					from            = { from }
				/ >
			< / div >
		< / div >
		< div style                 = { { marginTop: '16px' } } >
			< ColorPalette
				value               = { value }
				onChange            = { onChange }
				disableCustomColors = { false }
			/ >
		< / div >
	< / >
);

export default ColorPickerGroup;
