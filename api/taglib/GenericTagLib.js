const _ = require('lodash')

Array.prototype.first = function() {
    if (this.length > 0) return this[0];
}

var reduceObject = (obj, param) => {
    if (typeof param === 'string') {
        return _.reduce(
            param.split('.'),
            (parent, field) => {
                if (_.endsWith('()', field, 2)) {
                    return parent[field.replace('()', '')]();
                }
                return parent[field];
            },
            obj);
    } else throw new Error('$ param must be a string');
}

module.exports = {
    '$': function(obj, param) {
        try {
            switch(typeof obj) {
                case 'object':
                return reduceObject(obj, param);
                case 'string':
                return obj;
                case 'undefined':
                throw new Error('The requested item returned undefined');
                default:
                throw new Error('Unsupported type or unfound object');
            }
        } catch(e) {
            return e && e.message
                ? e.message
                : 'unable to render the requested';
        }
    },
    'toUpperCase': function (text) {
        return text.toUpperCase();
    }
}
