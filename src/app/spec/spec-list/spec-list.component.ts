import { Component, OnInit } from '@angular/core';
import { SpecService } from '../../service/spec.service';

@Component({
  selector: 'app-spec-list',
  templateUrl: './spec-list.component.html',
  styleUrls: ['./spec-list.component.css']
})
export class SpecListComponent implements OnInit {

  Specification: any = [];

  constructor(private specService: SpecService) { 
    this.getSpecs();
  }

  ngOnInit() {
  }

  getSpecs() {
    this.specService.getSpecs().subscribe((data) => {
      this.Specification = data;
    })
  }

  removeSpec(spec, index){
    if(window.confirm('Are you sure?')) {
      this.specService.deleteSpec(spec._id).subscribe((data) => {
        window.location.reload();
      }
    )    
  }
  }

}
