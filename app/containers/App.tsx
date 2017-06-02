import * as React from 'react';

export interface IAppProps {
    message: string;
}

export class AppState {
    public readonly counter: number;

    constructor(count: number) {
        this.counter = count;
    }
}

export default class App extends React.Component<IAppProps, AppState> {
    public props: IAppProps;
    public state: AppState;

    constructor(props) {
        super(props);
        this.props = props;
        this.state = new AppState(0);
    }

    public render() {
        return (
            <div>
                <span>
                    Amount: {this.state.counter}
                </span>
                <button onClick={() => this.setState(new AppState(this.state.counter + 2)) }>
                    Add two
                </button>
            </div>
        );
    }
}
