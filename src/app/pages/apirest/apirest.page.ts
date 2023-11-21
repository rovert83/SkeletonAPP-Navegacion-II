import { Component, OnInit } from '@angular/core';
import { ServiceHttpService } from 'src/app/services/service-http.service';

@Component({
  selector: 'app-apirest',
  templateUrl: './apirest.page.html',
  styleUrls: ['./apirest.page.scss'],
})
export class ApirestPage implements OnInit {
  user:any;
  users:any;
  posts:any;
  post:any={
    id:null,
    title:"",
    body:"",
    userId:null,
  };

  compareWith:any;
  

  constructor(private api:ServiceHttpService ) { }

  ionViewwillEnter(){
    this.getUsuarios();
    this.getPosts();
  }

  ngOnInit() {
  }


  getUsuario(userId:any){
    this.api.getUsuario(userId).subscribe((data)=>{
    console.log(data)
    this.user=data;
    });
  }
    getUsuarios(){
    this.api.getUsuarios().subscribe((data)=>{
    this.users=data;
    });
  }

  getPosts(){
  this.api.getPosts().subscribe((data)=>{
    this.posts=data;
    this.posts.reverse();
    });
  }
  guardarpost(){
  if(this.post.userId==null){
    if(this.user==undefined){
      console.log("Seleccione un usuario") ;
      return;
      }
      this.post.userId=this.user.id;
      this.api.createPost(this.post).subscribe(
        ()=>{ 
        console.log( "Creado Correctamente")
        this.getPosts();
      },
      error=>{
        console.log("error"+error)
      }
    );
  }
  else{
    this.api.updatePost(this.post.id,this.post).subscribe(
      ()=>{ 
      console.log("Actualzado Correctamente") ;
      this.getPosts();
      },
      error=>{
      console.log("Error"+error)
      }
    );
  }
}




}




