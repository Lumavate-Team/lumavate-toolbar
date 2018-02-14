exports.config = {
	namespace:'lumavate-toolbar',
	generateDistribution:true,
	generateWWW:false,
	bundles: 
		[
			{ components: ['lumavate-toolbar', 'lumavate-toolbar-button']}
	]};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
