import { __ } from '@wordpress/i18n';
import {
	Button,
	ButtonGroup,
	PanelBody,
	RangeControl,
} from '@wordpress/components';

export default function General( {
	order,
	setAttributes,
	columns,
	columnGap,
	numberOfPosts,
	togglePanel,
	openPanel,
} ) {
	const HandleNumberOfItems = ( value ) => {
		setAttributes( {
			numberOfPosts: value,
		} );
	};

	const HandleComuns = ( value ) => {
		setAttributes( {
			columns: value,
		} );
	};
	const HandleColumnGap = ( value ) => {
		setAttributes( {
			columnGap: value,
		} );
	};
	return (
		<PanelBody
			title="General"
			opened={ openPanel === 'general' }
			onToggle={ () => togglePanel( 'general' ) }
		>
			<RangeControl
				label={ __( 'Columns', 'postgrid' ) }
				min={ 2 }
				max={ 6 }
				onChange={ HandleComuns }
				value={ columns }
			/>

			<RangeControl
				label={ __( 'Gap Between Item', 'postgrid' ) }
				min={ 0 }
				max={ 100 }
				onChange={ HandleColumnGap }
				value={ columnGap }
			/>
			<RangeControl
				label={ __( 'Number of Posts', 'postgrid' ) }
				min={ 1 }
				max={ 10 }
				onChange={ HandleNumberOfItems }
				value={ numberOfPosts }
			/>

			<div style={ { marginTop: '16px' } }>
				<strong>Order</strong>
				<div
					style={ {
						display: 'flex',
						justifyContent: 'center',
						marginTop: '8px',
					} }
				>
					<ButtonGroup>
						<Button
							isPressed={ order === 'asc' }
							variant="secondary"
							style={ {
								backgroundColor:
									order === 'asc' ? '#008db4' : '',
								color: order === 'asc' ? '#fff' : '',
							} }
							onClick={ () =>
								setAttributes( {
									order: 'asc',
								} )
							}
						>
							Ascending ↑
						</Button>
						<Button
							isPressed={ order === 'desc' }
							variant="secondary"
							style={ {
								backgroundColor:
									order === 'desc' ? '#008db4' : '',
								color: order === 'desc' ? '#fff' : '',
							} }
							onClick={ () =>
								setAttributes( {
									order: 'desc',
								} )
							}
						>
							Descending ↓
						</Button>
					</ButtonGroup>
				</div>
			</div>
		</PanelBody>
	);
}
