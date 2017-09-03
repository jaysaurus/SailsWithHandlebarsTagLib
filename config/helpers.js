const Handlebars = require('handlebars');
const fs = require('fs');
try {
  var dir = `${__dirname.replace('config', 'api/taglib/')}`
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  var files = fs.readdirSync(dir);
  if (files) {
      for (var i in files) {
        const taglib = require(dir + files[i])
        for (var key in taglib) Handlebars.registerHelper(key,taglib[key])
      }
  }
} catch(e) { 
  console.log('[JE] failed to initialise custom Handlebar helpers.');
}
module.exports = Handlebars.helpers;
