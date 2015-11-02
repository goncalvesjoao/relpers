import hook from 'css-modules-require-hook'
import sass from 'node-sass'

hook({
  extensions: ['.css', '.scss'],
  preprocessCss: (css) => {
    const result = sass.renderSync({
      data: css
    })
    return result.css
  }
})
