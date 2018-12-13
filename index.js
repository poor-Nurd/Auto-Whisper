module.exports = function AutoWhisper(mod) {	

	let DefMes = ['.. Talk to you later i\'m AFK ','Mail me ... AFK ','Go away ... AFK','Not around the PC ... ','talk to you later .. AFK','hey , mail me i\'m not here','wassap! ... AFK ','hmmm talk to you later .. AFK ','AFK @mail me']
	let enabled = false;
	let length = DefMes.length;
	let receiver = '';
	
	
	mod.command.add(['aw','AutoWhisper'], {
		$none() {
			enabled = !enabled
			mod.command.message(`(Auto Whisper) ${enabled ? 'Enabled' : 'Disabled'}`)
		}
	})	

	mod.hook('S_WHISPER',2,event => {
		receiver = event.authorName;
		
		if(enabled){
			mod.toServer('C_WHISPER',1,{
			target : receiver,
			message : DefMes[Math.floor(Math.random() * length)]
			})
		} 	
	
	})
	
	
	}