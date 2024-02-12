import "../App.css";
import { Component } from "react";

class Toolbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { filters, selected, onSelectFilter } = this.props;

        return (
            <ul className="toolbar">
                {filters.map((filter, index) =>
                    <li key={index}
                        className="toolbar-item">
                        <button className={`button${selected === filter ? " button--active" : ""}`} type="button" onClick={() => onSelectFilter(filter)}>{filter}</button>
                    </li>
                )}
            </ul>
        )
    }
}

export default Toolbar;