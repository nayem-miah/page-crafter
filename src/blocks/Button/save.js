import { useBlockProps } from '@wordpress/block-editor';
export default function save( { attributes } ) {
	const { btnAlign } = attributes;
	return (
		<div { ...useBlockProps.save() }>
			<div style={ { '--btnAlign': btnAlign } }>
				<a href="#" className="pagecrafter-btn">
					Click Me
				</a>
			</div>
		</div>
	);
}
