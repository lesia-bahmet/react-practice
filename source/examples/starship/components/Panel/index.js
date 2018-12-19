// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchStarshipsAsync} from './../../bus/feed/actions';
import { FormattedMessage } from 'react-intl';

// Instruments
import Styles from './styles.m.css';

//Components
import { StarshipTile } from './../../components';

const mapState = state => ({
    feed: state.feed,
    isFetching: state.fetching,
});

const mapProps = {
    fetchStarshipsAsync,
};

@connect(mapState, mapProps)
export class Panel extends Component {
    static defaultProps = {
        isFetching: false,
    };

    fetchStarships = () => {
        this.props.fetchStarshipsAsync();
    };

    render() {
        const { isFetching, starships } = this.props.feed;

        return (
            <section className = { Styles.panel }>
                <h1>🖥</h1>
                <button onClick={this.fetchStarships} disabled = { isFetching }>
                    {isFetching ? '⏳ ' : '📲 '}
                    {isFetching
                        ? <FormattedMessage id="panel.calling"/>
                        : <FormattedMessage id="panel.call"/>}
                </button>
                <ul>
                    {starships.map((starship) =>
                        <StarshipTile
                            key={starship.name}
                            starship={starship}
                        />
                    )}
                </ul>
            </section>
        );
    }
}
