import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";

// authGuard();

const form = document.forms.create-post-form;

form.addEventListener("submit", onCreatePost);

