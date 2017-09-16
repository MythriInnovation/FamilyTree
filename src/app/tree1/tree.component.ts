import { Component,OnInit, ViewChild, ElementRef} from '@angular/core';
import { Family} from './model/family';
import { Contact} from './model/email';
import { Photo} from './model/photo';
import {AddFamilyComponent} from './addfamily.component'
import { Router, ActivatedRoute } from '@angular/router';
import {StorageService} from 'app/shared/storage.service';

//declare var google:any;
@Component({
  // selector: 'chart'
      templateUrl: './tree.component.html',
      providers:[AddFamilyComponent,StorageService]
})
export class TreeComponent {
     @ViewChild('dataContainer') dataContainer: ElementRef;
     @ViewChild('txtName') txtName:ElementRef; /*create a view child*/
 //public router = Router;
 public family:Family; 
 public familyCollections:Family[]=[];  
 private router:Router;
 private storage:StorageService;
 private selectedParentId:number = 0;


 constructor(private elRef:ElementRef,router: Router,storage:StorageService)
 {
      this.router = router;
      this.storage =storage;
      Window["TreeComponent"] = this;
      //Window["AddFamily"] = addFamiy;
 }

  ngOnInit() {
    debugger;

    console.log('ngOnInit');

    let em:Contact[]=[];
    em.push(new Contact());
    em[0].Id=1;
    em[0].email="resminr.nr@gmail.com";
    
    let photo:Photo[]=[];
    photo.push(new Photo());
    photo[0].Id=1;
    photo[0].photo="assets/Family/hiran.jpg";
    photo.push(new Photo());
    photo[1].Id=2;
    photo[1].photo="assets/Family/hiran.jpg";
    photo.push(new Photo());
    photo[2].Id=2;
    photo[2].photo="assets/Family/hiran.jpg";
    photo.push(new Photo());
    photo[3].Id=2;
    photo[3].photo="assets/Family/hiran.jpg";
    photo.push(new Photo());
    photo[4].Id=2;
    photo[4].photo="assets/Family/hiran.jpg";

   //Parent level 0
   this.family=new Family({Id:1,Name:"Sachin Tendulkar",Place:"Mumbai",ph:photo[0],contactInfo:em,parentId:0}); 
   this.familyCollections.push(this.family);

   //Parent level 1
   this.family=new Family({Id:2,Name:"Sourav Ganguly",Place:"Kolkata",ph:photo[1],contactInfo:em,parentId:1}); 
   this.familyCollections.push(this.family);
   this.family=new Family({Id:3,Name:"Virender Sehwag",Place:"Delhi",ph:photo[2],contactInfo:em,parentId:1}); 
   this.familyCollections.push(this.family);
   this.family=new Family({Id:5,Name:"Vayaloram1",Place:"Kollam",ph:photo[4],contactInfo:em,parentId:1}); 
   this.familyCollections.push(this.family);
   this.family=new Family({Id:6,Name:"Athi muttam",Place:"Kollam",ph:photo[3],contactInfo:em,parentId:1}); 
   this.familyCollections.push(this.family);
   this.family=new Family({Id:7,Name:"Pookavanam",Place:"Kollam",ph:photo[2],contactInfo:em,parentId:1}); 
   this.familyCollections.push(this.family);

   //Parent level 2
   this.family=new Family({Id:4,Name:"Virender1",Place:"Kollam",ph:photo[3],contactInfo:em,parentId:3}); 
   this.familyCollections.push(this.family);

    this.family=new Family({Id:9,Name:"Virender2",Place:"Kollam",ph:photo[3],contactInfo:em,parentId:3}); 
   this.familyCollections.push(this.family);

    this.family=new Family({Id:10,Name:"Virender3",Place:"Kollam",ph:photo[3],contactInfo:em,parentId:3}); 
   this.familyCollections.push(this.family);

    //Parent level 3
   this.family=new Family({Id:8,Name:"Virender11",Place:"Kollam",ph:photo[3],contactInfo:em,parentId:4}); 
   this.familyCollections.push(this.family);

   this.family=new Family({Id:11,Name:"Virender111",Place:"Kollam",ph:photo[3],contactInfo:em,parentId:4}); 
   this.familyCollections.push(this.family);

   this.family=new Family({Id:12,Name:"Virender1111",Place:"Kollam",ph:photo[3],contactInfo:em,parentId:4}); 
   this.familyCollections.push(this.family);

   this.LoadFamilyTree();
  }

  LoadFamilyTree()
  {
    var count:number;
    this.familyCollections.sort((leftside,rightside):number=>{
      if(leftside.parentId < rightside.parentId) return -1;
      if(leftside.parentId > rightside.parentId) return 1;
      return 0;
    });

     this.LoadTree(1,true,null);
  }

  public LoadTree(parentId:number,isParent:boolean,event)
  {
     let parent:Family[] = [];

     if(isParent)
     {
        parent = this.familyCollections.filter(p=>p.Id == parentId);
     }
     else
     {
        parent = this.familyCollections.filter(p=>p.Id == parentId);
        parent = this.familyCollections.filter(p=>p.Id == parent[0].parentId);
     }
    
     var strFamily:string="";

     strFamily = strFamily +"<ul><li onscroll='Window.TreeComponent.Scroll($event)'>";
     strFamily = strFamily + this.CreateNode(parent[0],true);
     strFamily = strFamily + "<ul>"
     var children =this.familyCollections.filter(p=>p.parentId == parent[0].Id);
     strFamily = this.CreateChild(children,strFamily);
     strFamily=strFamily +"</ul></li></ul>";
      // debugger;
     this.dataContainer.nativeElement.innerHTML = strFamily;
  }

  public CreateNode(objFamily:Family,isParent:boolean)
  {   
     debugger;
     
     var upArrow = "";

     if(isParent)
     {
        upArrow =  "<span onclick="+"Window.TreeComponent.LoadTree("+ objFamily.Id +",false) class='glyphicon glyphicon-chevron-up' style='float:left;width: 100%;border: 1px'></span></a>";
     } 
     //var paramAddChild = this.familyCollections+ "," + objFamily.Id;
     var addButton ="<a data-toggle='modal' data-target='#addChild' onclick=Window.TreeComponent.editThisUser("+objFamily.Id +") style='float:left;width: 100%;border: 1px'> <span class='glyphicon glyphicon-plus'></span></a>";
     var downArrow = "<span onclick="+"Window.TreeComponent.LoadTree("+ objFamily.Id +",true) class='glyphicon glyphicon-chevron-down'></span>";
     var node= 
     "<div>"
     +
     upArrow 
     +
     "" 
     +
     "<i class='fa fa-home' onclick='Window.TreeComponent.Scroll()' style='font-size:60px;color:lightblue;text-shadow:2px 2px 4px #000000;'></i>"+
    //  "<i class='fa fa-home' style='font-size:48px;color:red;'></i>"
     //+
     // "<img class='familyImage' src="+ objFamily.ph.photo + ">" +
     addButton
     +
     "<div class='familyName'>" + objFamily.Name + "</div>" 
     + 
     downArrow 
     +
     "</div>";
     return node;
  }
  
 public editThisUser(parentId:number)
 {
   debugger;
   this.selectedParentId = parentId;
   //this.storage.setFamilyCollection(this.familyCollections);
   // this.router.navigate(['/AddFamily', parentId]);
 }

  public CreateChild(children:Family[],strFamily:string)
  {
    debugger;
        var strChild:string="";
        children.forEach(child=>
         {
              strChild = "";
              strChild = strChild + "<li>";
              strChild= strChild + this.CreateNode(child,false);
              strFamily = strFamily + strChild;
              var children = this.familyCollections.filter(p=>p.parentId == child.Id);
              strFamily=strFamily +"</li>";
         });
      return strFamily;
  }

 
  public Scroll()
  {
    debugger;
    alert('hi');
  }

  public AddNewChild(event)
  {
    debugger;
    var family = new Family();
    family.Name = this.txtName.nativeElement.value;
    family.Id = this.NewId();
    family.parentId =this.selectedParentId;
    this.familyCollections.push(family);
  }

  public NewId()
  {
    var lastelement = this.familyCollections.pop();
    return lastelement.Id+1;
  }
}