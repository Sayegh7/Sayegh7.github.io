const ghpages = require('gh-pages')

ghpages.publish('build', {
  branch: 'master',
  repo: 'https://github.com/Sayegh7/Sayegh7.github.io'
}, (err) => {
  if(err) return console.error(err)
  console.log('Deployed')
});
