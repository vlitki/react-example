import React, { useState } from "react";

export const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

const translations = {
  "en.currentLocale": "Current locale",
  "hr.currentLocale": "Trenutni jezik",
  "en.View Repository": "View Repository",
  "hr.View Repository": "Vidi Repozitorij",
};

export function AppProvider(props) {
  const [state, setState] = useState(props.value);
  const [locale, setLocale] = useState("en");

  const value = {
    locale: locale,
    state: state,
    setState: setState,
    setId: (id) => setState((state) => ({ ...state, id: id })),
    setLocale: (locale) => setLocale(locale),
    translate: (key) => {
      const translationKey = `${locale}.${key}`;
      const translationValue = translations[translationKey];

      if (translationValue === undefined) {
        return translationKey;
      } else {
        return translationValue;
      }
    },
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
}