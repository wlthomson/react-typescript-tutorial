import * as React from 'react';

import SomeComponent from './SomeComponent';
import { IAppContext, AppContextProvider } from '../context/AppContext';

interface IAppProps {
  someProp: string;
}

interface IAppState {}

const someAppContext: IAppContext = {
  someContextField: 'someContextValue'
};

class App extends React.Component<IAppProps, IAppState> {
  render() {
    return (
      <AppContextProvider value={someAppContext}>
        <SomeComponent someProp={this.props.someProp} />
      </AppContextProvider>
    );
  }
}

export default App;
