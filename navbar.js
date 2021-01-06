(function($){
	
	$.fn.extend({
		navbar: function() {
			var navbar = this;
			var fichier = $(location).attr('pathname');
			this.find("a").each(function () {
				if(fichier.indexOf($(this).attr('href')) !== -1){
					$(this).addClass('active');
				}
			});
		}
	});
	
})(jQuery);