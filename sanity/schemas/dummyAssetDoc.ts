export default {
	title: 'For Assets that Should not Be Deleted',
	name: 'dummyAssetDoc',
	type: 'document',
	fields: [
		{ name: 'title', type: 'string' },
		{
			title: 'Do not Delete',
			name: 'asset',
			type: 'reference',
			to: [{ type: 'customAsset' }],
		},
	],
};
