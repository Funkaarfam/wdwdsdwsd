document.addEventListener('DOMContentLoaded', () => {
  const dashboardForm = document.querySelector('form[action="/update"]');
  if(dashboardForm){
    const titleInput = dashboardForm.querySelector('input[name="title"]');
    const bgInput = dashboardForm.querySelector('input[name="background"]');
    const paintTitleInput = dashboardForm.querySelector('input[name="paint1_title"]');
    const paintImgInput = dashboardForm.querySelector('input[name="paint1_img"]');

    const previewTitle = document.createElement('h1');
    const previewGalleryTitle = document.createElement('h2');
    const previewGalleryImg = document.createElement('img');
    const previewContainer = document.createElement('div');
    previewContainer.style.marginTop = '20px';
    previewContainer.appendChild(previewTitle);
    previewContainer.appendChild(previewGalleryTitle);
    previewContainer.appendChild(previewGalleryImg);
    document.body.appendChild(previewContainer);

    const updatePreview = () => {
      previewTitle.textContent = titleInput.value || 'Website Title';
      previewGalleryTitle.textContent = paintTitleInput.value || 'Painting Title';
      previewGalleryImg.src = paintImgInput.value || 'https://via.placeholder.com/400x300';
      document.body.style.background = bgInput.value || '#ffffff';
    };

    titleInput.addEventListener('input', updatePreview);
    bgInput.addEventListener('input', updatePreview);
    paintTitleInput.addEventListener('input', updatePreview);
    paintImgInput.addEventListener('input', updatePreview);
    updatePreview();
  }
});
