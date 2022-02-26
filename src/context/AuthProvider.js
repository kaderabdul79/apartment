import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
// create context
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const allcontext=  useFirebase()
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;