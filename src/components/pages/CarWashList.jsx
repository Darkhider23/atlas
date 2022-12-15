import React, { Component } from 'react';

class CarWashList extends Component {

    constructor(props){
        super(props)

        this.state = {
            carwashers: []
        }
    }

    render() {
        return (
            <div>
                
                <h2 className='text-center'>CarWash List</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>Attr1</th>
                                <th>Attr2</th>
                                <th>Attr3</th>
                                <th>Attr4</th>
                                
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                this.state.carwashers.map(
                                    carwash =>
                                    <tr key={carwash.id}>
                                        <td>{carwash.Attr1}</td>
                                        <td>{carwash.Attr2}</td>
                                        <td>{carwash.Attr3}</td>
                                        <td>{carwash.Attr4}</td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>

            </div>
        );
    }
}

export default CarWashList;