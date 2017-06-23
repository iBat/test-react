import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import Modal from 'react-modal';
import 'react-table/react-table.css';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import List from 'react-md/lib/Lists/List';
import TextField from 'react-md/lib/TextFields';

import { fetchUsers, addEmployee } from '../store/items/actions';

class ListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };
        this.props.dispatch(fetchUsers());
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    handleNewEmployee() {
        this.props.dispatch(addEmployee({
            name: { first: this.state.firstName, last: this.state.lastName },
            group: this.state.group
        }));
        this.setState({
            showModal: false
        });
    }

    renderItems() {
        const columns = [
            {
                Header: 'First name',
                accessor: 'name.first',
                filterable: true
            },
            {
                Header: 'Last name',
                accessor: 'name.last',
                filterable: true
            },
            {
                Header: 'Group',
                accessor: 'group'
            }];

        return <ReactTable
            data={this.props.items}
            columns={columns}
        />;
    }

    render() {
        return (
            <div>
                <Card className="card">
                    <CardTitle title="List" subtitle=""/>
                    <button onClick={() => this.handleOpenModal()}>Add Employee</button>
                    <CardText>

                        <List className="list__items">
                            {this.renderItems()}
                        </List>

                    </CardText>
                </Card>

                <Modal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={() => this.handleCloseModal()}
                >
                    <h1>New Employee</h1>
                    <TextField
                        id="firstName"
                        label="First name"
                        onChange={value => this.setState({ firstName: value })}
                    />
                    <TextField
                        id="lastName"
                        label="Last name"
                        onChange={value => this.setState({ lastName: value })}
                    />
                    <TextField
                        id="group"
                        label="Group"
                        onChange={value => this.setState({ group: value })}
                    />
                    <button onClick={() => this.handleNewEmployee()}>Add</button>
                    <button onClick={() => this.handleCloseModal()}>Cancel</button>
                </Modal>
            </div>
        );
    }
}

ListPage.propTypes = {
    dispatch: PropTypes.func,
    items: PropTypes.array,
};

function mapStateToProps(state) {
    return {
        items: state.items.list,
    };
}

export default withRouter(connect(mapStateToProps)(ListPage));
