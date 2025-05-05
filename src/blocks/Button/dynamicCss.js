import cssString from '../../utils/objectToCss';

const dynamicCss = ( attributes ) => {
	const { btnAlign } = attributes;

	const deskTopStyles = {
		[ `.wp-block-create-block-button .btn-wrapper` ]: {
			'text-align': btnAlign,
		},
	};

	const deskTopCss = cssString( deskTopStyles );

	return deskTopCss;
};

export default dynamicCss;
