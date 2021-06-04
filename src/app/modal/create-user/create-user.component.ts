import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  users: Cliente;

  ngOnInit(): void {
  }
  constructor(
    private _clientServices: ClienteService,
    public dialogRef: MatDialogRef<CreateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      

    this.users = new Cliente();
    }
    

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardarCliente(): void {
    // console.log(this.users.bussiness_id);
    if(this.users.bussiness_id== null && 
      this.users.phone == null&&
      this.users.email == null&&
      this.users.start_date == null&&
      this.users.end_date == null){
      alert('Debes completar todos los campos');
       return;
     }

    this._clientServices.guardarCLiente(this.users).subscribe(response => {
      console.log(response);
    })
  }

}
