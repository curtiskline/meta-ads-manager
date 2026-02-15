import { createClient } from "@supabase/supabase-js";

function getAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY for E2E tests"
    );
  }

  return createClient(url, serviceRoleKey);
}

export async function createTestUser(
  email = "e2e-test@example.com",
  password = "test-password-123"
) {
  const supabase = getAdminClient();

  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error) {
    throw new Error(`Failed to create test user: ${error.message}`);
  }

  return data.user;
}

export async function deleteTestUser(email = "e2e-test@example.com") {
  const supabase = getAdminClient();

  const { data } = await supabase.auth.admin.listUsers();
  const user = data.users.find((u) => u.email === email);

  if (user) {
    const { error } = await supabase.auth.admin.deleteUser(user.id);
    if (error) {
      throw new Error(`Failed to delete test user: ${error.message}`);
    }
  }
}

export async function signInTestUser(
  email = "e2e-test@example.com",
  password = "test-password-123"
) {
  const supabase = getAdminClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(`Failed to sign in test user: ${error.message}`);
  }

  return data.session;
}
