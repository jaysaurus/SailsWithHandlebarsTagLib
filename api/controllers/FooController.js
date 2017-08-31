// var Handlebars = require('handlebars');
// console.log(Handlebars)
/**
* FooController
*
* @description :: Server-side actions for handling incoming requests.
* @help        :: See https://sailsjs.com/docs/concepts/actions
*/

module.exports = {
    example: async (req, res) => {
        var model;
        try {
            model = await Foo.findOne({name: "Mr FooBar"});
        } catch(e) {
            model = e && e.message
                ? e.message
                : "something went wrong";
        }
        res.render('example', { model });
    }
}
