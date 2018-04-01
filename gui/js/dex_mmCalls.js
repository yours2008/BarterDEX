/*** AJAX calls to marketmaker ***/

/*** Global Variables ***/
var mm_url = "http://127.0.0.1:7783";
var userpass = null;
var mypubkey = null;
/*** Setting functions ***/
function Get_mm_creds() {
	userpass = sessionStorage.getItem('mm_userpass');
	mypubkey = sessionStorage.getItem('mm_mypubkey');
}
/*** AJAX defaults for marketmaker ***/
$.ajaxSetup({
	async: true, dataType: 'json', type: 'POST', url: mm_url, 'timeout': 0
});

/*** AJAX sell call to marketmaker ***/
function mm_sell(selling_data) {
	/*** log to electron console that we are making this call to marketmaker ***/
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	/*** extract from JSON and use longer words for vars ***/
	var base_coin = selling_data.base;
	var rel_coin = selling_data.rel;
	var selling_volume = selling_data.vol;

	console.log('Selling BASE: ' + base_coin);
	console.log('Selling REL: ' + rel_coin);

	/*** Get our account vars ***/
	Get_mm_creds();
	/*** What type of sell are we? ***/
	switch (selling_data.sell_type) {
		case "dump":
			var ajax_data = { "userpass": userpass, "method": "sell", "base": base_coin, "rel": rel_coin, "dump": selling_volume };
			break;

		default:
			break;
	}
	console.log('sell output: ' + ajax_data);
	console.log('sell output: ' + JSON.stringify(ajax_data));
	/*** POST sell to mm ***/
	$.ajax({
		data: JSON.stringify(ajax_data)
	}).done(function (mm_sell_output_data) {
		/*** We get a reply from mm ***/
		if (!mm_sell_output_data.error === false) { /*** Our sell attempt failed ***/
			console.error('sell failed return: ' + JSON.stringify(mm_sell_output_data))
		} else if (mm_sell_output_data.result == 'success') { /*** Our sell offer is posted ***/
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			console.log('sell success return: ' + JSON.stringify(mm_sell_output_data))
		}
	}).fail(function (jqXHR, textStatus, errorThrown) { console.error(textStatus + ': ' + errorThrown); }); /*** Our whole mm call failed ***/

}

/*** Pass debug page content to marketmaker ***/
$('#debug-exec').click(function (e) {
	var ajax_data = $('#debug-payload').val();
	console.warn(ajax_data.indexOf('\\"'));
	$.ajax({
		data: ajax_data.indexOf('\\"') > -1 ? JSON.parse(ajax_data) : JSON.parse(JSON.stringify(ajax_data))
	}).done(function (data) {
		console.warn('debug exec', data);
		$('#debug-payload-response').html(JSON.stringify(data, null, '\t'));
	});
});
