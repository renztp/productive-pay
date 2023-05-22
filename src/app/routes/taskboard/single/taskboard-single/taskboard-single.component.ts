import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taskboard-single',
  templateUrl: './taskboard-single.component.html',
  styleUrls: ['./taskboard-single.component.scss']
})
export class TaskboardSingleComponent implements OnInit {
  id: any = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
