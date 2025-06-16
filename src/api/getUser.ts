export const API_URL = "https://api.github.com/users";

export const getUser = async (url: string, userId: string) => {
  try {
    const response = await fetch(`${url}/${userId}`);
    if (!response.ok) {
      throw new Error(`Error fetching user: ${response.statusText}`);
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw error;
  }
};
