const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#208970',
              '@primary-6': '#3EFFD1',
              '@font-family': 'Nunito',
              '@font-size-base': 32,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
