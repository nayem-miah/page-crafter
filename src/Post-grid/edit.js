import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { cog, Icon, styles, tableOfContents } from '@wordpress/icons';
import Excerpt from './components/Excerpt';
import Meta from './components/Meta';
import ReadButton from './components/ReadButton';
import Thumnail from './components/Thumnail';
import Title from './components/Title';
import './editor.scss';
import AdvanceTab from './tabs/AdvanceTab';
import GeneralTab from './tabs/GeneralTab';
import StyleTab from './tabs/StyleTab';
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
		contentPadding,
		contentMargin,
		titleColor,
		titleHoverColor,
		titleMargin,
		metaColor,
		metaHoverColor,
		metaMargin,
		desMargin,
		desColor,
		desHoverColor,
		readMoreBackground,
		readMoreBackgroundHover,
		readMoreColorHover,
		readMoreColor,
		readMorePadding,
		readMoreMargin,
		additionalClass,
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
		<div { ...useBlockProps( { className: additionalClass } ) }>
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
									<GeneralTab
										attributes={ attributes }
										setAttributes={ setAttributes }
									/>
								);
							case 'styles':
								return (
									<StyleTab
										attributes={ attributes }
										setAttributes={ setAttributes }
									/>
								);
							case 'advanced':
								return (
									<AdvanceTab
										additionalClass={ additionalClass }
										setAttributes={ setAttributes }
									/>
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
								titleColor={ titleColor }
								titleHoverColor={ titleHoverColor }
								titleMargin={ titleMargin }
							/>
							<Meta
								showMeta={ showMeta }
								author={ post?._embedded?.author }
								date={ post?.date_gmt }
								contentAlignment={ contentAlignment }
								metaColor={ metaColor }
								metaHoverColor={ metaHoverColor }
								metaMargin={ metaMargin }
							/>
							<Excerpt
								showExcerpt={ showExcerpt }
								excerpt={ post?.excerpt?.rendered }
								excerptMaxWords={ excerptMaxWords }
								contentAlignment={ contentAlignment }
								desMargin={ desMargin }
								desColor={ desColor }
								desHoverColor={ desHoverColor }
							/>

							<ReadButton
								readMore={ readMore }
								link={ post?.link }
								readMoreAlignment={ readMoreAlignment }
								readMoreBackground={ readMoreBackground }
								readMoreBackgroundHover={
									readMoreBackgroundHover
								}
								readMoreColor={ readMoreColor }
								readMoreColorHover={ readMoreColorHover }
								readMorePadding={ readMorePadding }
								readMoreMargin={ readMoreMargin }
							/>
						</div>
					</div>
				) ) }
			</div>
		</div>
	);
}
