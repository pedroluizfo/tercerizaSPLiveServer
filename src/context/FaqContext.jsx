import { createContext, useContext, useState } from 'react';

const FaqContext = createContext();

export const FaqProvider = ({ children }) => {
  const [faqData, setFaqData] = useState(false);

  return (
    <FaqContext.Provider value={{ faqData, setFaqData }}>
      {children}
    </FaqContext.Provider>
  );
};

export const useFaqData = () => {
  const { faqData, setFaqData } = useContext(FaqContext);

  return { faqData, setFaqData };
};
