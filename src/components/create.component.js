import React, {Component} from 'react';
import axios from 'axios';



export default class Create extends Component{

    constructor(props)
    {
        super(props);
        
        this.onChangePersonName= this.onChangePersonName.bind(this);
        this.onChangeBusinessName=this.onChangeBusinessName.bind(this);
        this.onChangeNICNumber= this.onChangeNICNumber.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            person_name:' ',
            business_name:' ',
            business_nic_number:' '

        }
    }

    onChangePersonName(e)
    {
        this.setState({
            person_name: e.target.value
        });
    }

    onChangeBusinessName(e)
    {
        this.setState({
            business_name:e.target.value
        });
    }

    onChangeNICNumber(e)
    {
        this.setState({
            business_nic_number:e.target.value
        });
    }

    onSubmit(e)
    {
       e.preventDefault();
       const obj={
           person_name: this.state.person_name,
           business_name: this.state.business_name,
           business_nic_number: this.state.business_nic_number
       };

       axios.post('http://localhost:4000/business/add', obj)
       .then(res=> console.log.apply(res.data));

       this.setState
       (
           {
               person_name:'',
               business_name:'',
               business_nic_number: ''
           }
       )


    }



    render()
    {
        return(
            <div style={{marginTop: 10}}>
                <h3>Add New Business</h3><br/>

                <form onSubmit={ this.onSubmit}>

                    <div className="form-group">
                        <label>Add Person Name :</label>
                    <input type="text" 
                    className="form-control" 
                    value={this.state.person_name} 
                    onChange={this.onChangePersonName}
                    />
                    </div><br/>

                    <div className="form-group">
                        <label>Add Busines Name :</label>
                    <input type="text" 
                    className="form-control" 
                    value={this.state.business_name} 
                    onChange={this.onChangeBusinessName}
                    />
                    </div><br/>

                    <div className="form-group">
                        <label>Add NIC Number :</label>
                    <input type="text" 
                    className="form-control" 
                    value={this.state.business_nic_number} 
                    onChange={this.onChangeNICNumber}
                    />
                    </div>
                    <br/>

                    <div className="form-group">
                        <input type="submit" 
                        value="Register Business" 
                        className="btn btn-primary"
                        />
                    </div>

                </form>
            </div>
        )
       
    }
}