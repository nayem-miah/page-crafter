import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TabPanel, ToggleControl } from '@wordpress/components';
import { cog, styles, tableOfContents, Icon } from '@wordpress/icons';
import { RawHTML } from '@wordpress/element';
import './editor.scss';
import { __ } from '@wordpress/i18n';
import { format, dateI18n, getSettings } from '@wordpress/date';
import { useSelect } from '@wordpress/data';
export default function Edit( { attributes, setAttributes } ) {
	const { numberOfPosts, displayImage, order, orderBy, categories } =
		attributes;
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
											<p>General settings content here</p>
										</PanelBody>
										<PanelBody
											title="Image"
											initialOpen={ false }
										>
											<ToggleControl
												label={ __(
													'Display Featured Image',
													'latest-posts'
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
											<p>General settings content here</p>
										</PanelBody>
										<PanelBody
											title="Action Button"
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

			<div className="post-grid">
				{ posts?.map( ( post ) => (
					<div key={ post?.id }>
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

						<div className="post-grid-title">
							<h5>
								<a href={ post?.link }>
									{ post?.title?.rendered }
								</a>
							</h5>
						</div>

						<div className="post-grid-meta">
							{ post?._embedded?.author?.[ 0 ] && (
								<span>
									By { post._embedded.author[ 0 ].name }
								</span>
							) }{ ' ' }
							<time dateTime={ format( 'c', post?.date_gmt ) }>
								{ dateI18n(
									getSettings().formats.date,
									post?.date_gmt
								) }
							</time>
						</div>

						<div className="post-grid-excerpt">
							<p>
								<RawHTML>{ post?.excerpt?.rendered }</RawHTML>
							</p>
						</div>
						<div className="post-grid-btn">
							<a href={ post?.link }>
								<span>Read More</span>
							</a>
						</div>
					</div>
				) ) }
			</div>
		</div>
	);
}
