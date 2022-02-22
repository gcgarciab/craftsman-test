import FetchBooksResponse from '../interfaces/response/fetch-books';

const booksSearchMock: FetchBooksResponse = {
  kind: 'books#volumes',
  totalItems: 644,
  items: [
    {
      kind: 'books#volume',
      id: 'b-hH4Ma4Hq0C',
      etag: 'KV/+MRzqXw0',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/b-hH4Ma4Hq0C',
      volumeInfo: {
        title: '¡el Primer Libro de Fútbol para el Bebé!',
        authors: ['Stephen Berg'],
        publisher: 'Sole Books',
        publishedDate: '2012-11-14',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781938591075',
          },
          {
            type: 'ISBN_10',
            identifier: '1938591070',
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        printType: 'BOOK',
        categories: ['Sports & Recreation'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: 'preview-1.0.0',
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=b-hH4Ma4Hq0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=b-hH4Ma4Hq0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'es',
        previewLink:
          'http://books.google.com.co/books?id=b-hH4Ma4Hq0C&printsec=frontcover&dq=soccer&hl=&cd=1&source=gbs_api',
        infoLink:
          'https://play.google.com/store/books/details?id=b-hH4Ma4Hq0C&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=b-hH4Ma4Hq0C',
      },
      saleInfo: {
        country: 'CO',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 32783,
          currencyCode: 'COP',
        },
        retailPrice: {
          amount: 32783,
          currencyCode: 'COP',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=b-hH4Ma4Hq0C&rdid=book-b-hH4Ma4Hq0C&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 32783000000,
              currencyCode: 'COP',
            },
            retailPrice: {
              amountInMicros: 32783000000,
              currencyCode: 'COP',
            },
          },
        ],
      },
      accessInfo: {
        country: 'CO',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com.co/books/download/el_Primer_Libro_de_F%C3%BAtbol_para_el_Beb%C3%A9-sample-pdf.acsm?id=b-hH4Ma4Hq0C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=b-hH4Ma4Hq0C&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Color illustrations and brief text introduce soccer to very young children.',
      },
    },
    {
      kind: 'books#volume',
      id: 'qtmxDwAAQBAJ',
      etag: 'sDGaRlQ9alI',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/qtmxDwAAQBAJ',
      volumeInfo: {
        title: 'The Soccer Goalie',
        subtitle: 'El portero',
        authors: ['Madison Capitano', 'Pablo de la Vega'],
        publisher: 'Carson-Dellosa Publishing',
        publishedDate: '2020-01-07',
        description:
          'HIGH-INTEREST, LOW-LEVEL: Reluctant readers will be engaged from beginning to end as they explore the responsibilities and skills of the soccer goalie in this 32-page nonfiction book. Side-by-side English and Spanish text and vivid, exciting photos show readers what it takes to fill this key position in soccer. SPORTS BOOK FOR KIDS: Soccer goalies are their team\'s last line of defense. These players must be quick on their feet to stop the other team from scoring a goal. Learn what soccer goalies do to help their team to victory! INCLUDES: Readers will be hooked from beginning to end with facts and photos about some of the key positions in sports. Comprehension questions and activities support students, teachers, and parents. BENEFITS: This bilingual series supports reluctant readers with side-by-side English and Spanish text. Each book features stand-alone spreads, so readers can flip pages and read in any order. Glossary words are defined on the page where they appear, boosting reader comprehension. WHY ROURKE: Since 1980, we’ve been committed to bringing out the best non-fiction books to help you bring out the best in your young learners. Our carefully crafted topics encourage all students who are “learning to read” and “reading to learn"!',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781731628961',
          },
          {
            type: 'ISBN_10',
            identifier: '173162896X',
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 32,
        printType: 'BOOK',
        categories: ['Juvenile Nonfiction'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.2.1.0.preview.1',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=qtmxDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=qtmxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'es',
        previewLink:
          'http://books.google.com.co/books?id=qtmxDwAAQBAJ&pg=PA32&dq=soccer&hl=&cd=2&source=gbs_api',
        infoLink:
          'https://play.google.com/store/books/details?id=qtmxDwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=qtmxDwAAQBAJ',
      },
      saleInfo: {
        country: 'CO',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 93541,
          currencyCode: 'COP',
        },
        retailPrice: {
          amount: 93541,
          currencyCode: 'COP',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=qtmxDwAAQBAJ&rdid=book-qtmxDwAAQBAJ&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 93541000000,
              currencyCode: 'COP',
            },
            retailPrice: {
              amountInMicros: 93541000000,
              currencyCode: 'COP',
            },
          },
        ],
      },
      accessInfo: {
        country: 'CO',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com.co/books/download/The_Soccer_Goalie-sample-pdf.acsm?id=qtmxDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=qtmxDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Now he watches <b>soccer</b> from time to time when his friends invite him to and loves taking very long walks in cities and in nature. He sometimes translates books for children or finds who can translate them around the world.',
      },
    },
    {
      kind: 'books#volume',
      id: 'zt9fCQAAQBAJ',
      etag: 'h2hX6f7sCNA',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/zt9fCQAAQBAJ',
      volumeInfo: {
        title:
          '¡Cuenta conmigo! El torneo de fútbol (Count Me In! Soccer Tournament) 6-Pack',
        authors: ['Lisa  Greathouse'],
        publisher: 'Teacher Created Materials',
        publishedDate: '2012-03-30',
        description:
          'Invite readers along on the preparations for a soccer tournament! With informational, Spanish-translated text, vibrant photos and charts, children are engaged from cover to cover while utilizing mathematical skills to increase understanding of all aspects of soccer, including sportsmanship and tournaments. This 6-Pack includes six copies of this title and a lesson plan.',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781433343261',
          },
          {
            type: 'ISBN_10',
            identifier: '1433343266',
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 28,
        printType: 'BOOK',
        categories: ['Juvenile Nonfiction'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: 'preview-1.0.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=zt9fCQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=zt9fCQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'es',
        previewLink:
          'http://books.google.com.co/books?id=zt9fCQAAQBAJ&pg=PP5&dq=soccer&hl=&cd=3&source=gbs_api',
        infoLink:
          'http://books.google.com.co/books?id=zt9fCQAAQBAJ&dq=soccer&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Cuenta_conmigo_El_torneo_de_f%C3%BAtbol_Coun.html?hl=&id=zt9fCQAAQBAJ',
      },
      saleInfo: {
        country: 'CO',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'CO',
        viewability: 'ALL_PAGES',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=zt9fCQAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'More people play <b>soccer</b> than || any other sport. It&#39;s called . football all over the World <b>Soccer</b> is a very simple game. To play, all you need is a field, two goals, and a ball. Players try to get the ball into the Run, pass,&nbsp;...',
      },
    },
    {
      kind: 'books#volume',
      id: 'UOAiEAAAQBAJ',
      etag: 'xWkcXvCq7Mo',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/UOAiEAAAQBAJ',
      volumeInfo: {
        title: '¡Hora de fútbol! (Soccer Time!)',
        authors: ['Brendan Flynn'],
        publisher: 'Lerner Digital ™',
        publishedDate: '2017-08-01',
        description:
          "¡Gol! El fútbol es uno de los deportes más populares del mundo. Aprende cómo se juega en esta introducción al juego en español. Las fotografías dinámicas de color interesa a los lectores, mientras que un diagrama les ayudará a identificar las partes del campo de fútbol. El texto y las preguntas de pensamiento crítico hacen que este título sea una excelente opción para los lectores principiantes de no ficción. Goal! Soccer is one of the world's most popular sports. Learn about how it's played in this Spanish-language introduction to the game. Dynamic full-color photographs will captivate readers, while a diagram helps them identify the parts of the soccer field. Carefully leveled text and age-appropriate critical thinking questions make this title an excellent choice for beginning nonfiction readers.",
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781512484304',
          },
          {
            type: 'ISBN_10',
            identifier: '151248430X',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 24,
        printType: 'BOOK',
        categories: ['Juvenile Nonfiction'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.1.1.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=UOAiEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=UOAiEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'es',
        previewLink:
          'http://books.google.com.co/books?id=UOAiEAAAQBAJ&pg=PA2&dq=soccer&hl=&cd=4&source=gbs_api',
        infoLink:
          'https://play.google.com/store/books/details?id=UOAiEAAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=UOAiEAAAQBAJ',
      },
      saleInfo: {
        country: 'CO',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 32946,
          currencyCode: 'COP',
        },
        retailPrice: {
          amount: 32946,
          currencyCode: 'COP',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=UOAiEAAAQBAJ&rdid=book-UOAiEAAAQBAJ&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 32946000000,
              currencyCode: 'COP',
            },
            retailPrice: {
              amountInMicros: 32946000000,
              currencyCode: 'COP',
            },
          },
        ],
      },
      accessInfo: {
        country: 'CO',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com.co/books/download/Hora_de_f%C3%BAtbol_Soccer_Time-sample-epub.acsm?id=UOAiEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com.co/books/download/Hora_de_f%C3%BAtbol_Soccer_Time-sample-pdf.acsm?id=UOAiEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=UOAiEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '“Título original: <b>Soccer</b> Time!”—T.p. verso. | “La traducción al español fue realizada por Annette Granat”—T.p. verso. | Includes bibliographical references and index. | Audience: Ages: 4–8. | Audience: Grades: K to Grade 3.',
      },
    },
    {
      kind: 'books#volume',
      id: '3yfwAAAAMAAJ',
      etag: '8Lw9sieXcLE',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/3yfwAAAAMAAJ',
      volumeInfo: {
        title: 'The Soccer Yellow Pages',
        publishedDate: '2003',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'PSU:000050367757',
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        printType: 'BOOK',
        categories: ['Soccer'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.5.6.0.preview.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=3yfwAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=3yfwAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com.co/books?id=3yfwAAAAMAAJ&q=soccer&dq=soccer&hl=&cd=5&source=gbs_api',
        infoLink:
          'http://books.google.com.co/books?id=3yfwAAAAMAAJ&dq=soccer&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/The_Soccer_Yellow_Pages.html?hl=&id=3yfwAAAAMAAJ',
      },
      saleInfo: {
        country: 'CO',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'CO',
        viewability: 'NO_PAGES',
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=3yfwAAAAMAAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'NONE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'SUPPORT THE BUSINESSES THAT SUPPORT <b>SOCCER</b> Trnkbinding. A Francis L . Dean &amp; Associates Inc . . ... All American Girls ( AAG ) Invitational <b>Soccer</b> Tournament . ... 131 High 5 Sportswear 160 B 132 Indoor Sports Pavillion <b>Soccer</b> Camp .',
      },
    },
    {
      kind: 'books#volume',
      id: 'SHMDEAAAQBAJ',
      etag: 'ihuWH5OMrPY',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/SHMDEAAAQBAJ',
      volumeInfo: {
        title: '¡Hora del fútbol! (Soccer Time! Spanish Edition)',
        authors: ['Terry Pierce'],
        publisher: 'Random House Books for Young Readers',
        publishedDate: '2021-07-06',
        description:
          "¡GOOOOL! Este libro infantil es una emocionante introducción al futbol, el primer deporte de muchos niños. Sin manos, sólo pies. El juego comienza. ¡Piii! Con este libro, los aficionados del fútbol mejorarán sus habilidades de lectura y aprenderán diferentes conceptos relacionados con el deporte. Empleando familias de palabras y aliteración, la autora Terry Pierce captura la adrenalina y la emoción de este querido deporte. LEYENDO A PASOS es una línea de Step into Reading que ofrece ediciones en español de libros nivelados. Los libros Paso 1 tienen letra grande y palabras fáciles. Son ideales para niños que conocen el abecedario y que quieren comenzar a leer. Su ritmo, rima y pistas visuales contribuyen a la comprensión del texto. GOOOOOOOOAL!! This Spanish-language Step 1 introduction to practically every child's first team sport is a win for emergent readers. No hands--just feet. The game starts. Tweet! Young soccer enthusiasts will build their reading confidence as they learn about basic skills and the thrill of scoring a goal in this Spanish edition of Terry Pierce's rhythmic, rhyming Step 1 reader. As she did in Jack and Jill and T-Ball Bill and Tae Kwon Do!, Pierce captures the excitement of sports while scaffolding reading with alliteration and word families. LEYENDO A PASOS is a line from Step into Reading offering leveled readers in Spanish. Step 1 Readers feature big type and easy words for children who know the alphabet and are eager to begin reading. Rhyme and rhythmic text paired picture clues help children decode the story.",
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9780593177778',
          },
          {
            type: 'ISBN_10',
            identifier: '0593177770',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 32,
        printType: 'BOOK',
        categories: ['Juvenile Fiction'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '1.2.2.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=SHMDEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=SHMDEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'es',
        previewLink:
          'http://books.google.com.co/books?id=SHMDEAAAQBAJ&pg=PP3&dq=soccer&hl=&cd=6&source=gbs_api',
        infoLink:
          'https://play.google.com/store/books/details?id=SHMDEAAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=SHMDEAAAQBAJ',
      },
      saleInfo: {
        country: 'CO',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 23419,
          currencyCode: 'COP',
        },
        retailPrice: {
          amount: 23419,
          currencyCode: 'COP',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=SHMDEAAAQBAJ&rdid=book-SHMDEAAAQBAJ&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 23419000000,
              currencyCode: 'COP',
            },
            retailPrice: {
              amountInMicros: 23419000000,
              currencyCode: 'COP',
            },
          },
        ],
      },
      accessInfo: {
        country: 'CO',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com.co/books/download/Hora_del_f%C3%BAtbol_Soccer_Time_Spanish_Edi-sample-epub.acsm?id=SHMDEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com.co/books/download/Hora_del_f%C3%BAtbol_Soccer_Time_Spanish_Edi-sample-pdf.acsm?id=SHMDEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=SHMDEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Title: <b>Soccer</b> time! / by Terry Pierce; illustrated by Bob McMahon. Description: New York: Random House, [2019] | Series: Step into reading. Step 1 | Summary: In rhyming verse, active children learn the fundamentals of <b>soccer</b>.',
      },
    },
    {
      kind: 'books#volume',
      id: '8uU_DwAAQBAJ',
      etag: 'aihrx+ZNt5g',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/8uU_DwAAQBAJ',
      volumeInfo: {
        title: 'El futbol Soccer es divertido (Soccer is Fun)',
        authors: ['Calee M. Lee'],
        publisher: 'Xist Publishing',
        publishedDate: '2017-12-01',
        description:
          'Spanish "Reading Stars" Beginning Reader Do you know what is fun? Soccer is fun! It is fun to play soccer but it is also fun to read about it in this book. Reading Star books are for kids at the very beginning of a lifetime love of reading. Each book features less than 50 words and uses repetition to build confidence. Lector principiante ¿Sabes lo que es divertido? ¡El fútbol es divertido! Es divertido jugar al fútbol, ​​pero también es divertido leerlo en este libro. Los libros de Reading Star son para los niños en el principio de su vida amorosa por la lectura. Cada libro cuenta con menos de 50 palabras y utiliza la repetición para crear confianza.',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781532404009',
          },
          {
            type: 'ISBN_10',
            identifier: '153240400X',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 24,
        printType: 'BOOK',
        categories: ['Juvenile Fiction'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '1.5.3.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=8uU_DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=8uU_DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'es',
        previewLink:
          'http://books.google.com.co/books?id=8uU_DwAAQBAJ&pg=PA5&dq=soccer&hl=&cd=7&source=gbs_api',
        infoLink:
          'https://play.google.com/store/books/details?id=8uU_DwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=8uU_DwAAQBAJ',
      },
      saleInfo: {
        country: 'CO',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 47047,
          currencyCode: 'COP',
        },
        retailPrice: {
          amount: 47047,
          currencyCode: 'COP',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=8uU_DwAAQBAJ&rdid=book-8uU_DwAAQBAJ&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 47047000000,
              currencyCode: 'COP',
            },
            retailPrice: {
              amountInMicros: 47047000000,
              currencyCode: 'COP',
            },
          },
        ],
      },
      accessInfo: {
        country: 'CO',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com.co/books/download/El_futbol_Soccer_es_divertido_Soccer_is-sample-epub.acsm?id=8uU_DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com.co/books/download/El_futbol_Soccer_es_divertido_Soccer_is-sample-pdf.acsm?id=8uU_DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=8uU_DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Yo juego futbol <b>soccer</b>. El futbol <b>soccer</b> es divertido. 5 7.',
      },
    },
    {
      kind: 'books#volume',
      id: 'TXXWww7KOFsC',
      etag: 'CrdYE5b9zw8',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/TXXWww7KOFsC',
      volumeInfo: {
        title: 'La historia del fútbol (The Story of Soccer)',
        authors: ['Anastasia Suen'],
        publisher: 'The Rosen Publishing Group, Inc',
        publishedDate: '2003-12-15',
        description:
          'Actualmente, cuando el fútbol está presente en todo el mundo a través de los partidos que disputan los grandes equipos, de las transmisiones vía satélite de estos encuentros y de las sencillas y apasionantes jornadas futbolísticas que a cada instante se viven en las calles y colegios de todo el mundo, resulta difícil imaginar que este deporte tiene su origen en los lejanos tiempos del Imperio Romano. En efecto, para distraerse durante las horas de descanso, los legionarios jugaban una versión muy parecida al fútbol actual. Mucho más tarde, este deporte se popularizó en los colegios ingleses y desde allí inició la conquista de todo el mundo. Este entretenido libro, dirigido a los jóvenes, comenta la historia del fútbol y cómo se ha desarrollado en el transcurso del tiempo hasta convertirse en lo que es hoy.',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '0823968715',
          },
          {
            type: 'ISBN_13',
            identifier: '9780823968718',
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 24,
        printType: 'BOOK',
        categories: ['Juvenile Nonfiction'],
        averageRating: 5,
        ratingsCount: 2,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '1.2.2.0.preview.1',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=TXXWww7KOFsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=TXXWww7KOFsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'es',
        previewLink:
          'http://books.google.com.co/books?id=TXXWww7KOFsC&pg=PA23&dq=soccer&hl=&cd=8&source=gbs_api',
        infoLink:
          'http://books.google.com.co/books?id=TXXWww7KOFsC&dq=soccer&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/La_historia_del_f%C3%BAtbol_The_Story_of_Soc.html?hl=&id=TXXWww7KOFsC',
      },
      saleInfo: {
        country: 'CO',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'CO',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=TXXWww7KOFsC&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Recursos Kids &#39; Book of <b>Soccer</b> : Skills , Strategies , and the Rules of the Game Brooks Clark Carol Publishing Group ( 1997 ) Sitios web Debido a las constantes modificaciones en los sitios de Internet , PowerKids Press ha desarrollado&nbsp;...',
      },
    },
    {
      kind: 'books#volume',
      id: 'UEFgDwAAQBAJ',
      etag: 'QpPp/Gr3gRk',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/UEFgDwAAQBAJ',
      volumeInfo: {
        title: "Es hora de jugar fútbol (It's Time for the Soccer Game)",
        authors: ['Sadie Woods'],
        publisher: 'The Rosen Publishing Group, Inc',
        publishedDate: '2017-07-15',
        description:
          'Readers will be enthralled by this action-packed book about a soccer game. Incorporating hourly increments, the text introduces the concept of time telling in an accessible and inviting way. With dynamic language, educational subject matter, and charming illustrations to hold the attention of beginning readers, this text is a must-have for pre K readers.',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781508157588',
          },
          {
            type: 'ISBN_10',
            identifier: '1508157588',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 24,
        printType: 'BOOK',
        categories: ['Juvenile Fiction'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '2.4.3.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=UEFgDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=UEFgDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'es',
        previewLink:
          'http://books.google.com.co/books?id=UEFgDwAAQBAJ&pg=PA2&dq=soccer&hl=&cd=9&source=gbs_api',
        infoLink:
          'http://books.google.com.co/books?id=UEFgDwAAQBAJ&dq=soccer&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Es_hora_de_jugar_f_tbol_It_s_Time_for_th.html?hl=&id=UEFgDwAAQBAJ',
      },
      saleInfo: {
        country: 'CO',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'CO',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com.co/books/download/Es_hora_de_jugar_f_tbol_It_s_Time_for_th-sample-epub.acsm?id=UEFgDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com.co/books/download/Es_hora_de_jugar_f_tbol_It_s_Time_for_th-sample-pdf.acsm?id=UEFgDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=UEFgDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '<b>Soccer</b>--Juvenile literature. Classification: LCC QB209.5 W66 2018 | DDC 529/.2--dc23 Manufactured in the United States of America CPSIA Compliance Information: Batch #BS17PK: For further information contact Rosen Publishing, New York,&nbsp;...',
      },
    },
    {
      kind: 'books#volume',
      id: 'j4BYAAAAYAAJ',
      etag: 'B7Ze6mQGu7E',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/j4BYAAAAYAAJ',
      volumeInfo: {
        title: 'Soccer',
        authors: ['V-Five Association of America'],
        publishedDate: '1950',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'PSU:000004362425',
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 192,
        printType: 'BOOK',
        categories: ['Soccer'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.1.1.0.preview.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=j4BYAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=j4BYAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com.co/books?id=j4BYAAAAYAAJ&q=soccer&dq=soccer&hl=&cd=10&source=gbs_api',
        infoLink:
          'http://books.google.com.co/books?id=j4BYAAAAYAAJ&dq=soccer&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Soccer.html?hl=&id=j4BYAAAAYAAJ',
      },
      saleInfo: {
        country: 'CO',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'CO',
        viewability: 'NO_PAGES',
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=j4BYAAAAYAAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'NONE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '... 28 Simple, 23, 24, 25 Intercollegiate <b>Soccer</b> Football Association America, 5 Intermediate Flight Training <b>Soccer</b>, 178 K Kick, Choosing proper, 31, 32 Kicking by Goalkeeper, 69, 70 Kick-Off plays Defense against, 87, 88, 135 Offense,&nbsp;...',
      },
    },
  ],
};

export default booksSearchMock;
