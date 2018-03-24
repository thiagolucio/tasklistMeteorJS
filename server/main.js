import { Meteor } from 'meteor/meteor';

Meteor.startup(function () {
  // code to run on server at startup
  Meteor.publish("tasks", function () {
    return Tasks.find({ user: this.userId });
  });
});
