FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Notes'});
  }
});

FlowRouter.route('/about', {
  name: 'home',
  action() {
    BlazeLayout.render('MainLayout', {main: 'About'});
  }
});
