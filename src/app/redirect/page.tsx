'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function RedirectPage() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<{ email?: string; name?: string; picture?: string } | null>(null);
  useEffect(() => {
    // Set isClient to true when the component is mounted on the client-side
    setIsClient(true);

    // Ensure the code only runs on the client-side
    if (isClient) {
      const hash = window.location.hash;
      const token = new URLSearchParams(hash.substring(1)).get("access_token");

      if (token) {
        // Redirect to the profile page with the token as a query parameter
        fetch("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => response.json())
            .then((data) => {
              setUserInfo({
                email: data.email,
                name: data.name,
                picture: data.picture,
              });
            })
            .catch((error) => console.error("Error fetching user data:", error));
        // router.push(`/?token=${token}`);
      } else {
        console.error("Token not found in URL");
      }
    }
  }, [isClient, router]);

  return  <div>
  {userInfo ? (
    <div>
      <h2>Welcome, {userInfo.name}</h2>
      <p>Email: {userInfo.email}</p>
      <img src={userInfo.picture} alt="Profile" />
    </div>
  ) : (
    <p>Loading user information...</p>
  )}
</div>
}

export default RedirectPage;
