var TestModule = (function($) {
  let s;

  return {
    settings: {
      message: 'module imported'
    },

    init: function () {
      s = this.settings;
      this.bindUI();
    },

    bindUI: function () {
      console.log(s.message);
    }
  }
})(jQuery);

TestModule.init();