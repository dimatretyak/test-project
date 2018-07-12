import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MEASURE_LOCALSTORAGE_KEY, MEASURE_UNIT_ITEMS } from '../../constants/ui';
import { calculations } from '../../core/ui/calculations';
import { Header } from '../../components/Header/Header';
import { CompareWithItem } from '../../components/ComparePanel/CompareWithItem';
import { UnitSelector } from '../../components/UnitSelector/UnitSelector';
import { switchUnit } from './actions';
import './comparePanel.css';

export class ComparePanel extends Component {
    constructor(props) {
        super(props);
        this.state = { domReady: false };
    }

    componentDidMount() {
        this.setState({ domReady: true });
    }

    showCurrentMode(mode, product, item, unit) {

        const
            width = this.comparePanelBody.offsetWidth,
            height = this.comparePanelBody.offsetHeight;
        return (
            <CompareWithItem 
                key={item.id} 
                product={product} 
                item={item} 
                calculations={ calculations(width, height) } 
                bodySize = {{width, height}}
                unit={unit}
            />)
    }

    handleClick = unit => e => {
        localStorage.setItem(MEASURE_LOCALSTORAGE_KEY, unit);
        this.props.switchUnit(unit);
    }

    showMeasureUnitSelector(unit) {
        return (
            <UnitSelector
                handleClick={ this.handleClick.bind(this) }
                activeItem={ this.props.unit }
                items={ MEASURE_UNIT_ITEMS }
            />
        );
    }

    render() {
        return (
            <div className="compare-panel">
                <Header mode={this.props.currentMode} productName={this.props.product.name} currentItems={this.props.currentItems} />
                <div className="compare-panel__body" ref={(body) => this.comparePanelBody = body}>
                    {
                        this.state.domReady &&
                        this.showCurrentMode(this.props.currentMode, this.props.product, this.props.currentItems[0], this.props.unit)
                    }

                    {
                        this.state.domReady &&
                        this.showMeasureUnitSelector(this.props.unit)
                    }
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        currentMode: state.ControlPanel.currentMode,
        currentItems: state.ControlPanel.currentItems,
        product: state.ComparePanel.product,
        unit: state.ComparePanel.unit
    };
};

let mapDispatchToProps = (dispatch) => bindActionCreators({ switchUnit }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ComparePanel);