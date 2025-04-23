import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { cog, Icon, styles, tableOfContents } from '@wordpress/icons';
import './editor.scss';
import { __ } from '@wordpress/i18n';
import { TabPanel } from '@wordpress/components';
import GeneralTab from './tab/GeneralTab';
import StyleTab from './tab/StyleTab';
import AdvanceTab from './tab/AdvanceTab';
export default function Edit( { attributes, setAttributes } ) {
	const { title, icon, content, contentAlign, showTitle, showContent } =
		attributes;
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
										showTitle={ showTitle }
										showContent={ showContent }
										contentAlign={ contentAlign }
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
										setAttributes={ setAttributes }
									/>
								);
							default:
								return null;
						}
					} }
				</TabPanel>
			</InspectorControls>
			<div className="info-box">
				<div className="info-box__icon">
					<span className={ icon }></span>
				</div>
				<div
					className="info-box__title"
					style={ { '--contentAlign': contentAlign } }
				>
					<RichText
						className="text"
						placeholder={ __( 'Title..', 'infobox' ) }
						tagName="h3"
						onChange={ ( texts ) =>
							setAttributes( { title: texts } )
						}
						value={ title }
					/>
				</div>
				<div
					className="info-box__content"
					style={ { '--contentAlign': contentAlign } }
				>
					<RichText
						placeholder={ __( 'Content..', 'infobox' ) }
						tagName="p"
						onChange={ ( texts ) =>
							setAttributes( { content: texts } )
						}
						value={ content }
					/>
				</div>
			</div>
		</div>
	);
}
