const updatePostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#edit-title').value.trim();
  const content = document.querySelector('#edit-content').value.trim();
  const id = document.querySelector('#post-id').value;

  if (title && content) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update post.');
    }
  }
};

document
  .querySelector('.edit-post-form')
  ?.addEventListener('submit', updatePostHandler); 