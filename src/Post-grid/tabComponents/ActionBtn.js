import { __ } from '@wordpress/i18n';
import {
	Button,
	ButtonGroup,
	PanelBody,
	ToggleControl,
} from '@wordpress/components';

export default function ActionBtn( {
	setAttributes,
	readMore,
	readMoreAlignment,
} ) {
	const handleReadMoreButton = ( value ) => {
		setAttributes( { readMore: value } );
	};

	const alignments = [ 'left', 'center', 'right' ];

	return (
		<PanelBody title="Action Button" initialOpen={ false }>
			<ToggleControl
				label={ __( 'Read More', 'postgrid' ) }
				checked={ readMore }
				onChange={ handleReadMoreButton }
			/>

			<div style={ { marginTop: '16px' } }>
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
								isPressed={ readMoreAlignment === align }
								variant="secondary"
								style={ {
									backgroundColor:
										readMoreAlignment === align
											? '#008db4'
											: '',
									color:
										readMoreAlignment === align
											? '#fff'
											: '',
								} }
								onClick={ () =>
									setAttributes( {
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
		</PanelBody>
	);
}
