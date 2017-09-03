/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function(done) {
    try {
      var foo = await ModelService.create(Foo, { name: "Mr FooBar" });
      console.log(`created "${foo.name}" `);

      var bar = await ModelService.create(Bar, { name: "Bar child object", foo: foo.id });
      console.log(`created "${bar.name}"`);

      await ModelService.update(Foo, { name: 'Mr FooBar' }, { bars:bar.id });

      var barUpdated = await ModelService.update(Bar, { name: "Bar child object" }, { name: "Little Bar" });
      console.log(`updated "${bar.name}" to "Little Bar"`);
      console.log('Ready to go! visit "http://localhost:1337/foo/example" to see taglibs in action!')
    } catch(e) {
        console.log(e);
    }
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();

};
