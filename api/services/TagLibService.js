module.exports = {
    reduceObject: (obj, param) => {
        if (typeof param === 'string') {
            return param
                .split('.')
                .reduce((parent, field) => {
                    if (field.search(/\(\)$/) > -1) {
                        return parent[field.replace('()', '')]();
                    }
                    return parent[field];
                },
                obj);
        } else throw new Error('$ param must be a string');
    }
}
