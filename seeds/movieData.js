const { Movie } = require('../models');

const movieData = [
    {
        "name": "The Godfather",
        "description": "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
        "director": "Francis Ford Coppola",
        "actors": ["Marlon Brando", "Al Pacino", "James Caan"],
        "release_date" : "1972",
        "genre" : ["Drama", "Action"],
        "reviews": ""
    },
    {
        "name": "Schindler's List",
        "description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        "director": "Steven Spielberg",
        "actors": ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
        "release_date" : "1993",
        "genre" : "Drama",
        "reviews": ""
    },
    {
        "name": "12 Angry Men",
        "description": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
        "director": "Sidney Lumet",
        "actors": ["Henry Fonda", "Lee J. Cobb", "Martin Balsam"],
        "release_date" : "1957",
        "genre" : "Drama",
        "reviews": ""
    },
    {
        "name": "Life is Beautiful",
        "description": "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.",
        "director": "Roberto Benigni",
        "actors": ["Roberto Benigni", "Nicoletta Braschi", "Giorgio Cantarini"],
        "release_date" : "1997",
        "genre" : ["Comedy", "Drama", "Romance"],
        "reviews": ""
    },
    {
        "name": "The Good, the Bad and the Ugly",
        "description": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
        "director": "Sergio Leone",
        "actors": ["Clint Eastwood", "Eli Wallach", "Lee Van Cleef"],
        "release_date" : "1966",
        "genre" : "Action",
        "reviews": ""
    },
    {
        "name": "The Shawshank Redemption",
        "description": "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
        "director": "Frank Darabont",
        "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        "release_date" : "1994",
        "genre" : "Drama",
        "reviews": ""
    },
    {
        "name": "The Pursuit of Happyness",
        "description": "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
        "director": "Gabriele Muccino",
        "actors": ["Will Smith", "Thandiwe Newton", "Jaden Smith"],
        "release_date" : "2006",
        "genre" : "Drama",
        "reviews": ""
    },
    {
        "name": "Seven Samurai",
        "description": "Farmers from a village exploited by bandits hire a veteran samurai for protection, who gathers six other samurai to join him.",
        "director": "Akira Kurosawa",
        "actors": ["Toshio Mifune", "Takashi Shimura", "Keiko Tsushima"],
        "release_date" : "1954",
        "genre" : ["Action", "Drama"],
        "reviews": ""
    },
    {
        "name": "Untouchable",
        "description": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
        "director": "Olivier Nakache",
        "actors": ["Francoi Cluzet", "Omar Sy", "Anne Le Ny"],
        "release_date" : "2011",
        "genre" : ["Comedy", "Drama"],
        "reviews": ""
    },
    {
        "name": "Central Station",
        "description": "The emotive journey of a former schoolteacher who writes letters for illiterate people, and a young boy whose mother has just died, as they search for the father he never knew.",
        "director": "Walter Salles",
        "actors": ["Fernanda Montenegro", "Vinicius de Oliveira", "Marlialia Pera"],
        "release_date" : "1998",
        "genre" : "Drama",
        "reviews": ""
    },
    {
        "name": "Requiem for a Dream",
        "description": "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
        "director": "Darren Aronofsky",
        "actors": ["Ellen Burstyn", "Jared Leto", "Jennifer Connelly"],
        "release_date" : "2000",
        "genre" : "Drama",
        "reviews": ""
    },
    {
        "name": "A Beautiful Mind",
        "description": "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
        "director": "Ron Howard",
        "actors": ["Russell Crowe", "Ed Harris", "Jennifer Connelly"],
        "release_date" : "2001",
        "genre" : "Drama",
        "reviews": ""
    },
    {
        "name": "Hachi: A Dog's Tale",
        "description": "A college professor bonds with an abandoned dog he takes into his home.",
        "director": "Lasse Hallstrom",
        "actors": ["Richard Gere, Joan Allen, Cary-Hiroyuki Tagawa"],
        "release_date" : "2009",
        "genre" : "Drama",
        "reviews": ""
    },
    {
        "name": "Taken",
        "description": "A retired CIA agent travels across Europe and relies on his old skills to save his estranged daughter, who has been kidnapped while on a trip to Paris.",
        "director": "Pierre Morel",
        "actors": ["Liam Neeson", "Maggie Grace", "Famke Janssen"],
        "release_date" : "2008",
        "genre" : ["Action", "Thriller"],
        "reviews": ""
    },
    {
        "name": "My Sassy Girl",
        "description": "A young man sees a drunk, cute woman standing too close to the tracks at a metro station in Seoul and pulls her back. She ends up getting him into trouble repeatedly after that, starting on the train.",
        "director": "Jae-young Kwak",
        "actors": ["Cha Tae-hyun", "Jun Ji-hyun", "In-mun Kim"],
        "release_date" : "2001",
        "genre" : ["Comedy", "Drama", "Romance"],
        "reviews": ""
    },
    {
        "name": "Amores perros",
        "description": "A horrific car accident connects three stories, each involving characters dealing with loss, regret, and life's harsh realities, all in the name of love.",
        "director": "Alejandro G. Inarritu",
        "actors": ["Emilio Echevarria", "Gael Garcia Bernal", "Goya Toledo"],
        "release_date" : "2000",
        "genre" : ["Drama", "Thriller"],
        "reviews": ""
    },
    {
        "name": "The Shining",
        "description": "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
        "director": "Stanley Kubrick",
        "actors": ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"],
        "release_date" : "1980",
        "genre" : ["Drama", "Horror"],
        "reviews": ""
    },
    {
        "name": "Apocalypto",
        "description": "As the Mayan kingdom faces its decline, a young man is taken on a perilous journey to a world ruled by fear and oppression.",
        "director": "Mel Gibson",
        "actors": ["Gerardo Taracena", "Raoul Max Trujillo", "Dalia Hernandez"],
        "release_date" : "2006",
        "genre" : ["Action", "Drama"],
        "reviews": ""
    },
    {
        "name": "Gladiator",
        "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        "director": "Ridley Scott",
        "actors": ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
        "release_date" : "2000",
        "genre" : ["Action", "Drama"],
        "reviews": ""
    },
    {
        "name": "Cast Away",
        "description": "A FedEx executive undergoes a physical and emotional transformation after crash landing on a deserted island.",
        "director": "Robert Zemeckis",
        "actors": ["Tom Hanks", "Helen Hunt", "Paul Sanchez"],
        "release_date" : "2000",
        "genre" : ["Drama", "Romance"],
        "reviews": ""
    },
    {
        "name": "The Dark Knight",
        "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "director": "Christopher Nolan",
        "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        "release_date" : "2008",
        "genre" : ["Action, Drama"],
        "reviews": ""
    },
    {
        "name": "The Pianist",
        "description": "During the WWII, acclaimed Polish musician Wladyslaw faces various struggles as he loses contact with his family. As the situation worsens, he hides in the ruins of Warsaw in order to survive.",
        "director": "Roman Polanski",
        "actors": ["Adrien Brody", "Thomas Kretschmann", "Frank Finlay"],
        "release_date" : "2002",
        "genre" : "Drama",
        "reviews": ""
    },
    {
        "name": "Titanic",
        "description": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        "director": "James Cameron",
        "actors": ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
        "release_date" : "1997",
        "genre" : ["Drama", "Romance"],
        "reviews": ""
    },
    {
        "name": "3-Iron",
        "description": "A transient young man breaks into empty homes to partake of the vacationing residents' lives for a few days.",
        "director": "Kim Ki-duk",
        "actors": ["Lee Seung-yun", "Hee Jae", "Hyuk-ho Kwon"],
        "release_date" : "2004",
        "genre" : ["Drama", "Romance"],
        "reviews": ""
    },
    {
        "name": "Braveheart",
        "description": "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
        "director": "Mel Gibson",
        "actors": ["Mel Gibson", "Sophie Marceau", "Patrick McGoohan"],
        "release_date" : "1995",
        "genre" : "Drama",
        "reviews": ""
    },
    {
        "name": "It's a Wonderful Life",
        "description": "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
        "director": "Frank Capra",
        "actors": ["James Stewart", "Donna Reed", "Lionel Barrymore"],
        "release_date" : "1946",
        "genre" : "Drama",
        "reviews": ""
    },
    {
        "name": "Spring, Summer, Fall, Winter... And Spring",
        "description": "A boy is raised by a Buddhist monk in an isolated floating temple where the years pass like the seasons.",
        "director": "Kim Ki-duk",
        "actors": ["Kim Ki-duk", "Oh Yeong-su", "Jong-ho Kim"],
        "release_date" : "2003",
        "genre" : ["Drama", "Romance"],
        "reviews": ""
    },
    {
        "name": "Alien",
        "description": "The crew of a commercial spacecraft encounters a deadly lifeform after investigating an unknown transmission.",
        "director": "Ridley Scott",
        "actors": ["Sigourney Weaver", "Tom Skerritt", "John Hurt"],
        "release_date" : "1979",
        "genre" : ["Horror", "Sci-Fi"],
        "reviews": ""
    },
    {
        "name": "Memories of Murder",
        "description": "In a small Korean province in 1986, two detectives struggle with the case of multiple young women being found raped and murdered by an unknown culprit.",
        "director": "Bong Joon Ho",
        "actors": ["Song Kang-ho", "Kim Sang-kyung", "Kim Roe-ha"],
        "release_date" : "2003",
        "genre" : "Drama",
        "reviews": ""
    },
    {
        "name": "The Return",
        "description": "In the Russian wilderness, two brothers face a range of new, conflicting emotions when their father - a man they know only through a single photograph - resurfaces.",
        "director": "Andrey Zvyagintsev",
        "actors": ["Vladimir Garin", "Ivan Dobronravov", "Konstantin Lavronenko"],
        "release_date" : "2003",
        "genre" : "Drama",
        "reviews": ""
    },
    {
        "name": "I Saw the Devil",
        "description": "A secret agent exacts revenge on a serial killer through a series of captures and releases.",
        "director": "Jee-woon Kim",
        "actors": ["Lee Byung-hun", "Choi Min-sik", "Jeon Gook-hwan"],
        "release_date" : "2010",
        "genre" : ["Action", "Thriller"],
        "reviews": ""
    },
    {
        "name": "Children of Heaven",
        "description": "After a boy loses his sister's pair of shoes, he goes on a series of adventures in order to find them. When he can't, he tries a new way to 'win' a new pair.",
        "director": "Majid Maajidi",
        "actors": ["Mohammad Amir Naji", "Amir Farrokh Hashemian", "Bahare Seddiqi"],
        "release_date" : "1997",
        "genre" : "Drama",
        "reviews": ""
    },
    {
        "name": "A Separation",
        "description": "A married couple are faced with a difficult decision - to improve the life of their child by moving to another country or to stay in Iran and look after a deteriorating parent who has Alzheimer's disease.",
        "director": "Asghar Farhadi",
        "actors": ["Payman Maadi", "Leila Hatami", "Sareh Bayat"],
        "release_date" : "2011",
        "genre" : "Drama",
        "reviews": ""
    },
    {
        "name": "The Sixth Sense",
        "description": "Malcolm Crowe, a child psychologist, starts treating a young boy, Cole, who encounters dead people and convinces him to help them. In turn, Cole helps Malcolm reconcile with his estranged wife.",
        "director": "M. Night Shyamalan",
        "actors": ["Bruce Wilis", "Haley Joel Osment", "Toni Collette"],
        "release_date" : "1999",
        "genre" : ["Drama", "Thriller"],
        "reviews": ""
    },
    {
        "name": "A Moment to Remember",
        "description": "A young couple's enduring love is tested when 27-year-old Su-jin is diagnosed with a rare form of Alzheimer's disease.",
        "director": ["Park Kyung-Jin", "John H. Lee", "Kim Tae-Won"],
        "actors": ["Jung Woo-sung", "Son Ye-jin", "Jong-hak Baek"],
        "release_date" : "2004",
        "genre" : ["Drama", "Romance"],
        "reviews": ""
    },
    {
        "name": "Departures",
        "description": "A newly unemployed cellist takes a job preparing the dead for funerals.",
        "director": "Yojiro Takita",
        "actors": ["Masahiro Motoki", "Ryoko Hirosue", "Tsutomu Yamazaki"],
        "release_date" : "2008",
        "genre" : "Drama",
        "reviews": ""
    },
    {
        "name": "The Road Home",
        "description": "Prompted by the death of his father and the grief of his mother, a man recalls the story of how they met in flashback.",
        "director": "Yimou Zhang",
        "actors": ["Ziyi Zhang", "Honglei Sun", "Hao Zheng"],
        "release_date" : "1999",
        "genre" : ["Drama", "Romance"],
        "reviews": ""
    },
    {
        "name": "Saving Private Ryan",
        "description": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
        "director": "Steven Spielberg",
        "actors": ["Tom Hanks", "Matt Damon", "Tom Sizemore"],
        "release_date" : "1998",
        "genre" : ["Action", "Drama"],
        "reviews": ""
    },
    {
        "name": "The Bridge on the River Kwai",
        "description": "British POWs are forced to build a railway bridge across the river Kwai for their Japanese captors in occupied Burma, not knowing that the allied forces are planning a daring commando raid through the jungle to destroy it.",
        "director": "David Lean",
        "actors": ["William Holden", "Alec Guinness", "Jack Hawkins"],
        "release_date" : "1957",
        "genre" : ["Action", "Drama"],
        "reviews": ""
    },
    {
        "name": "Ben-Hur",
        "description": "After a Jewish prince is betrayed and sent into slavery by a Roman friend in 1st-century Jerusalem, he regains his freedom and comes back for revenge.",
        "director": "William Wyler",
        "actors": ["Charlton Heston", "Jack Hawkins", "Stephen Boyd"],
        "release_date" : "1959",
        "genre" : ["Action", "Drama"],
        "reviews": ""
    },
    {
        "name": "The Exorcist",
        "description": "When a young girl is possessed by a mysterious entity, her mother seeks the help of two Catholic priests to save her life.",
        "director": "William Friedkin",
        "actors": ["Ellen Burstyn", "Max von Sydow", "Linda Blair"],
        "release_date" : "1973",
        "genre" : ["Horror", "Thriller"],
        "reviews": ""
    },
    {
        "name": "The Secret in Their Eyes",
        "description": "A retired legal counselor writes a novel hoping to find closure for one of his past unresolved homicide cases and for his unreciprocated love with his superior - both of which still haunt him decades later.",
        "director": "Juan Jose Campanella",
        "actors": ["Ricardo Darin, Soledata Villamil, Pablo Rago"],
        "release_date" : "2009",
        "genre" : ["Drama", "Romance"],
        "reviews": ""
    },
    {
        "name": "Leon",
        "description": "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
        "director": "Luc Besson",
        "actors": ["Jean Reno", "Gary Oldman", "Natalie Portamn"],
        "release_date" : "1994",
        "genre" : ["Action", "Drama"],
        "reviews": ""
    },
    {
        "name": "The Green Mile",
        "description": "A tale set on death row in a Southern jail, where gentle giant John possesses the mysterious power to heal people's ailments. When the lead guard, Paul, recognizes John's gift, he tries to help stave off the condemned man's execution.",
        "director": "Frank Darabont",
        "actors": ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
        "release_date" : "1999",
        "genre" : "Drama",
        "reviews": ""
    },
    {
        "name": "Gran Torino",
        "description": "After a Hmong teenager tries to steal his prized 1972 Gran Torino, a disgruntled, prejudiced Korean War veteran seeks to redeem both the boy and himself.",
        "director": "Clint Eastwood",
        "actors": ["Clint Eastwood", "Bee Vang", "Christopher Carley"],
        "release_date" : "2008",
        "genre" : "Drama",
        "reviews": ""
    },
    {
        "name": "Kill Bill: Vol. 1",
        "description": "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
        "director": "Quentin Tarantino",
        "actors": ["Uma Thurman", "David Carradine", "Daryl Hannah"],
        "release_date" : "2003",
        "genre" : ["Action", "Thriller"],
        "reviews": ""
    },
    {
        "name": "Jurassic Park",
        "description": "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
        "director": "Steven Spielberg",
        "actors": ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
        "release_date" : "1993",
        "genre" : "Action, Sci-Fi",
        "reviews": ""
    },
    {
        "name": "Terminator 2: Judgement Day",
        "description": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son John from an even more advanced and powerful cyborg.",
        "director": "James Cameron",
        "actors": ["Arnold Schwarznegger", "Linda Hamilton", "Edward Furlong"],
        "release_date" : "1991",
        "genre" : ["Action", "Sci-Fi"],
        "reviews": ""
    },
    {
        "name": "Back to the Future",
        "description": "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
        "director": "Robert Zemeckis",
        "actors": ["Michael J. Fox, Christopher Lloyd, Lea Thompson"],
        "release_date" : "1985",
        "genre" : ["Action", "Comedy", "Sci-Fi"],
        "reviews": ""
    },
    {
        "name": "Finding Nemo",
        "description": "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
        "director": ["Andrew Stanton", "Lee Unkrich"],
        "actors": ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
        "release_date" : "2003",
        "genre" : "Comedy",
        "reviews": ""
    }
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;