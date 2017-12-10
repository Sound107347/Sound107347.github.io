function _(id){
	return document.getElementById(id);
}
function audioApp(){
	var audio = new Audio();
	var audio_folder = "audio/";
	var audio_ext = ".mp3";
	var audio_index = 1;
	var is_playing = false;
	var playingtrack;
	var trackbox = _("trackbox");
	var tracks = {
		"track1":["можно утверждать что", "можно утверждать что"],
	    "track2":["был подтвержден", "был подтвержден"],
		"track3":["факт присутсвия", "факт присутсвия"],
		"track4":["современная история", "современная история"],
		"track5":["началась именно тогда", "началась именно тогда"],
		"track6":["существовали намного раньше", "существовали намного раньше"],
		"track7":["специалисты по изучению", "специалисты по изучению"],
		"track8":["отметили своеобразный юбилей", "отметили своеобразный юбилей"],
		"track9":["пароход британо-индийской компании", "пароход британо-индийской компании"],
		"track10":["и вплоть до начала первой мировой войны", "и вплоть до начала первой мировой войны"],
		"track11":["со дня появления в земной атмосфере", "со дня появления в земной атмосфере"]
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
