import apiFetch from '@wordpress/api-fetch';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { cog, Icon, styles, tableOfContents } from '@wordpress/icons';

import AdvanceTab from './tabs/AdvanceTab';
import GeneralTab from './tabs/GeneralTab';
import StyleTab from './tabs/StyleTab';

import formatSpacing from '../../utils/spacingFormat';
import Excerpt from './components/Excerpt';
import Meta from './components/Meta';
import ReadButton from './components/ReadButton';
import Thumnail from './components/Thumnail';
import Title from './components/Title';
import './editor.scss';

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
		useAjaxPagination,
		currentPage,
		totalPages,
		MobileHide,
		tabHide,
		desktopHide,
	} = attributes;

	const [ posts, setPosts ] = useState( [] );
	const catIDs = categories?.map( ( cat ) => cat.id ) || [];

	useEffect( () => {
		const fetchPosts = async () => {
			try {
				const queryParams = new URLSearchParams( {
					per_page: numberOfPosts,
					page: currentPage,
					order,
					orderby: orderBy,
					_embed: true,
				} );
				if ( catIDs.length ) {
					queryParams.append( 'categories', catIDs.join( ',' ) );
				}

				const response = await apiFetch( {
					path: `/wp/v2/posts?${ queryParams.toString() }`,
					parse: false,
				} );

				const postsData = await response.json();
				const totalPagesHeader =
					response.headers.get( 'X-WP-TotalPages' );

				setPosts( postsData );
				setAttributes( {
					totalPages: parseInt( totalPagesHeader ) || 1,
				} );
			} catch ( error ) {
				console.error( 'Failed to fetch posts:', error );
				setPosts( [] );
			}
		};
		fetchPosts();
	}, [
		numberOfPosts,
		currentPage,
		order,
		orderBy,
		JSON.stringify( catIDs ),
	] );

	// Reset to page 1 when filters change
	useEffect( () => {
		setAttributes( { currentPage: 1 } );
	}, [ numberOfPosts, order, orderBy, JSON.stringify( catIDs ) ] );

	const paginationButtons = () => {
		const buttons = [];
		for ( let i = 1; i <= totalPages; i++ ) {
			buttons.push(
				<button
					key={ i }
					className={ i === currentPage ? 'active' : '' }
					onClick={ () => setAttributes( { currentPage: i } ) }
				>
					{ i }
				</button>
			);
		}
		return buttons;
	};

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
						},
						{
							name: 'styles',
							title: (
								<span>
									<Icon icon={ styles } /> Styles
								</span>
							),
						},
						{
							name: 'advanced',
							title: (
								<span>
									<Icon icon={ cog } /> Advanced
								</span>
							),
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
										useAjaxPagination={ useAjaxPagination }
										MobileHide={ MobileHide }
										tabHide={ tabHide }
										desktopHide={ desktopHide }
									/>
								);
							default:
								return null;
						}
					} }
				</TabPanel>
			</InspectorControls>

			<div
				className={ `post-grid ${ desktopHide && 'desktopHide' }  ${
					tabHide && 'tabHide'
				} ${ MobileHide && 'MobileHide' }` }
			>
				<div
					className="post-grid-wrapper"
					style={ {
						'--columns': columns,
						'--column-gap': `${ columnGap }px`,
					} }
				>
					{ posts.map( ( post ) => (
						<div
							key={ post.id }
							className="grid-card"
							style={ {
								'--card-bg': contentBackground,
								'--card-bg-hover': contentBackgroundHover,
							} }
						>
							<Thumnail
								thumnail={
									post._embedded?.[ 'wp:featuredmedia' ]
								}
								displayImage={ displayImage }
							/>
							<div
								className="content-body"
								style={ {
									'--contentPadding-desktop': formatSpacing(
										contentPadding?.Desktop
									),
									'--contentPadding-tablet': formatSpacing(
										contentPadding?.Tablet
									),
									'--contentPadding-mobile': formatSpacing(
										contentPadding?.Mobile
									),

									'--contentMargin-desktop': formatSpacing(
										contentMargin?.Desktop
									),
									'--contentMargin-tablet': formatSpacing(
										contentMargin?.Tablet
									),
									'--contentMargin-mobile': formatSpacing(
										contentMargin?.Mobile
									),
								} }
							>
								<Title
									title={ post.title?.rendered }
									link={ post.link }
									showTitle={ showTitle }
									contentAlignment={ contentAlignment }
									titleColor={ titleColor }
									titleHoverColor={ titleHoverColor }
									titleMargin={ titleMargin }
								/>
								<Meta
									showMeta={ showMeta }
									author={ post._embedded?.author }
									date={ post.date_gmt }
									contentAlignment={ contentAlignment }
									metaColor={ metaColor }
									metaHoverColor={ metaHoverColor }
									metaMargin={ metaMargin }
								/>
								<Excerpt
									showExcerpt={ showExcerpt }
									excerpt={ post.excerpt?.rendered }
									excerptMaxWords={ excerptMaxWords }
									contentAlignment={ contentAlignment }
									desMargin={ desMargin }
									desColor={ desColor }
									desHoverColor={ desHoverColor }
								/>
								<ReadButton
									readMore={ readMore }
									link={ post.link }
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

				{ useAjaxPagination && totalPages > 1 && (
					<div className="ajax-pagination">
						<button
							onClick={ () =>
								setAttributes( {
									currentPage: Math.max( 1, currentPage - 1 ),
								} )
							}
							disabled={ currentPage === 1 }
						>
							Prev
						</button>
						{ paginationButtons() }
						<button
							onClick={ () =>
								setAttributes( {
									currentPage: Math.min(
										totalPages,
										currentPage + 1
									),
								} )
							}
							disabled={ currentPage === totalPages }
						>
							Next
						</button>
					</div>
				) }
			</div>
		</div>
	);
}
