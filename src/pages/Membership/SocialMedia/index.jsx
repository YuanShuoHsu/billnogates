import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../../../utils/firebase";

import google from "../../../images/membership/Google.svg";
import facebook from "../../../images/membership/Facebook.svg";

import SocialMediaButton from "./SocialMediaButton";

import styles from "./index.module.scss";

export default function SocialMedia({ text }) {
  const navigate = useNavigate();

  const [googleError, setGoogleError] = useState("");
  const [facebookError, setFacebookError] = useState("");
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isFacebookLoading, setIsFacebookLoading] = useState(false);

  const handleSignIn = (event, socialMedia) => {
    event.preventDefault();

    switch (socialMedia) {
      case "google":
        setIsGoogleLoading(true);
        signInWithGoogle();
        break;
      case "facebook":
        setIsFacebookLoading(true);
        signInWithFacebook();
        break;
      default:
        break;
    }
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        // console.log(result, token, user)
        setIsGoogleLoading(false);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // console.log(error, errorCode, errorMessage, email, credential)
        setIsGoogleLoading(false);
        switch (errorCode) {
          case "auth/account-exists-with-different-credential":
            setGoogleError("帳戶存在不同的憑證");
            break;
          case "auth/auth-domain-config-required":
            setGoogleError("需要驗證域配置");
            break;
          case "auth/credential-already-in-use":
            setGoogleError("憑證已被使用");
            break;
          case "auth/email-already-in-use":
            setGoogleError("電子郵件已被使用");
            break;
          case "auth/operation-not-allowed":
            setGoogleError("不允許操作");
            break;
          case "auth/operation-not-supported-in-this-environment":
            setGoogleError("此環境不支持操作");
            break;
          case "auth/timeout":
            setGoogleError("操作超時");
            break;
          default:
            setGoogleError(errorCode);
            break;
        }
      });
  };

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        // const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // const credential = FacebookAuthProvider.credentialFromResult(result);
        // const accessToken = credential.accessToken;
        // console.log(result, user, accessToken)
        setIsFacebookLoading(false);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = FacebookAuthProvider.credentialFromError(error);
        // console.log(error, errorCode, errorMessage, email, credential)

        setIsFacebookLoading(false);
        switch (errorCode) {
          case "auth/account-exists-with-different-credential":
            setFacebookError("帳戶存在不同的憑證");
            break;
          case "auth/auth-domain-config-required":
            setFacebookError("需要驗證域配置");
            break;
          case "auth/credential-already-in-use":
            setFacebookError("憑證已被使用");
            break;
          case "auth/email-already-in-use":
            setFacebookError("電子郵件已被使用");
            break;
          case "auth/operation-not-allowed":
            setFacebookError("不允許操作");
            break;
          case "auth/operation-not-supported-in-this-environment":
            setFacebookError("此環境不支持操作");
            break;
          case "auth/timeout":
            setFacebookError("操作超時");
            break;
          default:
            setFacebookError(errorCode);
            break;
        }
      });
  };

  return (
    <div className={styles.socialMedia}>
      <div className={styles.buttonBox}>
        <SocialMediaButton
          provider="google"
          text={text}
          isLoading={isGoogleLoading}
          onClick={handleSignIn}
          imageSrc={google}
        />
      </div>
      {googleError && <p className={styles.alert}>{googleError}</p>}
      <div className={styles.buttonBox}>
        <SocialMediaButton
          provider="facebook"
          text={text}
          isLoading={isFacebookLoading}
          onClick={handleSignIn}
          imageSrc={facebook}
        />
      </div>
      {facebookError && <p className={styles.alert}>{facebookError}</p>}
    </div>
  );
}
