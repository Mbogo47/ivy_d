// // languageContext.js
// import { createContext, useContext, useState } from "react";

// const LanguageContext = createContext();

// export const useLanguage = () => {
//   return useContext(LanguageContext);
// };

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState("en"); // Default language is 'en'

//   const switchLanguage = (newLanguage) => {
//     setLanguage(newLanguage);
//   };

//   return (
//     <LanguageContext.Provider value={{ language, switchLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export default LanguageContext;
