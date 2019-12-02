const path = require('path')

module.exports = {
	title: 'Storyscript',
	components: 'src/components/**/[A-Z]*.vue',
	pagePerSection: true,
	version: require('./package.json').version,
	exampleMode: 'expand',
	usageMode: 'expand',
	require: [
		path.join(__dirname, 'src/assets/styles/tailwind.scss'),
		path.join(__dirname, 'src/styleguide.ts')
	]
}
