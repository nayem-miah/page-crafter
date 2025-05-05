import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { cog, Icon, styles, tableOfContents } from '@wordpress/icons';
import './editor.scss';
import { TabPanel } from '@wordpress/components';
import GeneralTab from './tab/GeneralTab';
import StyleTab from './tab/StyleTab';
import AdvanceTab from './tab/AdvanceTab';

export default function Edit( { attributes, setAttributes } ) {
	const { btnAlign } = attributes;
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
										setAttributes={ setAttributes }
										attributes={ attributes }
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
			<div style={ { '--btnAlign': btnAlign } }>
				<a href="#" className="pagecrafter-btn">
					Click Me
				</a>
			</div>
		</div>
	);
}
