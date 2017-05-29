import React, { Component } from 'react';

import Badge from 'react-bootstrap/lib/Badge'
import Tooltip from 'react-bootstrap/lib/Tooltip'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'

export default class BadgeWithTooltip extends Component {

    static propTypes = {
        name: React.PropTypes.string,
        tooltip: React.PropTypes.string.isRequired,
        children: React.PropTypes.array,
    };

    shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
        return false;
    }

    render() {
        const {name, tooltip} = this.props;
        const tooltipComponent = <Tooltip id="tooltip">
                                   { tooltip }
                                 </Tooltip>;

        return (
            <OverlayTrigger placement="top" overlay={ tooltipComponent }>
              <Badge bsStyle="default">
                { name }
                { this.props.children }
              </Badge>
            </OverlayTrigger>
        );
    }
}
