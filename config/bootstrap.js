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
      var foo = await Foo.create({ name: 'Mr FooBar' })
                         .meta({ fetch: true });
      var bar = await Bar.create({ name: "Bar child object"})
                         .meta({ fetch: true });
      console.log(`created "${bar.name}"`);

      await Foo.update({ name: 'Mr FooBar' })
               .set({ bars:bar.id });

      var oldBarName = bar.name
      bar = await Bar.update({ name: "Bar child object" })
                     .set({ name: "Little Bar" })
                     .meta({ fetch: true });

      console.log(`updated "${oldBarName}" to "${bar[0].name}"`);
      console.log('Ready to go! visit "http://localhost:1337/foo/example" to see taglibs in action!')
    } catch(e) {
        console.log(e);
    }
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();

};
