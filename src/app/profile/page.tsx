'use client';
import { useEffect, useState } from "react";

function HomePage() {
  const [userInfo, setUserInfo] = useState<{ email?: string; name?: string; picture?: string } | null>(null);

  useEffect(() => {
    // Ensure this is only executed on the client side
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');

      if (token) {
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
      }
    }
  }, []);

  return (
    <div>
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
  );
}

export default HomePage;
