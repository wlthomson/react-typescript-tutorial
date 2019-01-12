import * as React from 'react';

interface IAppContext {
  someContextField: string;
}

const context = React.createContext<IAppContext | null>(null);

const AppContextProvider = context.Provider;
const AppContextConsumer = context.Consumer;

export { IAppContext, AppContextProvider, AppContextConsumer };
