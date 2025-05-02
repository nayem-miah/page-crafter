export default function truncateExcerpt( excerpt, wordLimit ) {
	if ( ! excerpt ) {
		return ''; // Handle empty or undefined excerpts
	}

	const words = excerpt.replace( /<[^>]+>/g, '' ).split( ' ' ); // Remove HTML tags and split into words
	if ( words.length <= wordLimit ) {
		return excerpt.replace( /<[^>]+>/g, '' ); // return whole excerpt if it is shorter than the word limit.
	}

	const truncatedWords = words.slice( 0, wordLimit );
	return truncatedWords.join( ' ' ) + '...';
}
