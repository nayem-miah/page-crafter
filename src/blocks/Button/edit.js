import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { cog, Icon, styles, tableOfContents } from '@wordpress/icons';
import dynamicCss from './dynamicCss';
import './editor.scss';
import AdvanceTab from './tab/AdvanceTab';
import GeneralTab from './tab/GeneralTab';
import StyleTab from './tab/StyleTab';

export default function Edit( { attributes, setAttributes } ) {
	const { btnAlign } = attributes;

	const style = dynamicCss( attributes );
	return (
		<>
			<style>{ style }</style>
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
										<Icon icon={ tableOfContents } />{ ' ' }
										General
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
				<div
					className="btn-wrapper"
					// style={ { '--btnAlign': btnAlign } }
				>
					<a href="#" className="pagecrafter-btn">
						Click Me
					</a>
				</div>
			</div>
		</>
	);
}
