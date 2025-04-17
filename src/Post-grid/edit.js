import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	Button,
	ButtonGroup,
	PanelBody,
	RangeControl,
	TabPanel,
	ToggleControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { dateI18n, format, getSettings } from '@wordpress/date';
import { RawHTML } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { cog, Icon, styles, tableOfContents } from '@wordpress/icons';

import './editor.scss';
import truncateExcerpt from './utils/truncateWords';
export default function Edit( { attributes, setAttributes } ) {
	const {
		numberOfPosts,
		displayImage,
		order,
		orderBy,
		categories,
		readMore,
		showTitle,
		showExcerpt,
		showMeta,
		excerptMaxWords,
		readMoreAlignment,
		columns,
		columnGap
	} = attributes;
	const catIDs = categories?.map( ( cat ) => cat.id );
	const posts = useSelect(
		( select ) => {
			return select( 'core' ).getEntityRecords( 'postType', 'post', {
				per_page: numberOfPosts,
				_embed: true,
				order,
				orderby: orderBy,
				categories: catIDs,
			} );
		},
		[ numberOfPosts, order, orderBy, catIDs ]
	);

	const HandleDisplayFeatureImage = ( value ) => {
		setAttributes( {
			displayImage: value,
		} );
	};
	const HandleReadMoreButton = ( value ) => {
		setAttributes( {
			readMore: value,
		} );
	};
	const HandleTitleVisibility = ( value ) => {
		setAttributes( {
			showTitle: value,
		} );
	};
	const HandleExcerptVisibility = ( value ) => {
		setAttributes( {
			showExcerpt: value,
		} );
	};
	const HandleMetaVisibility = ( value ) => {
		setAttributes( {
			showMeta: value,
		} );
	};

	const HandleNumberOfItems = ( value ) => {
		setAttributes( {
			numberOfPosts: value,
		} );
	};

	const handleExcerptMaxWord = ( value ) => {
		setAttributes( {
			excerptMaxWords: value,
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
		<div { ...useBlockProps() }>
			<InspectorControls>
				<TabPanel
					className="pagecrafter-tab-panel"
					activeClass="is-active"
					tabs={ [
						{
							name: 'general',
							title: (
								<span>
									<Icon icon={ tableOfContents } /> General
								</span>
							),
							className: 'tab-general',
						},
						{
							name: 'styles',
							title: (
								<span>
									<Icon icon={ styles } /> Styles
								</span>
							),
							className: 'tab-styles',
						},
						{
							name: 'advanced',
							title: (
								<span>
									<Icon icon={ cog } /> Advanced
								</span>
							),
							className: 'tab-advanced',
						},
					] }
				>
					{ ( tab ) => {
						switch ( tab.name ) {
							case 'general':
								return (
									<div>
										<PanelBody
											title="General"
											initialOpen={ true }
										>
											<RangeControl
												label={ __(
													'Columns',
													'postgrid'
												) }
												min={ 2 }
												max={ 6 }
												onChange={ HandleComuns }
												value={ columns }
											/>

											<RangeControl
												label={ __(
													'Gap Between Item',
													'postgrid'
												) }
												min={ 0 }
												max={ 100 }
												onChange={ HandleColumnGap }
												value={ columnGap }
											/>
											<RangeControl
												label={ __(
													'Number of Posts',
													'postgrid'
												) }
												min={ 1 }
												max={ 10 }
												onChange={ HandleNumberOfItems }
												value={ numberOfPosts }
											/>

											<div
												style={ { marginTop: '16px' } }
											>
												<strong>Order</strong>
												<div
													style={ {
														display: 'flex',
														justifyContent:
															'center',
														marginTop: '8px',
													} }
												>
													<ButtonGroup>
														<Button
															isPressed={
																attributes.order ===
																'asc'
															}
															variant="secondary"
															style={ {
																backgroundColor:
																	attributes.order ===
																	'asc'
																		? '#008db4'
																		: '',
																color:
																	attributes.order ===
																	'asc'
																		? '#fff'
																		: '',
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
															isPressed={
																attributes.order ===
																'desc'
															}
															variant="secondary"
															style={ {
																backgroundColor:
																	attributes.order ===
																	'desc'
																		? '#008db4'
																		: '',
																color:
																	attributes.order ===
																	'desc'
																		? '#fff'
																		: '',
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
										<PanelBody
											title="Image"
											initialOpen={ false }
										>
											<ToggleControl
												label={ __(
													'Display Featured Image',
													'postgrid'
												) }
												checked={ displayImage }
												onChange={
													HandleDisplayFeatureImage
												}
											/>
										</PanelBody>
										<PanelBody
											title="Content"
											initialOpen={ false }
										>
											<PanelBody
												title="Title"
												initialOpen={ false }
											>
												<ToggleControl
													label={ __(
														'Title Visibility',
														'postgrid'
													) }
													checked={ showTitle }
													onChange={
														HandleTitleVisibility
													}
												/>
											</PanelBody>
											<PanelBody
												title="Excerpt"
												initialOpen={ false }
											>
												<ToggleControl
													label={ __(
														'Excerpt Visibility',
														'postgrid'
													) }
													checked={ showExcerpt }
													onChange={
														HandleExcerptVisibility
													}
												/>
												<RangeControl
													label={ __(
														'Max Number of Words',
														'postgrid'
													) }
													min={ 5 }
													max={ 50 }
													onChange={
														handleExcerptMaxWord
													}
													value={ excerptMaxWords }
												/>
											</PanelBody>
											<PanelBody
												title="Meta"
												initialOpen={ false }
											>
												<ToggleControl
													label={ __(
														'Meta Visibility',
														'postgrid'
													) }
													checked={ showMeta }
													onChange={
														HandleMetaVisibility
													}
												/>
											</PanelBody>
										</PanelBody>
										<PanelBody
											title="Action Button"
											initialOpen={ false }
										>
											<ToggleControl
												label={ __(
													'Read More',
													'postgrid'
												) }
												checked={ readMore }
												onChange={
													HandleReadMoreButton
												}
											/>

											<div
												style={ { marginTop: '16px' } }
											>
												<strong>Alignment</strong>
												<div
													style={ {
														display: 'flex',
														justifyContent:
															'center',
														marginTop: '8px',
													} }
												>
													<ButtonGroup>
														<Button
															isPressed={
																readMoreAlignment ===
																'left'
															}
															variant="secondary"
															style={ {
																backgroundColor:
																	readMoreAlignment ===
																	'left'
																		? '#008db4'
																		: '',
																color:
																	readMoreAlignment ===
																	'left'
																		? '#fff'
																		: '',
															} }
															onClick={ () =>
																setAttributes( {
																	readMoreAlignment:
																		'left',
																} )
															}
														>
															Left
														</Button>
														<Button
															isPressed={
																readMoreAlignment ===
																'center'
															}
															variant="secondary"
															style={ {
																backgroundColor:
																	readMoreAlignment ===
																	'center'
																		? '#008db4'
																		: '',
																color:
																	readMoreAlignment ===
																	'center'
																		? '#fff'
																		: '',
															} }
															onClick={ () =>
																setAttributes( {
																	readMoreAlignment:
																		'center',
																} )
															}
														>
															Center
														</Button>
														<Button
															isPressed={
																readMoreAlignment ===
																'right'
															}
															variant="secondary"
															style={ {
																backgroundColor:
																	readMoreAlignment ===
																	'right'
																		? '#008db4'
																		: '',
																color:
																	readMoreAlignment ===
																	'right'
																		? '#fff'
																		: '',
															} }
															onClick={ () =>
																setAttributes( {
																	readMoreAlignment:
																		'right',
																} )
															}
														>
															Right
														</Button>
													</ButtonGroup>
												</div>
											</div>
										</PanelBody>
										<PanelBody
											title="Pagination"
											initialOpen={ false }
										>
											<p>General settings content here</p>
										</PanelBody>
									</div>
								);
							case 'styles':
								return (
									<div>
										<PanelBody
											title="Content"
											initialOpen={ true }
										>
											<p>General settings content here</p>
										</PanelBody>
										<PanelBody
											title="Read More"
											initialOpen={ false }
										>
											<p>General settings content here</p>
										</PanelBody>
										<PanelBody
											title="Pagination"
											initialOpen={ false }
										>
											<p>General settings content here</p>
										</PanelBody>
										<PanelBody
											title="Border"
											initialOpen={ false }
										>
											<p>General settings content here</p>
										</PanelBody>
										<PanelBody
											title="Box Shadow"
											initialOpen={ false }
										>
											<p>General settings content here</p>
										</PanelBody>
										<PanelBody
											title="Spacing"
											initialOpen={ false }
										>
											<p>General settings content here</p>
										</PanelBody>
									</div>
								);
							case 'advanced':
								return (
									<div>
										<PanelBody
											title="Visibility Option"
											initialOpen={ true }
										>
											<p>General settings content here</p>
										</PanelBody>
									</div>
								);
							default:
								return null;
						}
					} }
				</TabPanel>
				{ /* </PanelBody> */ }
			</InspectorControls>

			<div
				className="post-grid"
				style={ {
					display: 'grid',
					gap: `${ columnGap }px`,
					gridTemplateColumns: `repeat(${ columns }, minmax(0, 1fr))`,
				} }
			>
				{ posts?.map( ( post ) => (
					<div key={ post?.id } className="grid-card">
						<div className="post-grid-thumnail">
							{ post?._embedded?.[ 'wp:featuredmedia' ]?.length >
								0 &&
								displayImage && (
									<img
										src={
											post._embedded[
												'wp:featuredmedia'
											][ 0 ]?.media_details?.sizes?.large
												?.source_url ??
											post._embedded[
												'wp:featuredmedia'
											][ 0 ]?.source_url // fallback if 'large' doesn't exist
										}
										alt={
											post._embedded[
												'wp:featuredmedia'
											][ 0 ]?.alt_text || 'Featured image'
										}
									/>
								) }
						</div>
						<div className="content-body">
							{ showTitle && (
								<div className="post-grid-title">
									<h5>
										<a href={ post?.link }>
											<RawHTML>
												{ post?.title?.rendered }
											</RawHTML>
										</a>
									</h5>
								</div>
							) }

							{ showMeta && (
								<div className="post-grid-meta">
									{ post?._embedded?.author?.[ 0 ] && (
										<span>
											By{ ' ' }
											{ post._embedded.author[ 0 ].name }
										</span>
									) }{ ' ' }
									<time
										dateTime={ format(
											'c',
											post?.date_gmt
										) }
									>
										{ dateI18n(
											getSettings().formats.date,
											post?.date_gmt
										) }
									</time>
								</div>
							) }

							{ showExcerpt && (
								<div className="post-grid-excerpt">
									<p>
										<RawHTML>
											{ truncateExcerpt(
												post?.excerpt?.rendered,
												excerptMaxWords
											) }
										</RawHTML>
									</p>
								</div>
							) }

							{ readMore && (
								<div
									className="post-grid-btn"
									style={ { textAlign: readMoreAlignment } }
								>
									<a href={ post?.link }>
										<span>Read More</span>
									</a>
								</div>
							) }
						</div>
					</div>
				) ) }
			</div>
		</div>
	);
}
