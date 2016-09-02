new Vue({
	ready: function(){
    const self = this
		var handle = function(res){
      self.user = res.data
		}
		$.ajax({
			url: '/api',
			success: function(res){
				handle(res)
			}
		})
	},
	el: 'body',
	data: {
		msg: 'masuk',
		user: [],
    searchKey: 'name'
	},
  methods: {
    remove(item){
      this.user.$remove(item)
    }
  }
})