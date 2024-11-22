function showVideoPopup(videoSrc) {
  const popup = document.createElement('div');
  popup.style.position = 'fixed';
  popup.style.top = '0';
  popup.style.left = '0';
  popup.style.width = '100%';
  popup.style.height = '100%';
  popup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  popup.style.display = 'flex';
  popup.style.justifyContent = 'center';
  popup.style.alignItems = 'center';
  popup.onclick = function() {
    document.body.removeChild(popup);
  };

  const video = document.createElement('video');
  video.src = videoSrc;
  video.controls = true;
  video.autoplay = true;
  video.style.width = '80%';
  popup.appendChild(video);

  document.body.appendChild(popup);
}
