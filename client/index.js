angular.module('app', [])
  .component('homepage', {
    templateUrl: 'homepage.html',
    controller() {
      this.wineList = this.wineList || window.data;
      this.selected = null;
      this.favoriteView = false;
    },
  });
