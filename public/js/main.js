// main.js - for dashboard and login enhancements

// ---------------- Login page error styling ----------------
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('form');
  if(loginForm){
    loginForm.addEventListener('submit', (e) => {
      const username = loginForm.username.value.trim();
      const password = loginForm.password.value.trim();

      // Simple front-end check
      if(!username || !password){
        e.preventDefault();
        alert('Enter username/password correctly!');
      }
    });
  }

  // ---------------- Dashboard live preview ----------------
  const dashboardForm = document.querySelector('form[action="/update"]');
  if(dashboardForm){
    const titleInput = dashboardForm.querySelector('input[name="title"]');
    const bgInput = dashboardForm.querySelector('input[name="background"]');
    const paintTitleInput = dashboardForm.querySelector('input[name="paint1_title"]');
    const paintImgInput = dashboardForm.querySelector('input[name="paint1_img"]');

    // Live preview elements (assuming dashboard has a preview area)
    const previewTitle = document.createElement('h1');
    const previewGalleryTitle = document.createElement('h2');
    const previewGalleryImg = document.createElement('img');

    const previewContainer = document.createElement('div');
    previewContainer.appendChild(previewTitle);
    previewContainer.appendChild(previewGalleryTitle);
    previewContainer.appendChild(previewGalleryImg);
    document.body.appendChild(previewContainer);

    // Update preview on input change
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