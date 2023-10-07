import Iframe from 'sanity-plugin-iframe-pane';
import type { DefaultDocumentNodeResolver } from 'sanity/desk';
import { schema } from './sanity/schema';

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
	S,
	{ schemaType }
) => {
	if (schemaType === 'parishEvents') {
		return S.document().views([
			S.view.form(),
			S.view
				.component(Iframe)
				.options({
					// TODO: Update this to the correct URL for deployment
					url: `${
						process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'
					}/api/preview`,
					defaultSize: 'desktop',
					reload: {
						button: true,
					},
					attributes: {},
				})
				.title('Preview'),
		]);
	}
};
