import {
	ColorPalette,
	PanelBody,
	BoxControl,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import GroupButton from '../../Post-grid/styleTabCom/GroupButton';

import { __ } from '@wordpress/i18n';
import Responsive from '../../Post-grid/components/Responsive';

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
		callActionBorderType,
		callActionBorderRadius,
		callActionborderColor,
		callActionBorderWidth,
		callActionborderHoverColor,
		ActiveCallActionborderColor,
		BorderType,
		BorderWidth,
		borderHoverColor,
		BorderRadius,
		ActiveBorderColor,
		borderColor,
		activeBackground,
		backgroundHover,
		background,
		isBoxShadow,
		boxShadowColor,
		boxShadowHover,
		boxShadowControl,
		ActiveboxShadowColor,
		margin,
		padding,
	} = attributes;
	const [ openPanel, setOpenPanel ] = useState( 'general' );
	const togglePanel = ( panelKey ) => {
		setOpenPanel( openPanel === panelKey ? null : panelKey );
	};

	const currentTitleColor =
		activeColor === 'default' ? titleColor : titleHoverColor;

	const currentBoxShadowColor =
		ActiveboxShadowColor === 'default' ? boxShadowColor : boxShadowHover;
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

	const currentCallActionBorderColor =
		ActiveCallActionborderColor === 'default'
			? callActionborderColor
			: callActionborderHoverColor;

	const currentBorderColor =
		ActiveBorderColor === 'default' ? borderColor : borderHoverColor;

	const currentBackground =
		activeBackground === 'default' ? background : backgroundHover;

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

	const handleBorderColor = ( color ) => {
		if ( ActiveBorderColor === 'default' ) {
			setAttributes( { borderColor: color } );
		} else {
			setAttributes( { borderHoverColor: color } );
		}
	};

	const handleCallActionBack = ( color ) => {
		if ( activeCallActionBack === 'default' ) {
			setAttributes( { callActionBack: color } );
		} else {
			setAttributes( { callActionHoverBack: color } );
		}
	};

	const handeBorderTypeSelect = ( value ) => {
		setAttributes( { callActionBorderType: value } );
	};
	const handleCallActionBorderColor = ( color ) => {
		if ( ActiveCallActionborderColor === 'default' ) {
			setAttributes( { callActionborderColor: color } );
		} else {
			setAttributes( { callActionborderHoverColor: color } );
		}
	};

	const handleBackground = ( value ) => {
		if ( activeBackground === 'default' ) {
			setAttributes( {
				background: value,
			} );
		} else {
			setAttributes( {
				backgroundHover: value,
			} );
		}
	};

	const handleBoxShadow = ( value ) => {
		if ( ActiveboxShadowColor === 'default' ) {
			setAttributes( {
				boxShadowColor: value,
			} );
		} else {
			setAttributes( {
				boxShadowHover: value,
			} );
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

				<PanelBody title="Border" initialOpen={ false }>
					<div style={ { marginTop: '16px', marginBottom: '16px' } }>
						<strong>{ __( 'Border Type', 'postinfo' ) }</strong>

						<SelectControl
							value={ callActionBorderType }
							options={ [
								{ label: 'None', value: 'none' },
								{ label: 'Solid', value: 'solid' },
								{ label: 'Dotted', value: 'dotted' },
								{ label: 'Dashed', value: 'dashed' },
								{ label: 'Groove', value: 'groove' },
								{ label: 'Inset', value: 'inset' },
								{ label: 'Outset', value: 'outset' },
								{ label: 'Ridge', value: 'ridge' },
							] }
							onChange={ handeBorderTypeSelect }
							__next40pxDefaultSize
							__nextHasNoMarginBottom
						/>
					</div>

					<BoxControl
						label={ __( 'Border Width', 'postgrid' ) }
						units={ [
							{ label: 'px', value: 'px' },
							{ label: '%', value: '%' },
							{ label: 'em', value: 'em' },
							{ label: 'rem', value: 'rem' },
							{ label: 'vw', value: 'vw' },
							{ label: 'vh', value: 'vh' },
						] }
						values={ callActionBorderWidth }
						onChange={ ( newMargin ) =>
							setAttributes( {
								callActionBorderWidth: newMargin,
							} )
						}
					/>
					<div style={ { marginTop: '16px', marginBottom: '16px' } }>
						<strong>{ __( 'Border Color', 'postinfo' ) }</strong>
						<div
							style={ {
								display: 'flex',
								justifyContent: 'center',
								marginTop: '8px',
							} }
						>
							<GroupButton
								active={ ActiveCallActionborderColor }
								setAttributes={ setAttributes }
								from="infoCallActionBorderColor"
							/>
						</div>
					</div>

					<div style={ { marginTop: '16px' } }>
						<ColorPalette
							value={ currentCallActionBorderColor }
							onChange={ handleCallActionBorderColor }
							disableCustomColors={ false }
						/>
					</div>

					<BoxControl
						label={ __( 'Border Radius', 'postgrid' ) }
						units={ [
							{ label: 'px', value: 'px' },
							{ label: '%', value: '%' },
							{ label: 'em', value: 'em' },
							{ label: 'rem', value: 'rem' },
							{ label: 'vw', value: 'vw' },
							{ label: 'vh', value: 'vh' },
						] }
						values={ callActionBorderRadius }
						onChange={ ( newBorderRadius ) =>
							setAttributes( {
								callActionBorderRadius: newBorderRadius,
							} )
						}
					/>
				</PanelBody>
			</PanelBody>

			<PanelBody title="Border" initialOpen={ false }>
				<div style={ { marginTop: '16px', marginBottom: '16px' } }>
					<strong>{ __( 'Border Type', 'postinfo' ) }</strong>

					<SelectControl
						value={ BorderType }
						options={ [
							{ label: 'None', value: 'none' },
							{ label: 'Solid', value: 'solid' },
							{ label: 'Dotted', value: 'dotted' },
							{ label: 'Dashed', value: 'dashed' },
							{ label: 'Groove', value: 'groove' },
							{ label: 'Inset', value: 'inset' },
							{ label: 'Outset', value: 'outset' },
							{ label: 'Ridge', value: 'ridge' },
						] }
						onChange={ ( value ) => {
							setAttributes( { BorderType: value } );
						} }
						__next40pxDefaultSize
						__nextHasNoMarginBottom
					/>
				</div>

				<BoxControl
					label={ __( 'Border Width', 'postgrid' ) }
					units={ [
						{ label: 'px', value: 'px' },
						{ label: '%', value: '%' },
						{ label: 'em', value: 'em' },
						{ label: 'rem', value: 'rem' },
						{ label: 'vw', value: 'vw' },
						{ label: 'vh', value: 'vh' },
					] }
					values={ BorderWidth }
					onChange={ ( newMargin ) =>
						setAttributes( {
							BorderWidth: newMargin,
						} )
					}
				/>
				<div style={ { marginTop: '16px', marginBottom: '16px' } }>
					<strong>{ __( 'Border Color', 'postinfo' ) }</strong>
					<div
						style={ {
							display: 'flex',
							justifyContent: 'center',
							marginTop: '8px',
						} }
					>
						<GroupButton
							active={ ActiveBorderColor }
							setAttributes={ setAttributes }
							from="infoBorderColor"
						/>
					</div>
				</div>

				<div style={ { marginTop: '16px' } }>
					<ColorPalette
						value={ currentBorderColor }
						onChange={ handleBorderColor }
						disableCustomColors={ false }
					/>
				</div>

				<BoxControl
					label={ __( 'Border Radius', 'postgrid' ) }
					units={ [
						{ label: 'px', value: 'px' },
						{ label: '%', value: '%' },
						{ label: 'em', value: 'em' },
						{ label: 'rem', value: 'rem' },
						{ label: 'vw', value: 'vw' },
						{ label: 'vh', value: 'vh' },
					] }
					values={ BorderRadius }
					onChange={ ( newBorderRadius ) =>
						setAttributes( {
							BorderRadius: newBorderRadius,
						} )
					}
				/>
			</PanelBody>
			<PanelBody title="Background" initialOpen={ false }>
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
							active={ activeBackground }
							setAttributes={ setAttributes }
							from="infoBackground"
						/>
					</div>
				</div>

				<div style={ { marginTop: '16px' } }>
					<ColorPalette
						value={ currentBackground }
						onChange={ handleBackground }
						disableCustomColors={ false }
					/>
				</div>
			</PanelBody>

			<PanelBody title="Box-Shadow" initialOpen={ false }>
				<ToggleControl
					label={ __( 'Box-Shadow', 'infobox' ) }
					checked={ isBoxShadow }
					onChange={ ( value ) => {
						setAttributes( {
							isBoxShadow: value,
						} );
					} }
				/>

				{ isBoxShadow && (
					<>
						<BoxControl
							label={ __( 'Shadow', 'postInfo' ) }
							values={ boxShadowControl }
							onChange={ ( newMargin ) =>
								setAttributes( {
									boxShadowControl: newMargin,
								} )
							}
						/>

						<div
							style={ {
								marginTop: '16px',
								marginBottom: '16px',
							} }
						>
							<strong>
								{ __( 'Shadow Color', 'postinfo' ) }
							</strong>
							<div
								style={ {
									display: 'flex',
									justifyContent: 'center',
									marginTop: '8px',
								} }
							>
								<GroupButton
									active={ ActiveboxShadowColor }
									setAttributes={ setAttributes }
									from="infoBoxShadow"
								/>
							</div>
						</div>

						<div style={ { marginTop: '16px' } }>
							<ColorPalette
								value={ currentBoxShadowColor }
								onChange={ handleBoxShadow }
								disableCustomColors={ false }
							/>
						</div>
					</>
				) }
			</PanelBody>
			<PanelBody title="Spacing" initialOpen={false}>
				
				<Responsive/>
				<BoxControl
					label={ __( 'Padding', 'postinfo' ) }
					values={ padding }
					onChange={ ( newMargin ) =>
						setAttributes( {
							padding: newMargin,
						} )
					}
				/>

				<BoxControl
					label={ __( 'Margin', 'postinfo' ) }
					values={ margin }
					onChange={ ( newMargin ) =>
						setAttributes( {
							margin: newMargin,
						} )
					}
				/>
			</PanelBody>
		</div>
	);
}
