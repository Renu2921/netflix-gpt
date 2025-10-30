import React, { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSignInData } from "../utils/store/authSlice";
import { LOGO_URL, PROFILE_URL } from "../utils/constants/urlConst";
import { setShowGptPage } from "../utils/store/gptPageToggleSlice";
import { SUPPORTED_LANG } from "../utils/constants/langConstant";
import { setSelectLang } from "../utils/store/configSlice";
import { Menu, X } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.auth);
  const showGptPage = useSelector((store) => store.gpt.showGptPage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    signOut(auth).catch((error) =>
       console.error(error));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setSignInData({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(setSignInData());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch,navigate]);

  const handleToggle = () => {
    dispatch(setShowGptPage());
    setIsMenuOpen(false);
  };

  const handleLangChange = (e) => {
    dispatch(setSelectLang(e.target.value));
  };

  return (
    <div className="absolute px-4 md:px-8 py-2 z-10 flex justify-between items-center w-full bg-gradient-to-b from-black">
      {/* Logo */}
      <img className="w-[9rem] md:w-44" alt="logo" src={LOGO_URL} />

      {user?.signInData && (
        <>
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4 items-center">
            {showGptPage && (
              <select
                className="bg-gray-900 p-2 text-white rounded"
                onChange={handleLangChange}
              >
                {SUPPORTED_LANG?.map((lang) => (
                  <option key={lang.indetifier} value={lang.indetifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            <button
              onClick={handleToggle}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg"
            >
              {showGptPage ? "Go Home" : "GPT Search"}
            </button>

            <div className="flex items-center gap-2">
              <img
                src={PROFILE_URL}
                alt="profile"
                className="w-8 h-8"
              />
              <p
                className="cursor-pointer text-white"
                onClick={handleLogout}
              >
                Logout
              </p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-16 right-4 bg-black/90 rounded-lg shadow-lg flex flex-col p-4 gap-3 w-48 md:hidden">
              {showGptPage && (
                <select
                  className="bg-gray-900 p-2 text-white rounded"
                  onChange={handleLangChange}
                >
                  {SUPPORTED_LANG?.map((lang) => (
                    <option key={lang.indetifier} value={lang.indetifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}

              <button
                onClick={handleToggle}
                className="bg-purple-600 text-white px-3 py-2 rounded-lg"
              >
                {showGptPage ? "Go Home" : "GPT Search"}
              </button>

              <div className="flex items-center gap-2">
                <img
                  src={PROFILE_URL}
                  alt="profile"
                  className="w-8 h-8"
                />
                <p
                  className="cursor-pointer text-white"
                  onClick={handleLogout}
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Header;
