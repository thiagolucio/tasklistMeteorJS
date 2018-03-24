Template.newTask.events({
  "submit form": function (e, template) {
    e.preventDefault(); //way to form sent event default

    var input = $("#nameTask");
    var name = input.val();
    // Tasks.insert({ name: name, data: new Date() });
    Meteor.call("addNewTask", {
      name: name,
      user: this.userId
    });
    input.val("");
  },

  //exclusive routine for button add
  "click button": function (e, template) {
    var tasks = this;
    var input = $("#nameTask");
    var name = input.val();

    Meteor.call("addNewTask", {
      name: name,
      user: this.userId
    });
    input.val("");
  }

});