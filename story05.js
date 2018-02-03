
function _(id){
	return document.getElementById(id);
}
function audioApp(){
	var audio = new Audio();
	var audio_folder = "audio05/";
	var audio_ext = ".mp3";
	var audio_index = 1;
	var is_playing = false;
	var playingtrack;
	var trackbox = _("trackbox");
	var tracks = {
		"track1":["once upon a time in a far away land a young prince lived in a shining castle","once upon a time in a far away land a young prince lived in a shining castle"],
	    "track2":["and offered him a single rose in return for shelter from the bitter cold", "and offered him a single rose in return for shelter from the bitter cold"],
		"track3":["although he had everything his heart desired the prince was selfish and unkind", "although he had everything his heart - spoiled selfish and unkind"],
		"track4":["repulsed by her haggard appearance the prince sneered at the gift","repulsed by her haggard appearance the prince sneered at the gift"],
	    "track5":["but she warned him not to be deceived by appearances", "but she warned him not to be deceived by appearances"],
		"track6":["the old woman's ugliness melted away to reveal a beautiful enchantress", "the old woman's ugliness melted away to reveal a beautiful enchantress"],
		"track7":["the prince tried to apologize but it was too late","the prince tried to apologize but it was too late"]
	};
	for(var track in tracks){
		var tb = document.createElement("div");
		var pb = document.createElement("button");
		var tn = document.createElement("div");
		tb.className = "trackbar";
		pb.className = "playbutton";
		tn.className = "trackname";
		tn.innerHTML = audio_index+". "+tracks[track][0];
		pb.id = tracks[track][1];
		pb.addEventListener("click", switchTrack);
		tb.appendChild(pb);
		tb.appendChild(tn);
		trackbox.appendChild(tb);
		audio_index++;
	}
	audio.addEventListener("ended",function(){
	    _(playingtrack).style.background = "url(images/playbtn.jpg)";
		playingtrack = "";
		is_playing = false;
	});
	function switchTrack(event){
		if(is_playing){
		    if(playingtrack != event.target.id){
			    is_playing = true;
				_(playingtrack).style.background = "url(images/playbtn.jpg)";
			    event.target.style.background = "url(images/pausebtn.jpg)";
			    audio.src = audio_folder+event.target.id+audio_ext;
	            audio.play();
			} else {
			    audio.pause();
			    is_playing = false;
				event.target.style.background = "url(images/playbtn.jpg)";
			}
		} else {
			is_playing = true;
			event.target.style.background = "url(images/pausebtn.jpg)";
			if(playingtrack != event.target.id){
				audio.src = audio_folder+event.target.id+audio_ext;
			}
	        audio.play();
		}
		playingtrack = event.target.id;
	}
}
window.addEventListener("load", audioApp);
