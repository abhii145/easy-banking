"use server";

export const signIn = async ({ email, password }: signInProps) => {
  try {
    console.log("userData");
  } catch (error) {
    throw new Error(String(error));
  }
};

export const signUp = async (userData: SignUpParams) => {
  try {
  } catch (error) {
    throw new Error(String(error));
  }
};
