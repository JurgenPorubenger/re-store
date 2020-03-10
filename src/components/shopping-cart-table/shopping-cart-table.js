import React from "react";


const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
    return (
        <div className="shopping-cart-table">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Site Reliabiliti Engineering</td>
                        <td>2</td>
                        <td>$40</td>
                        <td>
                            <button className="btn btn-outline-danger">
                                <i className="fa fa-trash-o" />
                            </button>
                            <button className="btn btn-outline-success">
                                <i className="fa fa-plus-circle" />
                            </button>
                            <button className="btn btn-outline-warning">
                                <i className="fa fa-minus-circle" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="total">
                Total: $201
            </div>
        </div>
    )
}
export default  ShoppingCartTable