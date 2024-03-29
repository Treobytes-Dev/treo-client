/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	output: 'export',

	images: {
		domains: ['res.cloudinary.com', 'another-allowed-domain.com'],
		// You can add other domains if needed
	},

	// Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
	// trailingSlash: true,

	// Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
	// skipTrailingSlashRedirect: true,

	// Optional: Change the output directory `out` -> `dist`
	// distDir: 'dist',
};

module.exports = nextConfig;
