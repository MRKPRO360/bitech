'use client';

import { AppStore, makeStore } from '@/redux/store';
import React, { useEffect, useRef, useState } from 'react';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>(undefined);
  const [persistor, setPersistor] = useState<any>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  useEffect(() => {
    const _persistor = persistStore(storeRef.current!);
    setPersistor(_persistor);
  }, []);

  if (!persistor) {
    // could return a loader here
    return null;
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}

export default StoreProvider;
