## Dependencies and Packages

### Design

- Tailwind CSS
- DaisyUI
- Flowbite CSS

### Tools & Utilities

- Calendar - https://user-images.githubusercontent.com/52232579/199394208-77787073-9d2e-40f0-885f-be81a2c6eb4c.png
- dayjs - https://day.js.org/
- Icon Picker "sanity-plugin-icon-picker": "^3.2.2",
- Iframe Pane for preview "sanity-plugin-iframe-pane": "^2.5.7",
- Media Browser Tool "sanity-plugin-media": "^2.2.2",

# Sanity Dataset Management

## Synching Staging Dataset to Production Dataset and vice versa

Here's a basic outline of how to sync content between two datasets:
Export from Source Dataset: Use the Sanity CLI to export the content from the source dataset.

bash

sanity dataset export source-dataset path/to/export.tar.gz
Import to Target Dataset: Use the Sanity CLI to import the content into the target dataset.

bash

sanity dataset import path/to/export.tar.gz target-dataset --replace
The --replace flag will replace the entire target dataset with the imported data. Be careful with this, as it will overwrite the target dataset completely.
Use Aliases for Promotion: If you're ready to promote your staging dataset to production, you can use dataset aliases to do this without affecting the actual datasets.

bash

sanity dataset alias set staging-dataset production
This command will point the production alias to the staging dataset, effectively making it the new production dataset.

## Switching between Datasets / Environments

Switch between datasets: To switch between datasets, you will need to change the NODE_ENV environment variable. If you're running your application locally, you can set NODE_ENV to development to use the staging dataset or to production to use the production dataset.

`NODE_ENV=development npm start # Use staging dataset`

`NODE_ENV=production npm start # Use production dataset`
