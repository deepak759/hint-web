"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { clearUserInfo } from "@/redux/userSlice";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  console.log(user.email);
  const handleLogout = async () => {
    try {
      // const response = await fetch(
      //   `https://hint-server-prod.onrender.com/api/v1/logout`,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${user.accessToken}`,
      //     },
      //   }
      // );

      // const res = await response.json();
      // if (response.ok) {
      //   alert("user logout successfully!");

      //   dispatch(clearUserInfo());
      //   router.push("/auth");
      // } else {
      //   alert("some error occured in logout");
      // }
        dispatch(clearUserInfo());
        router.push("/auth");

    } catch (error) {
      alert(error);
    }
  };

  if (!user.email ) {
    return (
      <div>
        <h2>No User Logged In</h2>
        <button onClick={() => router.push("/auth")}>Go to Login</button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <img
        src={user.picture || "/placeholder.png"}
        alt="User Profile"
        style={styles.image}
      />
      <h1 style={styles.text}>Welcome, {user.name}</h1>
      <p style={styles.text}>Email: {user.email}</p>
      
      <button onClick={handleLogout} style={styles.button}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center" as const,
    padding: "20px",
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    margin: "10px 0",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ProfilePage;
