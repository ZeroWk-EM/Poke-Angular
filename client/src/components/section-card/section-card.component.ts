import { Component, Input, OnInit } from '@angular/core';
import { Section } from 'src/models/section';

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.component.html',
  styleUrls: ['./section-card.component.css']
})
export class SectionCardComponent {

  @Input() section: Section | undefined;

}
