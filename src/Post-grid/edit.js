import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TabPanel } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { cog, Icon, styles, tableOfContents } from '@wordpress/icons';

import Excerpt from './components/Excerpt';
import Meta from './components/Meta';
import ReadButton from './components/ReadButton';
import Thumnail from './components/Thumnail';
import Title from './components/Title';
import './editor.scss';
import ActionBtn from './generalTabComp/ActionBtn';
import Content from './generalTabComp/Content';
import General from './generalTabComp/General';
import Image from './generalTabComp/Image';
import ContentStyle from './styleTabCom/ContentStyle';
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
		columnGap,
		contentAlignment,
		contentBackground,
		contentBackgroundHover,
		activeBackground,
		contentPadding,
		contentMargin,
		titleStyle,
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
										<General
											order={ attributes?.order }
											setAttributes={ setAttributes }
											columnGap={ columnGap }
											columns={ columns }
											numberOfPosts={ numberOfPosts }
										/>
										<Image
											setAttributes={ setAttributes }
											displayImage={ displayImage }
										/>
										<Content
											setAttributes={ setAttributes }
											showExcerpt={ showExcerpt }
											showTitle={ showTitle }
											showMeta={ showMeta }
											excerptMaxWords={ excerptMaxWords }
											contentAlignment={
												contentAlignment
											}
										/>
										<ActionBtn
											setAttributes={ setAttributes }
											readMore={ readMore }
											readMoreAlignment={
												readMoreAlignment
											}
										/>
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
										<ContentStyle
											setAttributes={ setAttributes }
											activeBackground={
												activeBackground
											}
											contentBackground={
												contentBackground
											}
											contentBackgroundHover={
												contentBackgroundHover
											}
											contentPadding={ contentPadding }
											contentMargin={ contentMargin }
											titleStyle={ titleStyle }
										/>

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
			</InspectorControls>

			<div
				className="post-grid"
				style={ {
					'--columns': columns,
					'--column-gap': `${ columnGap }px`,
				} }
			>
				{ posts?.map( ( post ) => (
					<div
						key={ post?.id }
						className="grid-card"
						style={ {
							'--card-bg': contentBackground,
							'--card-bg-hover': contentBackgroundHover,
						} }
					>
						<Thumnail
							thumnail={ post?._embedded?.[ 'wp:featuredmedia' ] }
							displayImage={ displayImage }
						/>

						<div
							className="content-body"
							style={ {
								padding: `${ contentPadding?.top || '0px' } ${
									contentPadding?.right || '0px'
								} ${ contentPadding?.bottom || '0px' } ${
									contentPadding?.left || '0px'
								}`,
								margin: `${ contentMargin?.top || '0px' } ${
									contentMargin?.right || '0px'
								} ${ contentMargin?.bottom || '0px' } ${
									contentMargin?.left || '0px'
								}`,
							} }
						>
							<Title
								title={ post?.title?.rendered }
								link={ post?.link }
								showTitle={ showTitle }
								contentAlignment={ contentAlignment }
								titleStyle={ titleStyle }
							/>
							<Meta
								showMeta={ showMeta }
								author={ post?._embedded?.author }
								date={ post?.date_gmt }
								contentAlignment={ contentAlignment }
							/>
							<Excerpt
								showExcerpt={ showExcerpt }
								excerpt={ post?.excerpt?.rendered }
								excerptMaxWords={ excerptMaxWords }
								contentAlignment={ contentAlignment }
							/>

							<ReadButton
								readMore={ readMore }
								link={ post?.link }
								readMoreAlignment={ readMoreAlignment }
							/>
						</div>
					</div>
				) ) }
			</div>
		</div>
	);
}
