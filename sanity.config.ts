import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schema } from './sanity/schema';
import { visionTool } from '@sanity/vision';
import { apiVersion, dataset, projectId, title, basePath } from './sanity/env'
import { dashboardTool, projectUsersWidget, projectInfoWidget } from '@sanity/dashboard';

const config = defineConfig(
  {
    projectId,
    dataset,
    title,
    apiVersion,
    basePath,
    plugins: [
      deskTool({
        structure: (S) =>
          S.list()
            .title('Base')
            .items([...S.documentTypeListItems()]),

      }),
      dashboardTool({
        widgets: [
          projectInfoWidget(),
          projectUsersWidget(),
        ],
      }),
      visionTool({
        defaultApiVersion: apiVersion,
        defaultDataset: dataset,
      }),
    ],
    schema,
  }
);

export default config;