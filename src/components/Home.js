import React from 'react';
import {Cards} from "./Cards";
import Menu from "./Menu.js";
import FilterListIcon from '@material-ui/icons/FilterList';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Redirect } from "react-router-dom";
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import axios from 'axios';
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], menu: '', Add:false,  modalOpen:false, filterDueDate:"",filterResponsible:"",filterStatus:""};
    this.handleMenuChange = this.handleMenuChange.bind(this);    
    this.handleModal = this.handleModal.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClearAll= this.handleClearAll.bind(this);
    this.handleFilterDueDate= this.handleFilterDueDate.bind(this);
    this.handleFilterResponsible= this.handleFilterResponsible.bind(this);
    this.handleFilterStatus= this.handleFilterStatus.bind(this);    
    const self=this;
    axios.get(`http://localhost:8080/Task/User/`+localStorage.getItem("email"))
          .then(datos => {
            let tasksList = [];
            
            datos.data.forEach(function (task) {
                tasksList.push({
                  task                   
                })
            });
            
            self.setState({items: tasksList}); 
            console.log(self.state.items)
          })  
  }   
  componentDidMount() {
      
  }
  handleClearAll(e) {    
    this.setState({ filterDueDate: ""}); 
    this.setState({ filterResponsible: "" }); 
    this.setState({ filterStatus: "" }); 

  }  
  handleFilterDueDate(e) {    
    this.setState({ filterDueDate: e.target.value }); 
  }  
  handleFilterResponsible(e) {    
    this.setState({ filterResponsible: e.target.value }); 
  }  
  handleFilterStatus(e) {    
    this.setState({ filterStatus: e.target.value }); 
  }  
  handleModal(e) {    
    if (this.state.modalOpen) {
      this.setState({ modalOpen: false });
    } else {
      this.setState({ modalOpen: true });
    } 
  }  
  handleMenuChange(e) {
    if (this.state.menu) {
      this.setState({ menu: false });
    } else {
      this.setState({ menu: true });
    }
  }  
  handleAdd(e) {    
    this.setState({ Add: true });   
  }  
 
  render() { 
    const divStyle = {      
        padding:0,
        marginTop:"100px"       
    };  
    const fistyle = {         
      position: "absolute",
      top: "40px",
      right:"30px"  
    }; 
    
    const Buttonstyle = {         
        position: "fixed",
        bottom: "30px",
        right:"30px"  
    };     
    const listItems = this.state.items.map( (Obj,i) =>     
    (this.state.filterDueDate==="" && this.state.filterStatus==="" && this.state.filterResponsible==="")
    ||(Obj.status===this.state.filterStatus && Obj.dueDate===this.state.filterDueDate && Obj.responsible.name===this.state.filterResponsible)
    ||(Obj.status===this.state.filterStatus && Obj.dueDate===this.state.filterDueDate && this.state.filterResponsible==="")
    ||(Obj.status===this.state.filterStatus && Obj.responsible.name===this.state.filterResponsible && this.state.filterDueDate==="")
    ||(Obj.responsible.name===this.state.filterResponsible && Obj.dueDate===this.state.filterDueDate && this.state.filterStatus==="")
    ||(Obj.responsible.name===this.state.filterResponsible && Obj.status===this.state.filterStatus && this.state.filterDueDate==="")
    ||(Obj.dueDate===this.state.filterDueDate && Obj.responsible.name=== this.state.filterResponsible && this.state.filterStatus==="")
    ||(Obj.dueDate===this.state.filterDueDate &&  Obj.status=== this.state.filterStatus && this.state.filterResponsible==="")    
    ||(Obj.status===this.state.filterStatus && this.state.filterDueDate==="" &&  this.state.filterResponsible==="")
    ||(Obj.dueDate===this.state.filterDueDate &&this.state.filterResponsible==="" && this.state.filterStatus==="")
    ||(Obj.responsible.name===this.state.filterResponsible && this.state.filterDueDate==="" &&   this.state.filterStatus==="")
    ? 
    <Cards key={"item"+i} title={Obj.task.title} description={Obj.task.description} responsible={Obj.task.responsible} status={Obj.task.status} dueDate={Obj.task.dueDate}/>:null
    );  

    const responsibles= [];

    const listnames = this.state.items.map( (Obj,i) => 
    responsibles.indexOf(Obj.task.responsible)>=0?null:responsibles.push( { name: Obj.taskresponsible }));  
    if(this.state.Add===true){             
        return <Redirect to={{
            pathname: '/todo',
        }}
        />
    }
    
    const modalStyle = {
      position: 'absolute',
      width: 400,
      backgroundColor: "white",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      top: '50vh',
      left: '50vw',
      transform: 'translate(-50%, -50%)'
    };
    const fieldStyle = {      
      minWidth: 250,   
      marginBottom:"30px"
    };
    const buttonStyle = {         
      marginBottom:"30px",
      Width: "50px",
    };
    const estados = [
      { status: "Completed" }, { status: "In Progess" }, { status: "Ready" }
    ] ;
    return (
        <div>
            <Menu />
            <FilterListIcon style={fistyle} onClick={this.handleModal}></FilterListIcon>
            <ul style={divStyle}>{listItems}</ul>            
            <Fab color="secondary" aria-label="add" style={Buttonstyle} onClick={this.handleAdd} >
            <AddIcon/></Fab>   
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.modalOpen}
              onClose={this.handleModal}
            >
              <div style={modalStyle}>
                <h2>Filters</h2>     
                <TextField
                  style={fieldStyle}          
                  id="date"              
                  type="date"
                  label="DueDate"    
                  onChange={this.handleFilterDueDate}    
                  value={this.state.filterDueDate}                   
                  InputLabelProps={{
                    shrink: true,
                  }}
                 /> 
                 <TextField
                  style={fieldStyle}
                  id="priority-todo"
                  onChange={this.handleFilterStatus}  
                  value={this.state.filterStatus} 
                  select
                  label="Status"                  
                  margin="normal"
                >
                  {estados.map(option => (
                    <MenuItem key={option.status} value={option.status}>
                      {option.status}
                    </MenuItem>
                  ))}
                </TextField>    
                <TextField
                  style={fieldStyle}
                  onChange={this.handleFilterResponsible}  
                  value={this.state.filterResponsible} 
                  id="priority-todo"
                  select
                  label="Responsible"                 
                  margin="normal"
                >
                  {responsibles.map(option => (
                    <MenuItem key={option.name} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>    
                <Button style={buttonStyle} variant="contained" color="primary" onClick={this.handleModal}>
                    Apply
                </Button>
                <Button style={buttonStyle} variant="contained" color="primary" onClick={this.handleClearAll}>
                  Clear All
                </Button>           

              </div>
            </Modal> 
                   

        </div>
        
    );
  }
}

export default Main;