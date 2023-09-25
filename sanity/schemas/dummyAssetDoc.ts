export default {
  name: 'dummyAssetDoc',
  type: 'document',
  fields: [
    {name: 'title', type: 'string'},
    {
      name: 'asset',
      type: 'reference',
      to: [{type: 'customAsset'}]
    }
  ]
}