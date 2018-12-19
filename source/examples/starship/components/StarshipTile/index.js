// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

// Instruments
import {book} from './../../routes/book';
import Styles from './styles.m.css';
import {createRouteFromName} from './../../helpers'
import {setCurrentStarship} from './../../bus/starship/actions';

const mapDispatch = {
    setCurrentStarship,
};

@withRouter
@connect(null, mapDispatch)
export class StarshipTile extends Component {
    goToStarshipPage = () => {

        const { starship, history, setCurrentStarship} = this.props;

        setCurrentStarship(starship);
        history.push(book.starship.replace(':starship', createRouteFromName(starship.name)));
    };

    render() {
        const { starship } = this.props;
        return (
            <section className = { Styles.starshipTile } onClick={this.goToStarshipPage}>
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
