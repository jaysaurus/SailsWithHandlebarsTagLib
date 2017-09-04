const Handlebars = require('handlebars');
const fs = require('fs');
try {
    var dir = `${__dirname.replace('config', 'api/taglib/')}`
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    var files = fs.readdirSync(dir);
    if (files) {
        for (var i in files) {
            Handlebars.registerHelper(require(dir + files[i]));
        }
    }
} catch(e) {
    console.log('[JE] failed to initialise custom Handlebar helpers.');
}
module.exports = Handlebars.helpers;
