import {booleanAttribute, ChangeDetectionStrategy, Component, Input, numberAttribute} from "@angular/core";
import {NgIf} from "@angular/common";

export interface Character {
  name: string;
  devilsFruit: string;
  crew: string;
}

function characterNameUppercase(character: Character): Character {
  return {
    ...character,
    name: character.name.toUpperCase()
  }
}

@Component({
  standalone: true,
  selector: 'character',
  template: `
      <div>
          <h1>{{ character.name }}</h1>
          <p>{{ character.devilsFruit }}</p>
          <p *ngIf="displayCrew">{{ character.crew }}</p>
        <p>{{ strength * 2 }}</p>
      </div>
  `,
  imports: [
    NgIf
  ],
  styles: [`
    div {
      border: 1px solid white;
      border-radius: 5px;
      padding: 20px;
      margin-bottom: 20px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersComponent {
  @Input({
    required: true, transform: characterNameUppercase}) character!: Character;
  @Input({required: true, transform: booleanAttribute}) displayCrew: boolean | undefined;
  @Input({transform: numberAttribute}) strength!: number;
  test = true;
}
