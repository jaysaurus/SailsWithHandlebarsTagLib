module.exports = {
    '$': function(obj, param) {
        try {
            switch(typeof obj) {
                case 'object':
                return obj[param];
                case 'string':
                return obj;
                default:
                throw "unsupported type";
            }
        } catch(e) {
            return e && e.message
                ? e.message
                : "unable to render the requested";
        }
    },
    'toUpperCase': function (text) {
        return text.toUpperCase();
    }
}
