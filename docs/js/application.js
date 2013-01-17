// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++
!function ($) {
$(function(){
	var $window = $(window);
	// Disable certain links in docs
	$('section [href^=#]').click(function (e) {
	  e.preventDefault()
	});

	// side bar
	$('.bs-docs-sidenav').affix();

	// make code pretty
	window.prettyPrint && prettyPrint();

	var content = '好雨知时节， 当春乃发生。随风潜入夜， 润物细无声。野径云俱黑， 江船火独明。晓看红湿处， 花重锦官城。';

	$('#purebox').click(function() {
		$.pb({
			id : 'idialog',
			title : '标题',
			content :  content
		});
	});

	$('#purebox-fixed-true').pb({
		id : 'idialog',
		title : '标题',
		content : content,
		fixed:true
	});
	$('#purebox-fixed-false').pb({
		id : 'idialog',
		title : '标题',
		content : content,
		fixed:false
	});


	$('#purebox-no-head').pb({
		id : 'purebox-no-head',
		title : 'purebox-no-head',
		head : false,
		content :  content
	});

	$('#purebox-no-xbtn').pb({
		id : 'purebox-no-xbtn',
		title : 'purebox-no-xbtn',
		xBtn : false,
		content :  content
	});

	$('#purebox-no-foot').pb({
		id : 'purebox-no-foot',
		title : 'purebox-no-foot',
		foot : false,
		content :  content
	});

	$('#purebox-no-cancelBtn').pb({
		id : 'purebox-no-foot',
		title : 'purebox-no-foot',
		cBtn : false,
		content :  content
	});

	$('#purebox-only-contnet').pb({
		id : 'purebox-only-contnet',
		title : 'purebox-only-contnet',
		head : false,
		foot : false,
		content :  content
	});

	$('#purebox-onClose').pb({
		id : 'purebox-onClose',
		title : 'purebox-onClose',
		content :  content,
		onClose : onClose
	});
	function onClose() {
		alert('close');
	}

	$('#purebox-onOk').pb({
		id : 'purebox-onOk',
		title : 'purebox-onOk',
		content :  content,
		onOk : onOk
	});
	function onOk() {
		alert('ok');
	}

	$('#purebox-onCancel').pb({
		id : 'purebox-onCancel',
		title : 'purebox-onCancel',
		content :  content,
		onCancel : onCancel
	});
	function onCancel() {
		alert('cancel');
	}


	$('#purebox-alert').click(function() {
		$.pb.alert("好雨知时节， 当春乃发生。<br>随风潜入夜， 润物细无声。", function() {
			alert("alert");
		});
	});

	$('#purebox-confirm').click(function() {
		$.pb.confirm("好雨知时节， 当春乃发生。", function() {
			alert("confirmed");
		});
	});

	$('#purebox-resize-true').pb({
		id : 'purebox-resize-true',
		title : '标题',
		content :  content,
		resize : true
	});

	$('#purebox-resize-false').pb({
		id : 'purebox-resize-false',
		title : '标题',
		content :  content,
		resize : false
	});


	$('#purebox-drag-true').pb({
		id : 'purebox-drag-true',
		title : '标题',
		content :  content,
		drag : true
	});

	$('#purebox-drag-false').pb({
		id : 'purebox-drag-false',
		title : '标题',
		content :  content,
		drag : false
	});


	$('#purebox-mask-true').pb({
		id : 'purebox-mask-true',
		title : '标题',
		content :  content,
		mask : true
	});

	$('#purebox-mask-false').pb({
		id : 'purebox-mask-false',
		title : '标题',
		content :  content,
		mask : false
	});

});
}(window.jQuery)