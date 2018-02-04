// jQuery Plugins: jEmotion 2.3
// Copyright @ www.phpbasic.com
// View http://jquery.phpbasic.com/jemotion for new version

(function($) {
	$.fn.emotions = function(settings,more_emotions) {
		var _cfg = {
			handle: 'a',
			dir: 'emotions/',
			label: 'Click here to show emotion icons',
			style: null,
			cls: null,
			r_alert: 1,
			emotions: [
				 {syntax: '&gt;:)',title: 'Devil',icon: '1.gif'},
				 {syntax: ':((',title: 'Crying',icon: '2.gif'},
				 {syntax: ';;)',title: 'batting eyelashes',icon: '3.gif'},
				 {syntax: '&gt;:D&lt;',title: 'big hug',icon: '4.gif'},
				 {syntax: '&lt;):)',title: 'cowboy',icon: '5.gif'},
				 {syntax: ':D',title: 'big grin',icon: '6.gif'},
				 {syntax: ':-/',title: 'confused',icon: '7.gif'},
				 {syntax: ':x',title: 'love struck',icon: '8.gif'},
				 {syntax: '&gt;:P',title: 'phbbbbt',icon: '10.gif'},
				 {syntax: ':-*',title: 'kiss',icon: '11.gif'},
				 {syntax: '=((',title: 'broken heart',icon: '12.gif'},
				 {syntax: ':-O',title: 'surprise',icon: '13.gif'},
				 {syntax: '~X(',title: 'at wits\' end',icon: '14.gif'},
				 {syntax: ':&gt;',title: 'smug',icon: '15.gif'},
				 {syntax: 'B-)',title: 'cool',icon: '16.gif'},
				 {syntax: ':-SS',title: 'nail biting',icon: '17.gif'},
				 {syntax: '#:-S',title: 'whew!',icon: '18.gif'},
				 {syntax: ':))',title: 'laughing',icon: '19.gif'},
				 {syntax: ':(',title: 'sad',icon: '20.gif'},
				 {syntax: '/:)',title: 'raised eyebrows',icon:'21.gif'},
				 {syntax: '(:|',title: 'yawn',icon: '22.gif'},
				 {syntax: ':)]',title: 'on the phone',icon: '23.gif'},
				 {syntax: '=))',title: 'rolling on the floor',icon: '24.gif'},
				 {syntax: 'O:-)',title: 'angel',icon: '25.gif'},
				 {syntax: ':-B',title: 'nerd',icon: '26.gif'},
				 {syntax: '=;',title: 'talk to the hand',icon: '27.gif'},
				 {syntax: '8-|',title: 'rolling eyes',icon: '29.gif'},
				 {syntax: 'L-)',title: 'loser',icon: '30.gif'},
				 {syntax: ':-&amp;',title: 'sick',icon: '31.gif'},
				 {syntax: ':-$',title: 'don\'t tell anyone',icon: '32.gif'},
				 {syntax: '[-(',title: 'no talking',icon: '33.gif'},
				 {syntax: ':O)',title: 'clown',icon: '34.gif'},
				 {syntax: '8-}',title: 'silly',icon: '35.gif'},
				 {syntax: '&lt;:-P',title: 'party',icon: '36.gif'},
				 {syntax: ':|',title: 'straight face',icon: '37.gif'},
				 {syntax: '=P~',title: 'drooling',icon: '38.gif'},
				 {syntax: ':-?',title: 'thinking',icon: '39.gif'},
				 {syntax: '#-o',title: 'd\'oh',icon: '40.gif'},
				 {syntax: '=D&gt;',title: 'applause',icon: '41.gif'},
				 {syntax: ':-S',title: 'worried',icon: '42.gif'},
				 {syntax: '@-)',title: 'hypnotized',icon: '43.gif'},
				 {syntax: ':^o',title: 'liar',icon: '44.gif'},
				 {syntax: ':-w',title: 'waiting',icon: '45.gif'},
				 {syntax: ':-&lt;',title: 'sigh',icon: '46.gif'},
				 {syntax: ':P',title: 'tongue',icon: '47.gif'},
				 {syntax: ';)',title: 'winking',icon: '48.gif'},
				 {syntax: ':)',title: 'happy',icon: '100.gif'},
				 {syntax: ':-c',title: 'call me',icon: '101.gif'},
				 {syntax: 'X(',title: 'angry',icon: '102.gif'},
				 {syntax: ':-h',title: 'wave',icon: '103.gif'},
				 {syntax: '8-&gt;',title: 'day dreaming',icon: '105.gif'}
			]
		};
		if(settings) $.extend(_cfg, settings);
		var obj = this;
		var default_label = $(_cfg.handle).html();
		var default_style = $(_cfg.handle).attr('style');
		var default_css = $(_cfg.handle).attr('class');
		var funct = {
			__regexp: function(str){
				return str.replace(/(\.|\\|\+|\*|\?|\[|\^|\]|\$|\(|\)|\{|\}|\=|\!|\<|\>|\||\:|\-)/ig,"\\$1");
			},
			__load: function(){ // apply emotion
				if(more_emotions){
					$.each(more_emotions,function(id,val){
						if(_cfg.r_alert && _cfg.emotions[id]){
							if(confirm('Emotion '+id+'.'+_cfg.emotion_ext+' <=> '+_cfg.emotions[id]+' does exists. Do you want to replace it by '+val+' ?')) _cfg.emotions[id] = val;
						}else{
							_cfg.emotions[id] = val;
						}
					});
				}
				obj.each(function(){
					var str = $(this).html();
					$.each(_cfg.emotions,function(iEM,bbcode){
						str = str.replace(new RegExp(funct.__regexp(bbcode.syntax),'ig'),'<span class="emotion_show '+iEM+'"><img  src="'+_cfg.dir+bbcode.icon+'" title="'+bbcode.title+'" /></span>');
					});
					$(this).html(str);
					$(_cfg.handle).html(default_label).attr({'style':default_style}).addClass(default_css);
				})
			},
			__remove: function(){ // remove emotion
				$(obj).find('span.emotion_show').each(function(){
					var iE = Number(this.className.split('emotion_show ')[1]);
					$(this).attr({'class':''}).addClass('emotion_hide '+iE).html(_cfg.emotions[iE].syntax);		
				});
				$(_cfg.handle).html(_cfg.label).attr({'style':_cfg.style}).addClass(_cfg.cls);
			},
			__again: function(){
				$(obj).find('span.emotion_hide').each(function(){
					var iE = Number(this.className.split('emotion_hide ')[1]);
					$(this).attr({'class':''}).addClass('emotion_show '+iE).html('<img  src="'+_cfg.dir+_cfg.emotions[iE].icon+'" title="'+_cfg.emotions[iE].title+'" />');
				});
				$(_cfg.handle).html(default_label).attr({'style':default_style}).addClass(default_css);
			}
		};
		
		$(_cfg.handle).toggle(funct.__remove,funct.__again);
		funct.__load();
		return false;
	};
})(jQuery)