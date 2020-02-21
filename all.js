var app = new Vue({
  el: '#app',
  data: {
    userName: 'rccj',
    repositories: [],
  },
  // created: function () {
  //   this.updateRepos(this.userName);
  // },
  methods: {
    updateRepos: function (Input) {
      let apiUrl = `https://api.github.com/users/${Input}/repos`;
      // console.log(apiUrl);

      let xhr = new XMLHttpRequest();
      xhr.open('get', apiUrl, true);
      xhr.send(null);

      let vm = this;
      //vm是指向Vue這個物件

      xhr.onload = function () {
        vm.repositories = JSON.parse(xhr.responseText);
        //這裡的this是指向XMLHttpRequest這個物件
        // console.log(this)
        
        vm.userName = '';
        // console.log(JSON.parse(xhr.responseText))
      };
    }
  }
});