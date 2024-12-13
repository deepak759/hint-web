"use client";

import React, { useEffect, useState } from "react";
import "@/styles/global.scss";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUserInfo } from "@/redux/userSlice";
import Image from "next/image";
import GoogleIcon from "@/assets/images/google.svg";
import fbIcon from "@/assets/images/fb.svg";
import Link from "next/link";
import Back from "@/assets/images/back-Arrow.svg"
const GOOGLE_CLIENT_ID =
  "122449642269-lokroftv46bufp3ib92baaqpf7gp8ljf.apps.googleusercontent.com";
const GOOGLE_REDIRECT_URI = "http://localhost:3000/auth";
const FACEBOOK_APP_ID = "1984491305402668"; // Replace with your Facebook App ID


const FacebookSDKLoader = () => {
  useEffect(() => {
    if (!window.FB) {
      const script = document.createElement("script");
      script.src = "https://connect.facebook.net/en_US/sdk.js";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.onload = () => {
        window.FB.init({
          appId: FACEBOOK_APP_ID,
          cookie: true,
          xfbml: true,
          version: "v12.0",
        });
      };
      document.body.appendChild(script);
    }
  }, []);
  return null;
};


declare global {
  interface Window {
    FB: any;
  }
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsClient(true);
    if (isClient) {
      const token = new URLSearchParams(window.location.hash.substring(1)).get(
        "access_token"
      );
      if (token) {
        fetch("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((response) => response.json())
          .then((data) => {
            dispatch(
              setUserInfo({
                email: data.email,
                name: data.name,
                picture: data.picture,
                accessToken:data.accessToken
              })
            );
            router.push("/");
          })
          .catch((error) => console.error("Error fetching user data:", error));
      } else {
        console.error("Token not found in URL");
      }
    }
  }, [isClient, router, dispatch]);

  const handleGoogleLogin = () => {
    const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=token&scope=email%20profile&include_granted_scopes=true`;
    window.location.href = oauthUrl;
  };

  const handleFacebookLogin = () => {
    if (window.FB) {
      window.FB.login(
        (response: any) => {
          if (response.authResponse) {
            window.FB.api(
              "/me",
              { fields: "id,name,email,picture" },
              (data: any) => {
                dispatch(
                  setUserInfo({
                    email: data.email,
                    name: data.name,
                    picture: data.picture,
                    accessToken:data.accessToken
                  })
                );
                router.push("/");
              }
            );
          } else {
            console.error("Facebook login failed:", response);
          }
        },
        { scope: "email" }
      );
    } else {
      console.error("Facebook SDK is not initialized");
    }
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoginMode && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await fetch("https://hint-server-prod.onrender.com/api/v1/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailId: email, password }),
      });

      const res = await response.json();
      if (response.ok) {
        setAccessToken(res.data.accessToken);
        setIsOtpSent(true);
        alert("OTP sent to your email.");
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP. Please try again.");
    }
  };
  const handleVerifyOtp = async () => {
    try {
      const response = await fetch(
        `https://hint-server-prod.onrender.com/api/v1/verifyOtp/${otp}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const res = await response.json();
      if (response.ok) {
        alert("OTP verified successfully!");
        dispatch(setUserInfo({ email:email,name: "",
          picture: "",accessToken:accessToken }));
        router.push("/");
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Failed to verify OTP. Please try again.");
    }
  };
  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
  

    try {
    
      const response = await fetch(`https://hint-server-prod.onrender.com/api/v1/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailId: email, password }),
      });

      const res = await response.json();
      if (response.ok) {
        console.log(res);
        if (isLoginMode) {
          dispatch(
            setUserInfo({
              email: res.data.user.emailId,
              name: res.data.user.name,
              picture: res.data.user.picture,
              accessToken: res.data.accessToken
            })
          );
          router.push("/");
        } else {
         console.log()
        }
        router.push("/");
      } else {
       
        alert(
          res.message
        );
      }
    } catch (error) {
      console.error(
        `Error ${isLoginMode ? "logging in" : "registering"} user:`,
        error
      );
      alert("An error occurred, please try again.");
    }
  };

  return (
    <div className="login-form-section">
      <FacebookSDKLoader />
      <Link
    href="/"
    className="navbar-brand"
    style={{
      position: "absolute",
      top: "10px",
      left: "10px",
      zIndex: 10,
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    }}
  >
    <Image
      src={Back}
      alt="hint-logo"
      style={{
        width: "70px", 
        height: "70px",
      }}
    />
  </Link>

        <div className="login-content">
          <h2 className="header">
            {isLoginMode ? "Log In" : "Sign Up"} To Hint
          </h2>
          <form >
              <input
                type="email"
                className="form-control"
                placeholder="Enter your Email Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* <input
                type="tel"
                className="form-control"
                placeholder="Mobile no."
                required
              /> */}
          {!isLoginMode && (
  <input
    type="password"
    className="form-control"
    placeholder="Confirm Password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    required
  />
)}
{isLoginMode ? (
  <button onClick={handleSubmitForm} className="submit-btn">
    Log In
  </button>
) : (
  !isOtpSent ? (
    <button
      type="button"
      className="submit-btn"
      onClick={handleSendOtp}
    >
      Get OTP
    </button>
  ) : (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        required
      />
      <button
        type="button"
        className="submit-btn"
        onClick={handleVerifyOtp}
      >
        Verify OTP
      </button>
    </>
  )
)}

            
           
          </form>
          <div className="account-section">
            {isLoginMode
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <a
              onClick={() => setIsLoginMode(!isLoginMode)}
              className="text"
              style={{ cursor: "pointer" }}
            >
              {isLoginMode ? "Sign Up" : "Sign In"}
            </a>
          </div>
          <div className="account-sections">
            By continuing, you agree to receive service call & 
            notification on your mobile number etc.
          </div>
          <div className="continue-section">
            <span>or continue with</span>
          </div>
          <div className="social-section mt-4">
            <button
              onClick={handleGoogleLogin}
              className="btn"
            >
              <Image src={GoogleIcon} alt="Google Logo" />
            </button>
            <button
              onClick={handleFacebookLogin}
              className="btn"
            >
              <Image src={fbIcon} alt="Facebook Logo" className="me-2" />
            </button>
          </div>
        </div>
    </div>
  );
}
