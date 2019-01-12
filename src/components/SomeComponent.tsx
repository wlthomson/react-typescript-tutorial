import * as React from 'react';
import { AppContextConsumer } from '../context/AppContext';

interface ISomeComponentProps {
  someProp: string;
}

interface ISomeComponentState {
  someState: string;
}

class SomeComponent extends React.Component<
  ISomeComponentProps,
  ISomeComponentState
> {
  constructor(props: ISomeComponentProps) {
    super(props);
    this.state = { someState: 'someStateValue' };
  }

  render() {
    return (
      <AppContextConsumer>
        {appContext =>
          appContext && (
            <div>
              <h1>App has props: {JSON.stringify(this.props)}.</h1>
              <h1>App has state: {JSON.stringify(this.state)}.</h1>
              <h1>App has context: {JSON.stringify(appContext)}</h1>
            </div>
          )
        }
      </AppContextConsumer>
    );
  }
}

export default SomeComponent;
