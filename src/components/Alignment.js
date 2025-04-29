
import { Button, ButtonGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Alignment( { value, attributeKey, setAttributes } ) {
	const alignments = [ 'left', 'center', 'right' ];

	const containerStyle = { marginTop: '16px', marginBottom: '16px' };
	const buttonWrapperStyle = {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '8px',
	};

	const handleClick = ( align ) => {
		setAttributes( { [ attributeKey ]: align } );
	};

	return (
		<div style={ containerStyle }>
			<strong>{ __( 'Alignment', 'postgrid' ) }</strong>
			<div style={ buttonWrapperStyle }>
				<ButtonGroup>
					{ alignments.map( ( align ) => {
						const isActive = value === align;
						return (
							<Button
								key={ align }
								isPressed={ isActive }
								variant="secondary"
								style={ {
									backgroundColor: isActive ? '#008db4' : '',
									color: isActive ? '#fff' : '',
									padding: '2px 14px',
									fontSize: '13px',
									minWidth: '70px',
								} }
								onClick={ () => handleClick( align ) }
							>
								{ align.charAt( 0 ).toUpperCase() +
									align.slice( 1 ) }
							</Button>
						);
					} ) }
				</ButtonGroup>
			</div>
		</div>
	);
}


