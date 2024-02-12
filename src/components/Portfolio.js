import { Component } from "react";
import { useState } from "react";
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";
import "../App.css";

class Portfolio extends Component {
    constructor() {
        super();
        this.filters = ["All", "Websites", "Flayers", "Business Cards"];
        this.state = {
            selected: "All",
        };
        this.onSelectFilter = this.onSelectFilter.bind(this);
        this.projects = [{
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
            category: "Business Cards"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
            category: "Business Cards"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
            category: "Business Cards"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
            category: "Flayers"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
            category: "Business Cards"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
            category: "Business Cards"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
            category: "Flayers"
        }];
    }

    onSelectFilter = (filter) => {
        this.setState({ selected: filter });
    }

    render() {
        return (
            <div className="container" >
                <Toolbar filters={this.filters} selected={this.state.selected} onSelectFilter={this.onSelectFilter} />
                <ProjectList projects={this.projects.filter((project) => this.state.selected === 'All' ? true : project.category === this.state.selected)} />
            </div>
        )
    }
}

export default Portfolio;