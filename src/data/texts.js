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
        standard: {
          title: ['Say goodbye to', 'and start a new game?'],
          yes: 'Yes',
          no: 'No'
        },
        gameOver: {
          title: ['Your pet', 'is unhappy. Say goodbye and start a new game?'],
          yes: 'Yes',
          no: 'No, please stay!'
        }
      },
      stats: {
        hunger: 'Hunger',
        sleep: 'Sleep',
        fun: 'Fun',
        happiness: 'Happiness'
      },
      actions: {
        feed: { title: 'Feed', noneLeft: "There's no food left!" },
        play: { title: 'Play', tooHungry: 'Too hungry to play!' },
        sleep: 'Sleep',
        wakeUp: 'Wake Up'
      },
      store: {
        food: { title: 'Food' },
        skins: { title: 'Appereances' },
        backgrounds: { title: 'Wallpapers' },

        owned: 'Inventory',
        buy: 'Buy',
        tooExpensive: "You don't have enough coins to buy this!",
        select: 'Select',
        inUse: 'Selected',

        gameNotStarted: {
          title: 'Please start a new game before shopping!',
          homeButton: 'Go to homepage'
        }
      },
      guide: {
        title: 'Game Guide',
        sections: [
          {
            title: 'Goal',
            content: [
              'Keep your pet healthy, happy, and stylish!',
              "Earn coins by taking good care of it, then use them to personalize your pet's appearance and surroundings."
            ]
          },
          {
            title: 'Gameplay',
            list: [
              'Feed: Restores hunger and can also increase fun, depending on the food.',
              'Play: Raises fun but drains energy.',
              'Sleep: Restores energy and pauses stat decay.',
              "Happiness: Reflects your pet's overall condition — keep hunger, fun, and energy balanced to maintain high happiness."
            ],
            outro:
              'Keeping your pet happy over time earns you coins as a reward!'
          },
          {
            title: 'Coins & Store',
            list: [
              'Restock food',
              'Buy new appearances',
              'Unlock wallpapers',
              "Every time you visit the store, new bargains and sales appear — so you'll always find different items at discounted prices. Check back often to grab the best deals!"
            ]
          },
          {
            title: 'Pausing the Game',
            intro: 'You can pause the game anytime by:',
            list: [
              'Putting your pet to sleep',
              'Opening the Settings drawer',
              '(On mobile) Opening the Navigation drawer',
              'Visiting any page other than “My Pet”'
            ],
            outro: "While paused, your pet's stats will stay frozen."
          }
        ]
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
