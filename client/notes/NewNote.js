Template.NewNote.events({

  'click .insertNoteForm': function(event, template) {
    if(event.target.type == 'submit') {
      Session.set('newNote', false);
    }
  },
});
