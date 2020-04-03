import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  Client: any = [];

  constructor(private clientService: ClientService) { 
    this.readClient();
  }

  ngOnInit() {
  }

  readClient() {
    this.clientService.getClients().subscribe((data) => {
      this.Client = data;
      console.log(data);
    })
  }

  removeClient(client, index){
    if(window.confirm('Are you sure?')) {
      this.clientService.deleteClient(client._id).subscribe((data) => {
        window.location.reload();
      }
    )    
  }
  }

}
