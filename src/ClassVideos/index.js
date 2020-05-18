
import React from 'react';
import ReactDOM from 'react-dom';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import classes from './classStyle.css';
export default class ClassVideos extends React.PureComponent {
    state = {
        class_number: [{ value: '5' }, { value: '6' }, { value: '7' }, { value: '8' }, { value: '9' }],
        currentTab: 0
    }
    _handleChange = (e, tab) => {
        this.setState({
            currentTab: tab,
        });
    }
    tabsRoot = {}
    tabIndicator = { background: 'blue', color: 'yellow' }
    tabRoot = {}
    tabWrapperLeft = {}
    tabWrapperSelected = { color: 'blue' }
    render = () => {
        return (
            <div style={{ margin: '0px 200px 0px 180px', border: '1px solid #847f7fa3', borderRadius: '10px', paddingLeft: '10px', paddingBottom: '8px' }}>
                <Tabs
                    style={{ borderRadius: '5px', height: '2px !important', backgroundColor: 'white', minHeight: '0px', minWidth: '0px' }}
                    value={this.state.currentTab} onChange={this._handleChange} >
                    {this.state.class_number && this.state.class_number.map((entry, index) => {
                        return <Tab label={entry.value}
                            style={{
                                padding: '10px 50px 10px 50px', minHeight: '0px', minWidth: '0px', color: '#847f7fa3', fontSize: '25px',
                                fontWeight: '600'
                            }}
                            disableFocusRipple disableRipple disableTouchRipple />;
                    })
                    }
                </Tabs>
            </div>
        )
    }
}