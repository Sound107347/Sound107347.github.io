var sequencePosition = 0;
var trackSequence = [0,1,2,3,4,5,6,7,8,9];
var tracks = ["track_01", "track_02", "track_03", "track_04","track_05", "track_06", "track_07", "track_08","track_09"];
				
function playNext(){
    if (sequencePosition < playSequence.length) {
	    playSequence();
	}
}
	
function playSequence() {
 var audioElement = document.getElementById(tracks[trackSequence[sequencePosition]]);
 audioElement.removeEventListener('ended', prepareNext);
 audioElement.addEventListener('ended', prepareNext, true);
 audioElement.play();
}
function prepareNext() {
    sequencePosition++;
    playNext();
}	

 

	
