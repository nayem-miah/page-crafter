export default function Thumnail( { displayImage, thumnail } ) {
	return (
		< div className = "post-grid-thumnail" >
			{ thumnail ? .length > 0 && displayImage && (
				< img
					src = {
						thumnail[ 0 ] ? .media_details ? .sizes ? .large
							? .source_url ? ? thumnail[ 0 ] ? .source_url // fallback if 'large' doesn't exist
					}
					alt = { thumnail ? .alt_text || 'Featured image' }
				/ >
			) }
		< / div >
	);
}
