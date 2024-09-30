import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

/**
 * Deletes a post by sending a DELETE request to the social API.
 * 
 * This function sends a DELETE request to the API to remove the specified post.
 * If the request is successful, it alerts the user and redirects to the homepage.
 * If the request fails, it logs the error and displays an error message.
 * 
 * @async
 * @param {number} postId - The ID of the post to be deleted.
 * 
 * @returns {Promise<void>} A promise that resolves if the post is deleted successfully.
 * Displays a success message and redirects the user to the homepage.
 * If an error occurs, it logs the error and displays an error message.
 * 
 * @throws Will throw an error if the network request fails or the server response is not ok.
 */
export async function deletePost(postId) {
    const myHeaders = await headers();

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
    };

    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/${postId}`, requestOptions);

        if (response.ok) {
            alert("Post deleted successfully");
            window.location.assign("/");
        } else {
            console.error(result);
            alert("Post could not be deleted: " + result.message);
        }
    } catch (error) {
        console.error("Error while deleting post:", error);
        alert("Failed to delete the post. Please try again later.");
    }
}

