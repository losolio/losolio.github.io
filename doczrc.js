import * as colors from './src/utils/colors'

export default {
  title: 'Coolest Library',
  base: '/src/docs',
  ignore: ['**/blog/**', 'readme.md'],
  menu: ['Getting Started', 'Components'],
  themeConfig: {
    colors: {
      primary: colors.primary,
    },
  },
}