/**
 * Retrieves the post ID from the URL query parameters.
 *
 * This helper function is used to obtain the post ID needed for updating.
 * It is defined here as well in case it's not imported from elsewhere.
 *
 * @function getPostIDFromURL
 * @returns {string|null} The post ID if found; otherwise, null.
 */

export function getPostIDFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('postID');
}
