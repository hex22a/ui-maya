/**
 * Created by x22a on 10.05.15.
 */
angular.module('uiMaya', [])
    .value('uiMayaConfig', {})
    .directive('uiMaya', ['uiMayaConfig', function (uiMayaConfig) {
      uiMayaConfig = uiMayaConfig || {};
      var generatedIds = 0;
      return {
        priority: 10,
        require: 'ngModel',
        link: function (scope, elm, attrs, ngModel) {
          var expression, options, mayaInstance,
              updateView = function () {
                ngModel.$setViewValue(elm.val());
                if (!scope.$root.$$phase) {
                  scope.$apply();
                }
              };

          if (!attrs.id) {
            attrs.$set('id', 'uiMaya' + generatedIds++);
          }

          if (attrs.uiMaya) {
            expression = scope.$eval(attrs.uiMaya);
          } else {
            expression = {};
          }

          if (expression.setup) {
            var configSetup = expression.setup;
            delete expression.setup;
          }

          options = {
            setup: function (ed) {
              var args;
              ed.on('init', function(args) {
                ngModel.$render();
                ngModel.$setPristine();
              });
              ed.on('ExecCommand', function (e) {
                ed.save();
                updateView();
              });
              ed.on('KeyUp', function (e) {
                ed.save();
                updateView();
              });
              ed.on('SetContent', function (e) {
                if (!e.initial && ngModel.$viewValue !== e.content) {
                  ed.save();
                  updateView();
                }
              });
              ed.on('blur', function(e) {
                elm.blur();
              });
              ed.on('ObjectResized', function (e) {
                ed.save();
                updateView();
              });
              if (configSetup) {
                configSetup(ed);
              }
            },
            mode: 'exact',
            elements: attrs.id
          };
          angular.extend(options, uiMayaConfig, expression);
          setTimeout(function () {
            maya.init(options);
          });

          ngModel.$render = function() {
            if (!mayaInstance) {
              mayaInstance = maya.get(attrs.id);
            }
            if (mayaInstance) {
              mayaInstance.setContent(ngModel.$viewValue || '');
            }
          };

          scope.$on('$destroy', function() {
            if (!mayaInstance) { mayaInstance = maya.get(attrs.id); }
            if (mayaInstance) {
              mayaInstance.remove();
              mayaInstance = null;
            }
          });
        }
      };
    }]);