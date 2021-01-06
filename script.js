$(document).ready(function(){
    $("input[data-mask]").each(function(){
		$(this).mask();
	});
	$("datalist[data-match]").each(function(){
		$(this).datalist();
	});
	$("*[data-include]").each(function(){
		$(this).include("nav", $(this).navbar());
	});
	$("nav").each(function(){
		$(this).navbar();
	});
	$(".treeview").each(function(){
		$(this).treeview({
			"childNumber": true,
			"type": "checkbox",
			"name": "myTreeView"
		});
	});
});