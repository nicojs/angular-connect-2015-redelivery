Like `directive()` but forces the best practices of web components

* Isolated scope
* `bindToController` (no `$scope`)
* `controllerAs` syntax (default `$ctrl`)

```javascript
.directive('counter', function counter() {
  return {
    scope: {},
    bindToController: { count: '=' },
    controllerAs: '$ctrl',
    template: '<input type="text" ng-model="$ctrl.count">'
  };
});

.component('counter', {
    bindings: { count: '=' },
    template: '<input type="text" ng-model="$ctrl.count">'
  },
});
```

