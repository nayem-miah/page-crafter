import { __ } from '@wordpress/i18n';
import { Button, ButtonGroup } from '@wordpress/components';

export default function SelectableButtonGroup( {
	label,
	items = [],
	currentItem,
	attributeKey,
	setAttributes,
} ) {
	return (
		<div style={ { marginTop: '16px', marginBottom: '16px' } }>
			<strong>{ __( label, 'postgrid' ) }</strong>
			<div
				style={ {
					display: 'flex',
					justifyContent: 'center',
					marginTop: '8px',
					flexWrap: 'wrap',
					gap: '8px',
				} }
			>
				<ButtonGroup>
					{ items.map( ( item ) => {
						const isActive = currentItem === item;
						return (
							<Button
								key={ item }
								isPressed={ isActive }
								variant="secondary"
								style={ {
									backgroundColor: isActive ? '#008db4' : '',
									color: isActive ? '#fff' : '',
									padding: '4px 14px',
									fontSize: '9px',
									minWidth: '0px',
									textTransform: 'uppercase',
								} }
								onClick={ () =>
									setAttributes( { [ attributeKey ]: item } )
								}
							>
								{ item }
							</Button>
						);
					} ) }
				</ButtonGroup>
			</div>
		</div>
	);
}
