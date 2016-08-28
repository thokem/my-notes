Notes = new Mongo.Collection('notes');

Notes.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  },
  remove: function(userId, doc) {
    return !!userId;
  },
});

ItemSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  checked: {
    type: Boolean,
    label: "Checked",
    defaultValue: false,
    optional: true,
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date();
    },
    autoform: {
      type: "hidden"
    }
  }
});

NoteSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  userId: {
    type: String,
    label: "User Id",
    autoValue: function() {
      return this.userId;
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date();
    },
    autoform: {
      type: "hidden"
    }
  },
  items: {
    type: [ ItemSchema ]
  }
});

Notes.attachSchema(NoteSchema);

Meteor.methods({

  removeNote: function(id) {
    Notes.remove(id);
  },
});

// This code only runs on the client.
if (Meteor.isClient) {
  AutoForm.addHooks(['insertNoteId', 'updateNoteId'], {
    onError: function(formType, error) {
        Bert.alert(error.toString(), 'danger', 'fixed-top', 'fa-frown-o');
    },
  });
}
