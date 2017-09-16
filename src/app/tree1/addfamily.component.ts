import { Component,OnInit} from '@angular/core';
import { Family} from './model/family';
import { Contact} from './model/email';
import { Photo} from './model/photo';
import {StorageService} from 'app/shared/storage.service';
import { Router, ActivatedRoute } from '@angular/router';

//declare var google:any;
@Component({
  // selector: 'chart'
      templateUrl: './addfamily.component.html',
      providers:[StorageService]
})
export class AddFamilyComponent {
    // @Input() model: Family[];  
      
  public family:Family; 
  public currentFamilyCollections:Family[]=[];  
  private storage:StorageService;
  //private router:Router;
  private parentId:number;

  constructor(storage:StorageService,router: Router,private route: ActivatedRoute)
  {
    this.storage = storage;
    //this.router = router;

  }

  ngOnInit() 
  {
    debugger;
    this.route.params.subscribe( params =>{
        this.parentId = params['parentid'];
     });
     this.LoadChildWindow(this.parentId);
  }

  public LoadChildWindow(parentId:number)
  {
    debugger;
    var test = this.storage.getFamilyCollection();
       //this.currentFamilyCollections = familyCollections;
  }


}