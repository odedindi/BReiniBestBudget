import * as React from 'react';
import Head from 'next/head';

type SEOProps = {
	title?: string;
	meta?: { name: string; content: string }[];
};

const SEO: React.FC<SEOProps> = ({ title, meta }) => (
	<Head>
		<title>{title ?? 'OdedIndI'}</title>
		{meta &&
			meta.map((m, index) => (
				<meta key={index} name={m.name} content={m.content} />
			))}
		<link rel="icon" href="/favicon.ico" />
	</Head>
);

export default SEO;
