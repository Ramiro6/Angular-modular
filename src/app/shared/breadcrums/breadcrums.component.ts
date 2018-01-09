import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styleUrls: ['./breadcrums.component.css']
})
export class BreadcrumsComponent implements OnInit {

  label = '';

  constructor( private router: Router,
               public title: Title,
               public meta: Meta ) {
    this.getDataRoute().subscribe( data => {
      console.log(data);
      this.label = data.titulo;
      this.title.setTitle(this.label);

      let metaTag: MetaDefinition = {
        name: 'description',
        content: this.label
      };

      this.meta.updateTag(metaTag);
    });
  }

  getDataRoute() {
    return this.router.events
    .filter( ev => ev instanceof ActivationEnd )
    .filter((ev: ActivationEnd) => ev.snapshot.firstChild === null )
    .map((ev: ActivationEnd) => ev.snapshot.data);
  }

  ngOnInit() {
  }

}
