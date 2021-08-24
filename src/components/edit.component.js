import React, {Component} from 'react';
import axios from  'axios';
export default class Edit extends Component
{
        constructor(props)
        {
            super(props);
            this.onChangePersonName=this.onChangePersonName.bind(this);
            this.onChangeBusinessName=this.onChangeBusinessName.bind(this);
            this.onChanageNICNumber=this.onChanageNICNumber.bind(this);
 
            this.state=
            {
                person_name: '',
                business_name: '',
                business_nic_number:''
            }
        }

            //methods need to render with axios

            componentDidMount()
            {
                axios.get('http://localhost:4000/business/edit'+this.props.match.params.id)
                .then(res=>
                    {
                        this.setState({
                            person_name: res.data.person_name,
                            business_name:res.data.business_name,
                            business_nic_number:res.data.business_nic_number
                        });
                    })
                   .catch(function (error){
                       console.log(error);
                   })

            }

            onChangePersonName(e)
            {
                this.setState (           
                {
                    person_name: e.target.value
                });
            }

            onChangeBusinessName(e)
            {
                this.setState (           
                {
                    business_name: e.target.value
                });
            }

            onChanageNICNumber(e)
            {
                this.setState (           
                {
                    business_nic_number: e.target.value
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
                axios.post('http://localhost:400/business/update'+this.props.match.params.id, obj)
            .then(res=>console.log(res.data));

            this.props.history.push('/index');
            
            }

            
        

    }
 