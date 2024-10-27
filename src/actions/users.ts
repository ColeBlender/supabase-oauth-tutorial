"use server";

import { getSupabaseAuth } from "../lib/auth";
import { Provider } from "@supabase/supabase-js";

export const loginGoogleAction = async (provider: Provider) => {
  try {
    const { data, error } = await getSupabaseAuth().signInWithOAuth({
      provider,
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth`,
      },
    });

    if (error) throw error;

    return { errorMessage: null, url: data.url };
  } catch (error) {
    return { errorMessage: "Error logging in" };
  }
};

export const signOutAction = async () => {
  try {
    const { error } = await getSupabaseAuth().signOut();
    if (error) throw error;

    return { errorMessage: null };
  } catch (error) {
    return { errorMessage: "Error signing out" };
  }
};

export const loginEmailAction = async (formData: FormData) => {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { data, error } = await getSupabaseAuth().signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return { errorMessage: null };
  } catch (error) {
    return { errorMessage: "Error logging in" };
  }
};

// export async function signIn(formData: FormData) {
//   const supabase = createClient();

//   const email = formData.get("email") as string;
//   const password = formData.get("password") as string;

//   const { data, error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   if (error) {
//     console.log(error);
//   } else {
//     return redirect("/");
//   }
// }

/**
 * Signs up a new user with first name, last name, email, and password.
 * Redirects to the home page on success or to the error page with a message on failure.
 */
// export async function signup(formData: FormData) {
//   const supabase = createClient();

//   const firstName = formData.get("first-name") as string;
//   const lastName = formData.get("last-name") as string;
//   const email = formData.get("email") as string;
//   const password = formData.get("password") as string;

//   const { data, error } = await supabase.auth.signUp({
//     email,
//     password,
//     options: {
//       data: {
//         full_name: `${firstName} ${lastName}`,
//         email,
//       },
//     },
//   });

//   if (error) {
//     const errorMessage = getErrorMessage(
//       error,
//       "Failed to sign up. Please ensure all fields are correct and try again.",
//     );
//     redirect(`/error?message=${encodeURIComponent(errorMessage)}`);
//   }

//   // Optionally, you can handle email confirmation or direct login here

//   revalidatePath("/"); // Revalidate the home path if necessary
//   redirect("/"); // Redirect to the home page on successful signup
// }
