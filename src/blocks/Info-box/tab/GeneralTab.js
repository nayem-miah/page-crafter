import { PanelBody, ToggleControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import Alignmnet from '../../../components/Alignment';
import ButtonGroups from './../../../components/GroupButton';
export default function GeneralTab( { setAttributes, attributes } ) {
	const {
		showContent,
		showTitle,
		contentAlign,
		titleTag,
		readMoreType,
		readMoreIconShow,
	} = attributes;
	const [ openPanel, setOpenPanel ] = useState( 'general' ); // default open panel

	const togglePanel = ( panelKey ) => {
		setOpenPanel( openPanel === panelKey ? null : panelKey );
	};

	return (
		<div>
			<PanelBody
				title="Content"
				opened={ openPanel === 'pagination' }
				onToggle={ () => togglePanel( 'pagination' ) }
			>
				<Alignmnet
					fromWhere="content"
					setAttributes={ setAttributes }
					alignProp={ contentAlign }
				/>
				<div style={ { marginTop: '16px', marginBottom: '16px' } }>
					<ToggleControl
						label="Show Title"
						checked={ showTitle }
						onChange={ ( value ) => {
							setAttributes( { showTitle: value } );
						} }
					/>
				</div>
				<div style={ { marginTop: '16px', marginBottom: '16px' } }>
					<ToggleControl
						label="Show Content"
						checked={ showContent }
						onChange={ ( value ) => {
							setAttributes( { showContent: value } );
						} }
					/>
				</div>

				<ButtonGroups
					setAttributes={ setAttributes }
					currentItem={ titleTag }
					fromWhere={ 'title' }
				/>
			</PanelBody>
			<PanelBody
				title="Call to Action"
				opened={ openPanel === 'action' }
				onToggle={ () => togglePanel( 'action' ) }
			>
				<ButtonGroups
					setAttributes={ setAttributes }
					fromWhere="readmore"
					currentItem={ readMoreType }
				/>
				<div style={ { marginTop: '16px', marginBottom: '16px' } }>
					<ToggleControl
						label="Show Icon"
						checked={ readMoreIconShow }
						onChange={ ( value ) => {
							setAttributes( { readMoreIconShow: value } );
						} }
					/>
				</div>
			</PanelBody>
		</div>
	);
}
