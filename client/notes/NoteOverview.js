Template.NoteOverview.onCreated(function(){
  //this.editMode = new ReactiveVar(false);
  this.editMode = new ReactiveVar();
  this.editMode.set(false);
});

Template.NoteOverview.helpers({
  updateNoteId: function() {
    return this._id;
  },
  editMode: function() {
    return Template.instance().editMode.get();
  },
  fromNow: function(date) {
    if (date) {
      var moment = require('moment');
      return moment(date).fromNow(true);
    }
  },
});

Template.NoteOverview.events({

  'click .fa-trash': function() {
    Meteor.call('removeNote', this._id);
  },
  'click .fa-pencil': function(event, template) {
    //Session.set('editMode', !Session.get('editMode'));
    template.editMode.set(!template.editMode.get());
  },
  'click .updateNoteForm': function(event, template) {
    if(event.target.type == 'submit') {
      template.editMode.set(!template.editMode.get());
    }
  },
});
