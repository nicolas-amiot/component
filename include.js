(function($){
	
	$.fn.extend({
		include: function(frag, func) {
			var include = this;
			include.load(include.attr("data-include") + " " + frag, function() {
				func;
			});
		}
	});
	
})(jQuery);