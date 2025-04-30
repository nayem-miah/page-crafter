import {
	BoxControl,
	ColorPalette,
	PanelBody,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import GroupButton from '../../../components/GroupButton';

import { __ } from '@wordpress/i18n';
import Spacing from '../../../components/Spacing';

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
		readMoreType,
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

				<Spacing
					label={ 'Title Margin' }
					setAttributes={ setAttributes }
					space={ titleMargin }
					attributesKey="titleMargin"
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

				<Spacing
					label={ 'Content Margin' }
					setAttributes={ setAttributes }
					space={ ContentMargin }
					attributesKey="ContentMargin"
				/>
			</PanelBody>

			{ readMoreType === 'Button' && (
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

					<Spacing
						setAttributes={ setAttributes }
						space={ callActionPadding }
						label="Padding"
						attributesKey="callActionPadding"
					/>

					<PanelBody title="Border" initialOpen={ false }>
						<div
							style={ {
								marginTop: '16px',
								marginBottom: '16px',
							} }
						>
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

						<Spacing
							setAttributes={ setAttributes }
							space={ callActionBorderWidth }
							label="Border Width"
							attributesKey="callActionBorderWidth"
						/>
						<div
							style={ {
								marginTop: '16px',
								marginBottom: '16px',
							} }
						>
							<strong>
								{ __( 'Border Color', 'postinfo' ) }
							</strong>
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

						<Spacing
							setAttributes={ setAttributes }
							space={ callActionBorderRadius }
							label="Border Radius"
							attributesKey="callActionBorderRadius"
						/>
					</PanelBody>
				</PanelBody>
			) }

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

				<Spacing
					setAttributes={ setAttributes }
					space={ BorderWidth }
					label="Border Width"
					attributesKey="BorderWidth"
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

				<Spacing
					setAttributes={ setAttributes }
					space={ BorderRadius }
					label="Border Radius"
					attributesKey="BorderRadius"
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
			<PanelBody title="Spacing" initialOpen={ false }>
				<PanelBody title="Padding" initialOpen={ false }>
					<Spacing
						label={ 'Padding' }
						setAttributes={ setAttributes }
						space={ padding }
						attributesKey="padding"
					/>
				</PanelBody>
				<PanelBody title="Margin" initialOpen={ false }>
					<Spacing
						label={ 'Margin' }
						setAttributes={ setAttributes }
						space={ margin }
						attributesKey="margin"
					/>
				</PanelBody>
			</PanelBody>
		</div>
	);
}
