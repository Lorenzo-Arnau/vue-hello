var app = new Vue({
 el: '#root',
 data:{
   boxClass : 'box',
   up : 500,
   left : 500,
   right : 0,
   down : 0,
 },
 methods:{
    moveUp : function(){
      return this.up--
    },
    moveLeft : function(){
      return this.left--
    },
    moveRight : function(){
      return this.left++
    },
    moveDown : function(){
      return this.up++
    },
    winCheck :function(){
      if (this.up === 0 && this.left === 0) {
        alert('hai vinto!')
      }else {
        alert('manca poco riprova!')
      }
    },
},
});



Vue.config.devtools = true;
