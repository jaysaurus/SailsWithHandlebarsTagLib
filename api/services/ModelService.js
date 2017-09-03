module.exports = {
    create: (Class, params) => {
        return new Promise((resolve, reject) => {
            try {
                Class.create(params)
                .exec((err, record) => {
                    if (!err) {
                        Class.findOne(params) // resolves issue retrieving "record" parameter
                        .then(function(res) {
                            resolve(res);
                        }).catch(function(err) {
                            throw new Error('item was not created');
                        });
                    } else throw err
                })
            } catch(e) {
                reject(e && e.message ? e.message : 'Something unandled went wrong when performing createAsync');
            }
        });
    },
    update: (Class, find, update) => {
        return new Promise((resolve, reject) => {
            try {
                Class.update(find, update)
                    .exec((err) => {
                        if(!err) resolve(true)
                        else throw err;
                    });
            } catch(e) {
                reject(e && e.message ? e.message : 'Something unandled went wrong when performing updateAsync');
            }
        });
    }
}
