// Core
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

// Instruments
import Styles from './styles.m.css';
import { FormattedMessage } from 'react-intl';
import {book} from './../../routes/book';

const mapState = state => ({
    starship: state.starship,
});

@withRouter
@connect(mapState)
export class Starship extends Component {

    componentDidMount() {
        const {starship, history} = this.props;

        if(!starship) {
            history.push(book.panel);
        }
    }

    render() {
        const { starship } = this.props;

        if( !starship ) return null;
        return (
            <section
                className = { Styles.starship }
                onClick = { this._navigateToStarship }>
                <h1>🛸</h1>
                <div className = { Styles.description }>
                    <div>
                        <span>
                            <FormattedMessage id="tile.name"/>
                        </span>
                        <span>&nbsp;{starship.name}</span>
                    </div>
                    <div>
                        <span>
                            <FormattedMessage id="tile.class"/>
                        </span>
                        <span>&nbsp;{starship.starship_class}</span>
                    </div>
                    <div>
                        <span>
                            <FormattedMessage id="tile.manufacturer"/>
                        </span>
                        <span>&nbsp;{starship.manufacturer}</span>
                    </div>
                    <div>
                        <span>
                            <FormattedMessage id="tile.crew"/>
                        </span>
                        <span>&nbsp;{starship.crew}</span>
                    </div>
                </div>
            </section>
        );
    }
}
