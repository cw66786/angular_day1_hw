import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
 @Input() colors!: string[];
 @Input() colorChange!: (arg: string) => void;

 shadowColor: string = '';
 prevParent: any;

  constructor() { }

  ngOnInit(): void {
  }

  setShadow=(obj: any,color: string)=>{
    
      this.shadowColor = '5px 10px '+ color;
      let parent: any = document.getElementById(obj.parentNode.id.toString());
      

      

      parent.setAttribute("style", `border: 2px solid ${color}; box-shadow: ${this.shadowColor}`);

      if(this.prevParent !== undefined && this.prevParent !== parent){
        this.prevParent.setAttribute("style", `border: none; box-shadow: none`);

      }


     this.prevParent = parent;

      
     
     
      
  }

}
