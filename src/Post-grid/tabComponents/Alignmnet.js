import { __ } from '@wordpress/i18n';
import { Button, ButtonGroup } from '@wordpress/components';
export default function Alignmnet( {
	alignProp,
	fromWhere = null,
	setAttributes,
} ) {
	const alignments = [ 'left', 'center', 'right' ];

	return (
		<div style={ { marginTop: '16px', marginBottom:'16px'} }>
			<strong>{ __( 'Alignment', 'postgrid' ) }</strong>
			<div
				style={ {
					display: 'flex',
					justifyContent: 'center',
					marginTop: '8px',
				} }
			>
				<ButtonGroup>
					{ alignments.map( ( align ) => (
						<Button
							key={ align }
							isPressed={ alignProp === align }
							variant="secondary"
							style={ {
								backgroundColor:
									alignProp === align ? '#008db4' : '',
								color: alignProp === align ? '#fff' : '',
							} }
							onClick={ () =>
								fromWhere === 'content'
									? setAttributes( {
											contentAlignment: align,
									  } )
									: setAttributes( {
											readMoreAlignment: align,
									  } )
							}
						>
							{ align.charAt( 0 ).toUpperCase() +
								align.slice( 1 ) }
						</Button>
					) ) }
				</ButtonGroup>
			</div>
		</div>
	);
}
