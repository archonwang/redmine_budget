(function() {
  var BudgetFrotendPlugin;

  BudgetFrotendPlugin = (function() {
    BudgetFrotendPlugin.prototype._root = null;

    function BudgetFrotendPlugin() {
      jQuery((function(_this) {
        return function() {
          _this._root = $('.redmine_budget_frontend');
          if (_this._root.length === 0) {
            return;
          }
          return _this._init_budget_calculator();
        };
      })(this));
      true;
    }

    BudgetFrotendPlugin.prototype._init_budget_calculator = function() {
      var _acc_cost, _available, _budget, _burned, _cost, _overhead, _percent, _profit, _rate, _rate_acc_cost, _rate_base_cost, _rate_overhead, _score, ref, ref1;
      ref = window.BudgetHelper.rates(this._root.data('cost-per-hour')), _rate = ref[0], _rate_overhead = ref[1], _rate_acc_cost = ref[2], _rate_base_cost = ref[3];
      ref1 = window.BudgetHelper.budget(this._root.data('budget'), this._root.data('spent-time'), this._root.data('cost-per-hour')), _budget = ref1[0], _burned = ref1[1], _available = ref1[2], _cost = ref1[3], _overhead = ref1[4], _acc_cost = ref1[5], _profit = ref1[6], _score = ref1[7], _percent = ref1[8];
      console.log(_burned);
      console.log(_profit);
      return console.log(_score);
    };

    return BudgetFrotendPlugin;

  })();

  window.BudgetFrotendPlugin = new BudgetFrotendPlugin();

}).call(this);
