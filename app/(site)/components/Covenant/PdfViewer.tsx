'use client';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

type Props = {
	covenant: Covenant;
};

const PdfViewer = ({ covenant }: Props) => {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();
	return (
		<div className='h-screen w-8/12 mx-auto'>
			<Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
				{/* <!-- The viewer component will be put here --> */}
				<Viewer
					fileUrl={covenant.covenantFileUrl}
					plugins={[defaultLayoutPluginInstance]}
				/>
			</Worker>
		</div>
	);
};

export default PdfViewer;
