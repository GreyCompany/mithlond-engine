import activeLink from 'common/active-link'

$(function(){
  const app = new Vue({
    el: '#app',
    directives: {
      activeLink
    }
  })
})

