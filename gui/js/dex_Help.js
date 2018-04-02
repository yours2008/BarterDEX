

// Please add info buttons around BarterDEX GUI components and make the model help for them as per these examples
// The same text can be added to the translation files so that this same help can be translated to other languages.


$('.exchange_enable_fomo_dump_info_btn').click(function (e) {
	e.preventDefault();
	console.log('exchange_enable_fomo_dump_info_btn clicked');
	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	bootbox.alert({
		onEscape: true,
		backdrop: true,
		title: default_lang.Exchange.exchange_enable_fomo_dump,
		message: `This option will allow you buy/sell for your specified volume at ±5% the orderbook entry that is the biggest that fits.<br> \
		If you select a value larger than you actually have, it will default to your largest UTXO.`,
		size: 'large'
	});
});

$('.exchange_dont_auto_repeat_order_info_btn').click(function (e) {
	e.preventDefault();
	console.log('exchange_dont_auto_repeat_order_info_btn clicked');
	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	bootbox.alert({
		onEscape: true,
		backdrop: true,
		title: default_lang.Exchange.exchange_dont_auto_repeat_order,
		message: `This is an Alice offer`,
		size: 'large'
	});
});


$('.exchange_enable_auto_repeat_this_trade_info_btn').click(function (e) {
	e.preventDefault();
	console.log('exchange_enable_auto_repeat_this_trade_info_btn clicked');
	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	bootbox.alert({
		onEscape: true,
		backdrop: true,
		title: default_lang.Exchange.exchange_enable_auto_repeat_this_trade,
		message: `This is a Bob offer`,
		size: 'large'
	});
});

$('.exchange_enable_auto_repeat_coinmarketcap_info_btn').click(function (e) {
	e.preventDefault();
	console.log('exchange_enable_auto_repeat_coinmarketcap_info_btn clicked');
	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	bootbox.alert({
		onEscape: true,
		backdrop: true,
		title: default_lang.Exchange.exchange_enable_auto_repeat_coinmarketcap,
		message: `This is the GUI version of an LP node`,
		size: 'large'
	});
});


