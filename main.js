Vue.config.devtools = true;

new Vue ({
	el: '#app',

	data: {
		disks: '',
		genres: [],
		chosenGenre: 'All'
	},

	mounted () {
		const self = this;

		axios.get('https://flynn.boolean.careers/exercises/api/array/music')
		.then(function (disk) {
			self.disks = disk.data.response;
			self.disks.forEach((element) => {
				if (!self.genres.includes(element.genre)) {
					self.genres.push(element.genre);
				}
			});
		});
	}
});
