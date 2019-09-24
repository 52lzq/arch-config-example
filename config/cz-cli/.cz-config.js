module.exports = {
	types: [
		{
			value: '🔧 fix',
			name: '🔧 A bug fix',
		},
		{
			value: '✨ feat',
			name: '✨ A new feature',
		},
		{
			value: '🎨 style',
			name: '🎨 Change style',
		},
		{
			value: '⚡️ perf',
			name: '⚡️ Improving performance',
		},
		{
			value: '👷 test',
			name: '👷 Adding tests',
		},
		{
			value: '📝 docs',
			name: '📝 Documentation',
		}
	],

	// override the messages, defaults are as follows
	messages: {
		type: "选择commit的类别:",
		customScope: 'commit影响的范围:',
		subject: 'commit简短描述:',
		body: 'commit的详细描述:',
		footer:'解决禅道BUG的id:',
		confirmCommit:'确定提交?'
	},

	allowCustomScopes: true
};
