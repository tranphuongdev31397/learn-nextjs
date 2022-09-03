import Head from 'next/head';
import * as React from 'react';

export interface SEO {
	title: string;
	url: string;
	thumbnailUrl: string;
	description: string;
}

export interface SeoProps {
	data: SEO;
}

export function Seo({ data }: SeoProps) {
	const { title, url, thumbnailUrl, description } = data;
	return (
		<Head>
			{/* <!-- Primary Meta Tags --> */}
			<title>Learn-NextJS</title>
			<meta name="title" content={title} />
			<meta name="description" content={description} />
			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={thumbnailUrl} />
			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={url} />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={thumbnailUrl} />
		</Head>
	);
}
