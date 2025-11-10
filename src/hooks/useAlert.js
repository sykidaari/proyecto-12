import { useEffect, useRef, useState } from 'react';

const useAlert = () => {
  const [alert, setAlert] = useState(false);
  const alertRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => setAlert(false), 1500);

    return () => clearTimeout(timeout);
  }, [alert]);

  return { alert, setAlert, alertRef };
};

export default useAlert;
