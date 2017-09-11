// import activeLink from 'common/active-link'

const app = new Vue({
  el: '#app',
  directives: {
    // activeLink
  },
  methods: {
    scaledImageLink(imageName){
      const windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      if(windowWidth <= 600){
        return 'images/600/'+imageName
      }
      if(windowWidth <= 960){
        return 'images/960/'+imageName
      }
      if(windowWidth <= 1264){
        return 'images/1264/'+imageName
      }
      if(windowWidth <= 1904){
        return 'images/1904/'+imageName
      }
      return 'images/'+imageName
    }
  },
})


