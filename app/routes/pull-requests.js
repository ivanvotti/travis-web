import TravisRoute from 'travis/routes/basic';
import { service } from 'ember-decorators/service';

export default TravisRoute.extend({
  @service tabStates: null,
  @service auth: null,

  activate(...args) {
    this._super(args);

    if (this.get('auth.signedIn')) {
      this.set('tabStates.sidebarTab', 'owned');
      this.set('tabStates.mainTab', 'pull_requests');
    }
  },

  model() {
    return this.modelFor('repo').get('pullRequests');
  },

  titleToken() {
    return 'Pull Requests';
  },
});
