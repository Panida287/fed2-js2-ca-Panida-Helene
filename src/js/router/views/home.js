import { authGuard } from "../../utilities/authGuard";
import { readPosts, readPostsByUser } from "../../api/post/read"; 
import { setLogoutListener } from '../../ui/global/logout';

authGuard();

renderPosts(); 

document.addEventListener('DOMContentLoaded', () => {
    setLogoutListener(); 
});

const postsContainer = document.getElementById("posts-container");
const myPostsButton = document.getElementById('my-posts');

myPostsButton.addEventListener('click', async () => {
    const userName = localStorage.getItem('userName');
    if (userName) {
        try {
            const response = await readPostsByUser(userName);
            const userPosts = response.data;

            postsContainer.innerHTML = '';
            userPosts.forEach(post => {
                const postMedia = post.media 
                    ? `<img class="post-media" src="${post.media.url}" alt="${post.media.alt || 'Post media'}">`
                    : ''; 

                const authorAvatar = post.author.avatar 
                    ? `<img class="author-img" src="${post.author.avatar.url}" alt="${post.author.name}'s avatar">`
                    : ''; 

                const postElement = document.createElement('div');
                postElement.classList.add('post');

                postElement.innerHTML = `
                    <div class="post-body-container">
                        <a href="/post/?postID=${post.id}" data-postID="${post.id}">
                            ${postMedia}
                            <h2 class="post-title">${post.title}</h2>
                            <p class="post-body">${post.body}</p>
                         </a>
                    </div>

                    <div class="author-container">
                        <a href="profile/?authorID=${post.author.name}" class="author-link" data-authorID="${post.author.name}">${authorAvatar}
                        <div class="author-name">${post.author.name}</div>
                        </a>
                    </div>
                `;

                postsContainer.appendChild(postElement);
            });

        } catch (error) {
            console.error("Error fetching user posts:", error);
        }
    } else {
        console.error('User not logged in');
    }
});

/**
 * Fetches and renders all posts in the DOM.
 * 
 * This function fetches posts using the `readPosts` function, which retrieves posts from the API.
 * It processes the data and dynamically creates HTML elements to display each post along with
 * the post's author, media, and content. It appends these elements to the `postsContainer` div.
 * 
 * @async
 * @function renderPosts
 * @returns {Promise<void>} A promise that resolves when posts are rendered. Logs errors if the request fails.
 * 
 * @throws {Error} Will log an error message if fetching posts from the API fails.
 */
async function renderPosts() {
  try {
    const response = await readPosts();
    const posts = response.data;

    postsContainer.innerHTML = '';

    posts.forEach(post => {
      const postMedia = post.media 
        ? `<img class="post-media" src="${post.media.url}" alt="${post.media.alt || 'Post media'}">`
        : ''; 

      const authorAvatar = post.author.avatar 
        ? `<img class="author-img" src="${post.author.avatar.url}" alt="${post.author.name}'s avatar">`
        : ''; 

      const postElement = document.createElement('div');
      postElement.classList.add('post');

      postElement.innerHTML = `
        <div class="post-body-container">
            <a href="/post/?postID=${post.id}" data-postID="${post.id}">
                ${postMedia}
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">${post.body}</p>
             </a>
        </div>

        <div class="author-container">
            <div class="author-avatar">${authorAvatar}
            <div class="author-name">${post.author.name}</div>
            </div>
        </div>
      `;

      postsContainer.appendChild(postElement);
    });

  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

