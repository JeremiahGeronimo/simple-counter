'use strict';

import React from 'react';
import SegGroup from './SegGroup'

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        }
    }

    handleArrowUpClick() {
        let {value} = this.state;

        if (value > 8) return false;

        value++;

        this.setState({value});

        return false;
    }

    handleArrowDownClick() {
        let {value} = this.state;

        if (value === 0) return false;

        value--;

        this.setState({value});

        return false;
    }

    render() {
        return (
            <div className="uk-panel uk-panel-box uk-flex uk-flex-middle uk-flex-center">
                <div style={{width:150}}>

                    <div className="uk-flex uk-flex-middle uk-flex-center uk-flex-column uk-height-1-1">
                        <div>
                            <a onClick={this.handleArrowUpClick.bind(this)}>
                                <i className="uk-icon-angle-up"></i>
                            </a>
                        </div>
                        <div className="uk-margin-top">
                            <a onClick={this.handleArrowDownClick.bind(this)}>
                                <i className="uk-icon-angle-down"></i>
                            </a>
                        </div>
                    </div>

                </div>
                <div>
                    <SegGroup value={`${this.state.value}`}
                              digitOptions={{width: 150, height: 300}}/>
                </div>
            </div>
        )
    }
}


export default Counter;
