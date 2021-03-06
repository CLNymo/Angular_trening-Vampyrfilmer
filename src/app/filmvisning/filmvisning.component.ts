import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmvisning',
  templateUrl: './filmvisning.component.html',
  styleUrls: []
})
export class FilmvisningComponent implements OnInit {
  title = 'Vampyrfilmer';
  valgtFilmIndeks: number = -1;
  constructor() { }

  trueBlood = {
    tittel: "True Blood",
    utgivelsesaar: 2008,
    imdbLink: "https://www.imdb.com/title/tt0844441/",
    imageURL: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-hWmWnuaidLo%2FUM-OfaIMmgI%2FAAAAAAACNIs%2FwzMzGYVMCGA%2Fs1600%2Ftrue_blood_poster43.jpg&f=1&nofb=1"
  }

  whatWeDoInTheShadows = {
    tittel: "What We Do In The Shadows",
    utgivelsesaar: 2014,
    imdbLink: "https://www.imdb.com/title/tt3416742/",
    imageURL: "https://m.media-amazon.com/images/M/MV5BMjAwNDA5NzEwM15BMl5BanBnXkFtZTgwMTA1MDUyNDE@._V1_UX182_CR0,0,182,268_AL_.jpg"
  }

  letTheRightOneIn = {
    tittel: "Let The Right One In",
    utgivelsesaar: 2008,
    imdbLink: "https://www.imdb.com/title/tt1139797/",
    imageURL: "https://m.media-amazon.com/images/M/MV5BOWM4NTY2NTMtZDZlZS00NTgyLWEzZDMtODE3ZGI1MzI3ZmU5XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_UY268_CR3,0,182,268_AL_.jpg"
  } 

  twilight = {
    tittel: "Twilight",
    utgivelsesaar: 2008,
    imdbLink: "https://www.imdb.com/title/tt1099212/",
    imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.moviehdwallpapers.com%2Fwp-content%2Fuploads%2F2013%2F02%2FTwilight-2008-Poster.jpg&f=1&nofb=1"
  }
  
  stemKnapp(indeks: number){
    if(this.erValgt(indeks)){
      this.valgtFilmIndeks = -1;
    } else {
      this.valgtFilmIndeks = indeks;
    }
  }

  erValgt(indeks: number){
    return indeks == this.valgtFilmIndeks
  }

  hentTekstKnapp(indeks: number){
    if (this.erValgt(indeks)){
      return "Avstem";
    }
    else {
      return "Stem!"
    }
  }
  ngOnInit(): void {
  }

}
