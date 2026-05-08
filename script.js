const SUPABASE_URL = "https://iicobacgstpbuvedqndo.supabase.co";
const SUPABASE_KEY = "sb_publishable_I0lDtnUBTnwQs_aei2Hg-A_m_KY19tQ";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

const message = document.getElementById("message");

/* =======================
   INSCRIPTION
======================= */

document.getElementById("signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  const { error } = await supabaseClient.auth.signUp({
    email,
    password
  });

  if (error) {
    message.textContent = error.message;
    message.style.color = "red";
  } else {
    message.textContent = "✅ Compte créé avec succès";
    message.style.color = "green";
  }
});

/* =======================
   CONNEXION
======================= */

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    message.textContent = error.message;
    message.style.color = "red";
  } else {
    message.textContent =
      "✅ Connecté ! ID utilisateur : " + data.user.id;
    message.style.color = "green";
  }
});
