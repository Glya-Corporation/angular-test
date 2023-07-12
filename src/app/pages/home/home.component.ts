import { Component,OnInit,  } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters.service';
import { FormGroup,Validators,FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  allCharacters:any=[]

  login:FormGroup<any> = this.formGroup.group({
    name:['',Validators.required],
    lastName:['',],
    email:['', Validators.email]
  })

  constructor(
    private characterSvc: CharactersService,
    private formGroup: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.getAllCharacters()
  }

  getAllCharacters(){
    this.characterSvc.getCharacters().subscribe((res:any)=>{
      this.allCharacters = res.results
    })
  }

  gerForm(){
    console.log(
      this.login.value
    );
      // tambien puedes acceder a cada uno de los inputs colocando:
      // this.login.controls['name'].value
  }
}
