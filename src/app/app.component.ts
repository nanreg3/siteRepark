import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'siteRepark';

  playAvisos: boolean = false;
  imgAvisos: string[] = ['c1a', 'c1b', 'c2a', 'c2b', 'c3a', 'c3b'];
  imgCurrentAvisos: string = 'c1a';

  playAvulsos: boolean = false;
  imgAvulsos: string[] = ['c4a', 'c4b', 'c5a', 'c5b', 'c6a', 'c6b', 'c7a', 'c7b', 'ticket'];
  imgCurrentAvulsos: string = 'c4a';

  constructor(
    private meta: Meta, 
    private titleService: Title
  ) { }

  updateMetaTags() {
    this.titleService.setTitle('Controle de Estacionamento');

    // Standard Meta Tags
    this.meta.addTag({ name: 'description', content: 'Gerencie seu estacionamento de forma simple e descomplicada.' });
    this.meta.addTag({ name: 'keywords', content: 'Estacionamento, Controle, App, Sistema, mensalista, mensalidade, vencimento' });

    // Open Graph Meta Tags
    this.meta.addTag({ property: 'og:title', content: 'Controle de Estacionamento' });
    this.meta.addTag({ property: 'og:description', content: 'Gerencie seu estacionamento de forma simple e descomplicada.' });
    this.meta.addTag({ property: 'og:image', content: 'app/c1a.png' });
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  playPauseAvisos() {
    this.playAvisos = !this.playAvisos;
    this.carouselAvisos();
  }

  playPauseAvulsos() {
    this.playAvulsos = !this.playAvulsos;
    this.carouselAvulsos();
  }

  carouselAvisos() {
    let index = 1;
    const interval = setInterval(() => {
      if (this.playAvisos && index < this.imgAvisos.length) {
        this.imgCurrentAvisos = this.imgAvisos[index];
        index++;
      } else {
        clearInterval(interval);
        index = 0;
        this.imgCurrentAvisos = this.imgAvisos[index];
        this.playAvisos = false;
      }
    }, 2000);
  }

  carouselAvulsos() {
    let index = 1;
    const interval = setInterval(() => {
      if (this.playAvulsos && index < this.imgAvulsos.length) {
        this.imgCurrentAvulsos = this.imgAvulsos[index];
        index++;
      } else {
        clearInterval(interval);
        index = 0;
        this.imgCurrentAvulsos = this.imgAvulsos[index];
        this.playAvulsos = false;
      }
    }, 2000);
  }

}
