import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
 @Input() colors!: string[];
 @Input() colorChange!: (arg: string) => void;

  constructor() { }

  ngOnInit(): void {
  }

}
