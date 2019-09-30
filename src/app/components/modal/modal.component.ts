import { Component, OnInit } from '@angular/core';
import {DataApiService } from '../../services/data-api.service';
import { PostInterface } from '../../models/post-interface';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor( private dataApiService: DataApiService, private location: Location ) { }

  ngOnInit() {
  }

  onSavePost(postForm: NgForm): void {
    if(postForm.value.id == null){
    // NUEVO
    this.dataApiService.savePost(postForm.value).subscribe(post => location.reload());
    alertify.success("Creado con éxito ");
  }else{
      //ACTUALIZAR
      this.dataApiService.updatePost(postForm.value).subscribe(post => location.reload());
      alertify.success("Actualizado con éxito ");

    }

  }

}
