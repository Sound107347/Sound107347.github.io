
function _(id){
	return document.getElementById(id);
}
function audioApp(){
	var audio = new Audio();
	var audio_folder = "audio06/";
	var audio_ext = ".mp3";
	var audio_index = 1;
	var is_playing = false;
	var playingtrack;
	var trackbox = _("trackbox");
	var tracks = {
		"track1":["the Santa Maria, the Pinta and El Nino","the Santa Maria the Pinta and El Nino"],
	    "track2":["who remake America in their image", "who remake America in their image"],
		"track3":["two vast continents teaming with life", "two vast continents teaming with life"],
		"track4":["a year from now Christopher Columbus will set foot on this quiet beach","a year from now Christopher Columbus will set foot on this quiet beach"],
	    "track5":["as millions of pigeons ducks and geese cover the horizon", "as millions of pigeons ducks and geese cover the horizon"],
		"track6":["more than six hundred thousand miles of coastline", "more than 600 thousand miles of coastline"],
		"track7":["this new world is a land of stark contrasts","this new world is a land of stark contrasts"]
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
