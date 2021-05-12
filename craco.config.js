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
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

// MODIFY VARS: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
