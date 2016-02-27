Meteor.startup(function (){
  for (i=0; i<=10; i++) {
    Posts.insert({title: "Hello World! "+i});
  }
});