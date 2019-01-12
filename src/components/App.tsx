import * as React from 'react';

interface IAppProps {
  someProp: string;
}

interface IAppState {
  someState: string;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = { someState: 'someOtherValue' };
  }

  render() {
    return (
      <div>
        <h1>App has props: {JSON.stringify(this.props)}.</h1>
        <h1>App has state: {JSON.stringify(this.state)}.</h1>
      </div>
    );
  }
}

export default App;
