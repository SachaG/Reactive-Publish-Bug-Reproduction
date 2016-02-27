MyComponent = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.subscribe('posts');
    return {
      posts: Posts.find().fetch()
    }
  },

  render() {
    if (this.data.posts) {
      return <div>{this.data.posts.map(post => <p key={post._id}>{post.title}</p>)}</div>
    } else {
      return <p>loading…</p>
    }
  }

});