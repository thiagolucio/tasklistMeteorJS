Template.list.helpers({    
    tasks: function () {
        return Tasks.find({});
    },
    formatDate: function () {
        return moment(this.data).format('MM/DD/YYY HH:mm');
    }
});
Template.list.events({
    "click button": function (e, addTask, removeTask, template) {
        var tasks = this;
        // Tasks.remove({ _id: tasks._id });
        Meteor.call("removeTask", tasks._id);       
    }
});