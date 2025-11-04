const TEXTS = {
  en: {
    app: {
      nav: { home: 'Home', guide: 'Guide', pet: 'My Pet', store: 'Store' },
      settings: {
        title: 'Settings',
        options: {
          language: {
            title: 'Language',
            text: 'Choose a language',
            ownName: 'English'
          },
          theme: 'Theme'
        }
      },
      home: {
        title: 'Welcome to',
        description: 'Care for your virtual pet and keep it happy!',
        startNew: 'Start new game',
        continueCurrent: 'Continue with',
        createdBy: 'Created by'
      }
    },
    game: {
      namePet: { title: 'Name your pet:', submit: 'Confirm' },
      resetModal: {
        title: ['Say goodbye to', 'and start a new game?'],
        yes: 'Yes',
        no: 'No'
      },
      stats: {
        hunger: 'Hunger',
        sleep: 'Sleep',
        fun: 'Fun',
        happiness: 'Happiness'
      },
      actions: {
        feed: { title: 'Feed', noneLeft: "There's no food left!" },
        play: 'Play',
        sleep: 'Sleep',
        wakeUp: 'Wake Up'
      },
      store: {
        food: { title: 'Food' },
        skins: { title: 'Appereances' },
        backgrounds: { title: 'Wallpapers' }
      }
    }
  },

  es: {
    app: {
      nav: {
        home: 'Inicio',
        guide: 'Guía',
        pet: 'Mi mascota'
      },
      settings: {
        title: 'Ajustes',
        options: {
          language: {
            title: 'Idioma',
            text: 'Elige un idioma',
            ownName: 'Español'
          },
          theme: 'Tema'
        }
      },
      home: {
        title: 'Bienvenido a',
        description: 'Cuida de tu mascota virtual y mantenla feliz!',
        startNew: 'Comenzar nueva partida',
        continueCurrent: 'Continuar con',
        createdBy: 'Creado por'
      }
    },
    game: {
      actions: {
        feed: { title: 'Alimentar', noneLeft: '¡No queda comida!' },
        play: 'Jugar',
        sleep: 'Dormir',
        wakeUp: 'Despertar'
      }
    }
  },

  fi: {
    app: {
      nav: {
        home: 'Etusivu',
        guide: 'Opas',
        pet: 'Minun kamu'
      },
      settings: {
        title: 'Asetukset',
        options: {
          language: { title: 'Kieli', text: 'Valitse kieli', ownName: 'Suomi' },
          theme: 'Teema'
        }
      },
      home: {
        title: 'Tervetuloa peliin',
        description: 'Huolehdi kamustasi ja pidä se onnellisena!',
        startNew: 'Aloita uusi peli',
        continueCurrent: 'Jatka hahmolla',
        createdBy: 'Sivun on luonut'
      }
    }
  },

  se: {
    app: {
      nav: {
        home: 'Hem',
        guide: 'Guide',
        pet: 'Min kompis'
      },
      settings: {
        title: 'Inställningar',
        options: {
          language: {
            title: 'Språk',
            text: 'Välj ett språk',
            ownName: 'Svenska'
          },
          theme: 'Tema'
        }
      },
      home: {
        title: 'Välkommen till',
        description: 'Ta hand om din kompus och håll den lycklig!',
        startNew: 'Starta nytt spel',
        continueCurrent: 'Fortsätt med',
        createdBy: 'Skapad av'
      }
    }
  }
};

export default TEXTS;
