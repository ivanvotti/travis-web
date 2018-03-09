import Component from '@ember/component';
import { service } from 'ember-decorators/service';

export default Component.extend({
  @service auth: null,

  actions: {
    signIn() {
      this.get('auth').signIn();
    }
  }
});
