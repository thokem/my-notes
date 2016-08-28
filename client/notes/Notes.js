Template.Notes.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('userNotes');
  });
});

Template.Notes.helpers({
  notes: () => {
    return Notes.find({}, {sort: {createdAt:-1}});
  },
  newNote: () => {
    return Session.get('newNote');
  }
});

Template.Notes.events({
  'click .new-note': () => {
    Session.set('newNote', true);
  },
  'click .cancel-new-note': () => {
    Session.set('newNote', false);
  },
});
