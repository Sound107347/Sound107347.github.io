
function _(id){
	return document.getElementById(id);
}
function audioApp(){
	var audio = new Audio();
	var audio_folder = "audio02/";
	var audio_ext = ".mp3";
	var audio_index = 1;
	var is_playing = false;
	var playingtrack;
	var trackbox = _("trackbox");
	var tracks = {
		"track1":["<q>Just how far had China's imperial fleet pushed the boundaries of the known <i>world</i>?</q>","1"],
	    "track2":["<q>attracting visitors from across the <i>world</i>.</q>", "2"],
		"track3":["<q>Hinduism is the oldest living religion in the <i>world</i>.</q>", "3"],
		
		"track4":["<q>The Indo civilization developed here eventually becoming the <i>world</i>'s largest...</q>", "4"]
		
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
