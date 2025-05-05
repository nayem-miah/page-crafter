import { useBlockProps } from '@wordpress/block-editor';
export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<a href="#" className="pagecrafter-btn">
				Click Me
			</a>
		</div>
	);
}
