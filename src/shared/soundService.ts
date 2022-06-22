const play = (id: string): void => {
  const selectAudio = document.getElementById(id) as HTMLAudioElement;
  if (selectAudio) {
    selectAudio.pause();
    selectAudio.currentTime = 0;
    selectAudio.play();
  }
};

const sound = { play };
export default sound;
