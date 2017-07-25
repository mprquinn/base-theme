export const testModule = (function ($) {
  let s;

  return {
    settings: {

    },

    init: function() {
      s = this.settings;
      this.bindUI();
    },

    bindUI: function () {
      console.log('imported module');
    }

  }
})();