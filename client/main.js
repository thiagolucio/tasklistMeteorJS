import { Template } from 'meteor/templating';
import './main.html';

Meteor.startup(function () {
  Meteor.subscribe("tasks");
});