import { ColorPalette, PanelBody, BoxControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import GroupButton from '../../Post-grid/styleTabCom/GroupButton';

import { __ } from '@wordpress/i18n';
export default function StyleTab( { attributes, setAttributes } ) {
	const {
		titleMargin,
		titleHoverColor,
		titleColor,
		activeColor,
		activeContentColor,
		ContentMargin,
		ContentHoverColor,
		ContentColor,
		callActionBack,
		callActionColor,
		callActionHoverBack,
		callActionHoverColor,
		activeCallActionBack,
		activeCallActionColor,
		callActionPadding,
	} = attributes;
	const [ openPanel, setOpenPanel ] = useState( 'general' );
	const togglePanel = ( panelKey ) => {
		setOpenPanel( openPanel === panelKey ? null : panelKey );
	};

	const currentTitleColor =
		activeColor === 'default' ? titleColor : titleHoverColor;
	const currentContentColor =
		activeContentColor === 'default' ? ContentColor : ContentHoverColor;

	const currentCallActionColor =
		activeCallActionColor === 'default'
			? callActionColor
			: callActionHoverColor;

	const currentCallActionBackColor =
		activeCallActionBack === 'default'
			? callActionBack
			: callActionHoverBack;

	const handleTitleColorChange = ( color ) => {
		if ( activeColor === 'default' ) {
			setAttributes( { titleColor: color } );
		} else {
			setAttributes( { titleHoverColor: color } );
		}
	};

	const handleContnetColorChange = ( color ) => {
		if ( activeContentColor === 'default' ) {
			setAttributes( { ContentColor: color } );
		} else {
			setAttributes( { ContentHoverColor: color } );
		}
	};
	const handleCallActionColorChange = ( color ) => {
		if ( activeCallActionColor === 'default' ) {
			setAttributes( { callActionColor: color } );
		} else {
			setAttributes( { callActionHoverColor: color } );
		}
	};

	const handleCallActionBack = ( color ) => {
		if ( activeCallActionBack === 'default' ) {
			setAttributes( { callActionBack: color } );
		} else {
			setAttributes( { callActionHoverBack: color } );
		}
	};
	return (
		<div>
			<PanelBody
				title="Title"
				opened={ openPanel === 'title' }
				onToggle={ () => togglePanel( 'title' ) }
			>
				<div style={ { marginTop: '16px', marginBottom: '16px' } }>
					<strong>{ __( 'Color', 'postinfo' ) }</strong>
					<div
						style={ {
							display: 'flex',
							justifyContent: 'center',
							marginTop: '8px',
						} }
					>
						<GroupButton
							active={ activeColor }
							setAttributes={ setAttributes }
							from="infoTitleColor"
						/>
					</div>
				</div>

				<div style={ { marginTop: '16px' } }>
					<ColorPalette
						value={ currentTitleColor }
						onChange={ handleTitleColorChange }
						disableCustomColors={ false }
					/>
				</div>

				<BoxControl
					label={ __( 'Title Margin', 'postgrid' ) }
					units={ [
						{ label: 'px', value: 'px' },
						{ label: '%', value: '%' },
						{ label: 'em', value: 'em' },
						{ label: 'rem', value: 'rem' },
						{ label: 'vw', value: 'vw' },
						{ label: 'vh', value: 'vh' },
					] }
					values={ titleMargin }
					onChange={ ( newMargin ) =>
						setAttributes( { titleMargin: newMargin } )
					}
				/>
			</PanelBody>

			<PanelBody
				title="Content"
				opened={ openPanel === 'content' }
				onToggle={ () => togglePanel( 'content' ) }
			>
				<div style={ { marginTop: '16px', marginBottom: '16px' } }>
					<strong>{ __( 'Color', 'postinfo' ) }</strong>
					<div
						style={ {
							display: 'flex',
							justifyContent: 'center',
							marginTop: '8px',
						} }
					>
						<GroupButton
							active={ activeContentColor }
							setAttributes={ setAttributes }
							from="infoContentColor"
						/>
					</div>
				</div>

				<div style={ { marginTop: '16px' } }>
					<ColorPalette
						value={ currentContentColor }
						onChange={ handleContnetColorChange }
						disableCustomColors={ false }
					/>
				</div>

				<BoxControl
					label={ __( 'Contnet Margin', 'postgrid' ) }
					units={ [
						{ label: 'px', value: 'px' },
						{ label: '%', value: '%' },
						{ label: 'em', value: 'em' },
						{ label: 'rem', value: 'rem' },
						{ label: 'vw', value: 'vw' },
						{ label: 'vh', value: 'vh' },
					] }
					values={ ContentMargin }
					onChange={ ( newMargin ) =>
						setAttributes( { ContentMargin: newMargin } )
					}
				/>
			</PanelBody>

			<PanelBody
				title="Call To Action"
				opened={ openPanel === 'callAction' }
				onToggle={ () => togglePanel( 'callAction' ) }
			>
				<div style={ { marginTop: '16px', marginBottom: '16px' } }>
					<strong>{ __( 'Color', 'postinfo' ) }</strong>
					<div
						style={ {
							display: 'flex',
							justifyContent: 'center',
							marginTop: '8px',
						} }
					>
						<GroupButton
							active={ activeCallActionColor }
							setAttributes={ setAttributes }
							from="infoCallActionColor"
						/>
					</div>
				</div>

				<div style={ { marginTop: '16px' } }>
					<ColorPalette
						value={ currentCallActionColor }
						onChange={ handleCallActionColorChange }
						disableCustomColors={ false }
					/>
				</div>

				{ /* backgroundColor */ }

				<div style={ { marginTop: '16px', marginBottom: '16px' } }>
					<strong>{ __( 'Background', 'postinfo' ) }</strong>
					<div
						style={ {
							display: 'flex',
							justifyContent: 'center',
							marginTop: '8px',
						} }
					>
						<GroupButton
							active={ activeCallActionBack }
							setAttributes={ setAttributes }
							from="infoCallActionBackColor"
						/>
					</div>
				</div>

				<div style={ { marginTop: '16px' } }>
					<ColorPalette
						value={ currentCallActionBackColor }
						onChange={ handleCallActionBack }
						disableCustomColors={ false }
					/>
				</div>

				<BoxControl
					label={ __( 'Padding', 'postInfo' ) }
					units={ [
						{ label: 'px', value: 'px' },
						{ label: '%', value: '%' },
						{ label: 'em', value: 'em' },
						{ label: 'rem', value: 'rem' },
						{ label: 'vw', value: 'vw' },
						{ label: 'vh', value: 'vh' },
					] }
					values={ callActionPadding }
					onChange={ ( newMargin ) =>
						setAttributes( { callActionPadding: newMargin } )
					}
				/>
			</PanelBody>
		</div>
	);
}
