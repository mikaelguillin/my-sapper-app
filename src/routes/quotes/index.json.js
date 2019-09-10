import quotes from './_quotes.json';

const contents = JSON.stringify(quotes.QuoteResults.map(quote => {
	return {
		PartnerLogo: quote.PartnerLogo,
		PartnerDisplayName: quote.PartnerDisplayName,
		ProductGuarantees: quote.ProductGuarantees,
		YearlyPrice: quote.YearlyPrice,
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}