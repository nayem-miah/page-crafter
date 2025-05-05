import { PanelBody, ToggleControl, TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import Alignmnet from '../../../components/Alignment';
import SelectableButtonGroup from '../../../components/SelectableButtonGroup';
export default function GeneralTab( { setAttributes, attributes } ) {
	const {
		showContent,
		showTitle,
		contentAlign,
		readMoreType,
		readMoreIconShow,
		readMoreUrl,
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
					attributeKey="contentAlign"
					setAttributes={ setAttributes }
					value={ contentAlign }
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

				<SelectableButtonGroup
					label="Title Tag"
					items={ [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p' ] }
					currentItem={ attributes.titleTag }
					attributeKey="titleTag"
					setAttributes={ setAttributes }
				/>
			</PanelBody>
			<PanelBody
				title="Call to Action"
				opened={ openPanel === 'action' }
				onToggle={ () => togglePanel( 'action' ) }
			>
				<SelectableButtonGroup
					setAttributes={ setAttributes }
					currentItem={ readMoreType }
					attributeKey="readMoreType"
					label="Type"
					items={ [ 'None', 'Text', 'Button' ] }
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

				<TextControl
					label="Read More URL"
					value={ readMoreUrl }
					onChange={ ( value ) =>
						setAttributes( { readMoreUrl: value } )
					}
					placeholder="My-custom-class"
				/>
			</PanelBody>
		</div>
	);
}
