import { authGuard } from "../../utilities/authGuard";
import { readProfile } from "../../api/profile/read";
import { setLogoutListener } from '../../ui/global/logout';

authGuard();

document.addEventListener('DOMContentLoaded', () => {
    setLogoutListener(); 
});

const username = localStorage.getItem('userName');

const profileContainer = document.getElementById("profile-container");

/**
 * Fetches and renders the user's profile.
 * 
 * This function fetches the profile data from the API based on the current 
 * user's username, which is retrieved from localStorage. It then clears the 
 * `profileContainer` and populates it with the user's name, email, and avatar 
 * (if available). If an error occurs during the profile fetching process, an 
 * error message is displayed instead.
 * 
 * @async
 * @function renderProfile
 * @returns {Promise<void>} Resolves when the profile is successfully rendered.
 * @throws Will throw an error if the network request fails or the profile data is unavailable.
 * 
 * @async
 * @function renderProfile
 * @returns {Promise<void>}
 */
async function renderProfile() {
    try {
        const profile = await readProfile(username);

        profileContainer.innerHTML = '';

        const nameElement = document.createElement('h2');
        nameElement.textContent = `Name: ${profile.data.name}`;

        const emailElement = document.createElement('p');
        emailElement.textContent = `Email: ${profile.data.email}`;

        if (profile.avatar) {
            const avatarElement = document.createElement('img');
            avatarElement.src = profile.avatar;
            avatarElement.alt = `${profile.name}'s Avatar`;
            avatarElement.width = 100;
            profileContainer.appendChild(avatarElement);
        }

        profileContainer.appendChild(nameElement);
        profileContainer.appendChild(emailElement);

    } catch (error) {
        console.error('Error fetching profile:', error);
        profileContainer.innerHTML = '<p>Error loading profile. Please try again later.</p>';
    }
}

renderProfile();
