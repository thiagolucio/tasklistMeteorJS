//Methods from Meteor
Meteor.methods({
  addNewTask: function (obj) {
    Tasks.insert({
      name: obj.name,
      data: new Date(),
      user: this.userId
    });
  },
  removeTask: function (id) {
    Tasks.remove({
      _id: id,
      user: this.userId
    });
  }
});