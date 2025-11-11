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
          theme: 'Theme',
          save: {
            title: 'Save options',
            text: 'Save game between browser-sessions?'
          }
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
        pet: 'Mi mascota',
        store: 'Tienda'
      },
      settings: {
        title: 'Ajustes',
        options: {
          language: {
            title: 'Idioma',
            text: 'Elige un idioma',
            ownName: 'Español'
          },
          theme: 'Tema',
          save: {
            title: 'Opciones de guardado',
            text: '¿Guardar partida entre sesiones del navegador?'
          }
        }
      },
      home: {
        title: 'Bienvenido a',
        description: '¡Cuida de tu mascota virtual y mantenla feliz!',
        startNew: 'Comenzar nueva partida',
        continueCurrent: 'Continuar con',
        createdBy: 'Creado por'
      }
    },
    game: {
      namePet: { title: 'Nombra a tu mascota:', submit: 'Confirmar' },
      resetModal: {
        standard: {
          title: ['¿Quieres despedirte de', 'y empezar una nueva partida?'],
          yes: 'Sí',
          no: 'No'
        },
        gameOver: {
          title: ['Tu mascota', 'está triste. ¿Empezar una nueva partida?'],
          yes: 'Sí',
          no: '¡No, por favor!'
        }
      },
      stats: {
        hunger: 'Hambre',
        sleep: 'Sueño',
        fun: 'Diversión',
        happiness: 'Felicidad'
      },
      actions: {
        feed: { title: 'Alimentar', noneLeft: '¡No queda comida!' },
        play: {
          title: 'Jugar',
          tooHungry: 'Demasiada hambre para jugar!'
        },
        sleep: 'Dormir',
        wakeUp: 'Despertar'
      },
      store: {
        food: { title: 'Comida' },
        skins: { title: 'Apariencias' },
        backgrounds: { title: 'Fondos' },
        owned: 'Inventario',
        buy: 'Comprar',
        tooExpensive: '¡No tienes suficientes monedas!',
        select: 'Seleccionar',
        inUse: 'Seleccionado',
        gameNotStarted: {
          title: '¡Empieza una nueva partida antes de comprar!',
          homeButton: 'Ir al inicio'
        }
      },
      guide: {
        title: 'Guía del juego',
        sections: [
          {
            title: 'Objetivo',
            content: [
              '¡Mantén a tu mascota sana, feliz y con estilo!',
              'Gana monedas cuidándola bien y úsalas para personalizar su apariencia y entorno.'
            ]
          },
          {
            title: 'Cómo jugar',
            list: [
              'Alimentar: Restaura el hambre y puede aumentar la diversión según la comida.',
              'Jugar: Aumenta la diversión pero reduce la energía.',
              'Dormir: Restaura la energía y pausa la bajada de estadísticas.',
              'Felicidad: Refleja el estado general — mantén las demás estadísticas equilibradas.'
            ],
            outro: '¡Mantener a tu mascota feliz te dará monedas con el tiempo!'
          },
          {
            title: 'Monedas y Tienda',
            list: [
              'Reabastece comida',
              'Compra nuevas apariencias',
              'Desbloquea fondos',
              'Cada vez que visites la tienda, aparecerán nuevas ofertas — ¡vuelve a menudo para aprovechar los descuentos!'
            ]
          },
          {
            title: 'Pausar el juego',
            intro: 'Puedes pausar el juego cuando quieras:',
            list: [
              'Poniendo a tu mascota a dormir',
              'Abriendo el panel de Ajustes',
              '(En móvil) Abriendo el menú de navegación',
              'Visitando cualquier página que no sea “Mi mascota”'
            ],
            outro: 'Mientras está en pausa, las estadísticas se detienen.'
          }
        ]
      }
    }
  },

  fi: {
    app: {
      nav: {
        home: 'Etusivu',
        guide: 'Opas',
        pet: 'Minun kamu',
        store: 'Kauppa'
      },
      settings: {
        title: 'Asetukset',
        options: {
          language: { title: 'Kieli', text: 'Valitse kieli', ownName: 'Suomi' },
          theme: 'Teema',
          save: {
            title: 'Tallennusasetukset',
            text: 'Tallennetaanko peli selainistuntojen välillä?'
          }
        }
      },
      home: {
        title: 'Tervetuloa peliin',
        description: 'Huolehdi kamustasi ja pidä se onnellisena!',
        startNew: 'Aloita uusi peli',
        continueCurrent: 'Jatka hahmolla',
        createdBy: 'Sivun on luonut'
      }
    },
    game: {
      namePet: { title: 'Anna kamulle nimi:', submit: 'Vahvista' },
      resetModal: {
        standard: {
          title: ['Haluatko hyvästellä kamusi', 'ja aloittaa uuden pelin?'],
          yes: 'Kyllä',
          no: 'Ei'
        },
        gameOver: {
          title: ['Kamusi', 'on surullinen. Haluatko aloittaa uuden pelin?'],
          yes: 'Kyllä',
          no: 'Ei vielä!'
        }
      },
      stats: {
        hunger: 'Nälkä',
        sleep: 'Uni',
        fun: 'Hauskuus',
        happiness: 'Onnellisuus'
      },
      actions: {
        feed: { title: 'Ruoki', noneLeft: 'Ruoka on loppu!' },
        play: { title: 'Leiki', tooHungry: 'Liian nälkäinen leikkimään!' },
        sleep: 'Nuku',
        wakeUp: 'Herää'
      },
      store: {
        food: { title: 'Ruoka' },
        skins: { title: 'Ulkonäöt' },
        backgrounds: { title: 'Taustat' },
        owned: 'Varasto',
        buy: 'Osta',
        tooExpensive: 'Sinulla ei ole tarpeeksi kolikoita!',
        select: 'Valitse',
        inUse: 'Käytössä',
        gameNotStarted: {
          title: 'Aloita peli ennen ostoksia!',
          homeButton: 'Takaisin etusivulle'
        }
      },
      guide: {
        title: 'Peliopas',
        sections: [
          {
            title: 'Tavoite',
            content: [
              'Pidä kamusi terveenä, onnellisena ja tyylikkäänä!',
              'Ansaitse kolikoita hoitamalla sitä hyvin ja käytä ne ulkonäön ja ympäristön muokkaamiseen.'
            ]
          },
          {
            title: 'Pelin kulku',
            list: [
              'Ruoki: Palauttaa nälkää ja voi lisätä hauskuutta ruoan mukaan.',
              'Leiki: Lisää hauskuutta mutta vähentää energiaa.',
              'Nuku: Palauttaa energiaa ja pysäyttää tilastojen laskun.',
              'Onnellisuus: Heijastaa yleistä hyvinvointia — pidä kaikki arvot tasapainossa.'
            ],
            outro: 'Pitämällä kamusi onnellisena ansaitset kolikoita!'
          },
          {
            title: 'Kolikot ja kauppa',
            list: [
              'Täydennä ruokaa',
              'Osta uusia ulkonäköjä',
              'Avaa taustoja',
              'Kaupassa on aina uusia tarjouksia, käy usein katsomassa!'
            ]
          },
          {
            title: 'Pelin tauko',
            intro: 'Voit keskeyttää pelin milloin tahansa:',
            list: [
              'Laittamalla kamusi nukkumaan',
              'Avaamalla asetukset',
              '(Mobiilissa) avaamalla valikon',
              'Siirtymällä pois “Minun kamu” -sivulta'
            ],
            outro: 'Tauon aikana tilastot pysyvät paikallaan.'
          }
        ]
      }
    }
  },

  se: {
    app: {
      nav: {
        home: 'Hem',
        guide: 'Guide',
        pet: 'Min kompis',
        store: 'Butik'
      },
      settings: {
        title: 'Inställningar',
        options: {
          language: {
            title: 'Språk',
            text: 'Välj ett språk',
            ownName: 'Svenska'
          },
          theme: 'Tema',
          save: {
            title: 'Spara-alternativ',
            text: 'Spara spelet mellan webbläsarsessioner?'
          }
        }
      },
      home: {
        title: 'Välkommen till',
        description: 'Ta hand om din kompis och håll den lycklig!',
        startNew: 'Starta nytt spel',
        continueCurrent: 'Fortsätt med',
        createdBy: 'Skapad av'
      }
    },
    game: {
      namePet: { title: 'Ge ett namn åt din kompis:', submit: 'Bekräfta' },
      resetModal: {
        standard: {
          title: ['Säg adjö till', 'och börja ett nytt spel?'],
          yes: 'Ja',
          no: 'Nej'
        },
        gameOver: {
          title: ['Din kompis', 'är olycklig. Börja ett nytt spel?'],
          yes: 'Ja',
          no: 'Nej, stanna kvar!'
        }
      },
      stats: {
        hunger: 'Hunger',
        sleep: 'Sömn',
        fun: 'Rolighet',
        happiness: 'Lycka'
      },
      actions: {
        feed: { title: 'Mata', noneLeft: 'Ingen mat kvar!' },
        play: { title: 'Leka', tooHungry: 'För hungrig för att leka!' },
        sleep: 'Sova',
        wakeUp: 'Vakna'
      },
      store: {
        food: { title: 'Mat' },
        skins: { title: 'Utseenden' },
        backgrounds: { title: 'Bakgrunder' },
        owned: 'Förråd',
        buy: 'Köp',
        tooExpensive: 'Du har inte tillräckligt med pengar!',
        select: 'Välj',
        inUse: 'Vald',
        gameNotStarted: {
          title: 'Börja ett nytt spel innan du köper!',
          homeButton: 'Till startsidan'
        }
      },
      guide: {
        title: 'Spelguide',
        sections: [
          {
            title: 'Mål',
            content: [
              'Håll ditt husdjur friskt, lyckligt och snyggt!',
              'Tjäna pengar genom att ta hand om det och använd dem för att anpassa utseende och miljö.'
            ]
          },
          {
            title: 'Spelupplägg',
            list: [
              'Mata: Återställer hunger och kan öka rolighet beroende på mat.',
              'Lek: Ökar rolighet men minskar energi.',
              'Sov: Återställer energi och stoppar minskningen av statistik.',
              'Lycka: Visar hur bra din kompis mår — håll allt i balans.'
            ],
            outro: 'Om du håller din kompis lyckligt får du pengar över tid!'
          },
          {
            title: 'Pengar & Butik',
            list: [
              'Fyll på mat',
              'Köp nya utseenden',
              'Lås upp bakgrunder',
              'Varje gång du besöker butiken finns nya erbjudanden — kika in ofta!'
            ]
          },
          {
            title: 'Pausa spelet',
            intro: 'Du kan pausa spelet när som helst genom att:',
            list: [
              'Lägga ditt husdjur för att sova',
              'Öppna inställningsmenyn',
              '(På mobil) öppna navigationsmenyn',
              'Gå till en annan sida än “Min kompis”'
            ],
            outro: 'När spelet är pausat stannar statistiken.'
          }
        ]
      }
    }
  }
};

export default TEXTS;
