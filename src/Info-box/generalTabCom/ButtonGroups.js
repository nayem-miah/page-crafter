import { __ } from '@wordpress/i18n';
import { Button, ButtonGroup } from '@wordpress/components';

export default function ButtonGroups( {
	currentItem,
	setAttributes,
	fromWhere = null,
} ) {
	const tags = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p' ];
	const tytpes = ['None', 'Text', 'Button'];

	const mapItems = fromWhere === 'title' ? tags : tytpes;
	return (
		<div style={{ marginTop: '16px', marginBottom: '16px' }}>
			{fromWhere === 'title' ? <strong>{__('Title Tag', 'postgrid')}</strong> : <strong>{__('Type', 'postgrid')}</strong>}
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
					{ mapItems.map( ( item ) => (
						<Button
							key={ item }
							isPressed={ currentItem === item }
							variant="secondary"
							style={ {
								backgroundColor:
									currentItem === item ? '#008db4' : '',
								color: currentItem === item ? '#fff' : '',
								padding: '4px 14px',
								fontSize: '9px',
								minWidth: '0px',
								textTransform: 'uppercase',
							} }
							onClick={ () =>
								fromWhere === 'title'
									? setAttributes( { titleTag: item } )
									: setAttributes( { readMoreType: item } )
							}
						>
							{ item }
						</Button>
					) ) }
				</ButtonGroup>
			</div>
		</div>
	);
}
