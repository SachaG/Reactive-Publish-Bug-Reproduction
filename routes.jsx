import {mount} from 'react-mounter';

FlowRouter.route('/', {
  name: 'posts.list',
  action(params, queryParams) {
    mount(MyComponent);
  }
});