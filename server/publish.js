Meteor.publish('allNotes', function(){
    return Notes.find();
});

Meteor.publish('userNotes', function(){
    return Notes.find({userId: this.userId});
});

Meteor.publish('singleNote', function(id){
    return Notes.find({_id: id});
});
