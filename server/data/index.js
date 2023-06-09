import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "test",
    lastName: "me",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p11.jpg",
    friends: [],
    location: "San Fran, CA",
    occupation: "Photographer",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Tae",
    lastName: "Ayodeji",
    email: "enitanayo@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p3.jpg",
    friends: [],
    location: "Lagos, NG",
    occupation: "Software Engineer, CEO, Dancer, DJ, Producer, Actress",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Lila",
    lastName: "Fulani",
    email: "lilafulani@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "p4.jpg",
    friends: [],
    location: "Kano, NG",
    occupation: "Tie Dye fabric maker, Business Owner",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Zuri",
    lastName: "Zulu",
    email: "zurizulu@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p6.jpg",
    friends: [],
    location: "Johannesburg, SA",
    occupation: "Radio presenter, Actress",
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Farrah",
    lastName: "Fable",
    email: "farrahfable@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p5.jpg",
    friends: [],
    location: "Marrakech, MO",
    occupation: "Singer, Musician",
    viewedProfile: 40212,
    impressions: 7758,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Imani",
    lastName: "Dunn",
    email: "imanidunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p7.jpg",
    friends: [],
    location: "Los Angeles, CA",
    occupation: "Fashion Designer, Model",
    viewedProfile: 976,
    impressions: 4658,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Chiamaka",
    lastName: "James",
    email: "chichijames@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p8.jpg",
    friends: [],
    location: "Enugu, NG",
    occupation: "Artist, Graphic Designer",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Jessica",
    lastName: "Dunn",
    email: "jessicadunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p9.jpg",
    friends: [],
    location: "London, UK",
    occupation: "Creative Director, Fashion Stylist",
    viewedProfile: 19420,
    impressions: 82970,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Tae",
    lastName: "Ayodeji",
    location: "Lagos, NG",
    description: "Passion led me here. CreativeHub x VWTStudios Founder. Watch this space!",
    picturePath: "post1.jpg",
    userPicturePath: "p3.jpg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "great work!",
      "wow!amazing",
      "lmao so random :D",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Zuri",
    lastName: "Zulu",
    location: "Johannesburg, SA",
    description:
      "I love rainbows.",
    picturePath: "post2.jpg",
    userPicturePath: "p6.jpg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "crazy",
      "wow!, so lovely",
      "aw, so cute :)",
      "haha, so funny",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Farrah",
    lastName: "Fable",
    location: "Marrakech, MO",
    description:
      "Life is for living :)",
    picturePath: "post3.jpg",
    userPicturePath: "p5.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      "LOL",
      "hmm interesting",
      "this is so great! love your work!",
      "So proud of you!",
      "beautiful!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Imani",
    lastName: "Dunn",
    location: "Los Angeles, CA",
    description:
      "Get to know me. I'm fun ;)",
    picturePath: "post9.jpg",
    userPicturePath: "p7.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
        "amazing",
        "Why am I doing this?",
        "superb",
        "great job! would love to work with you sometime!",
        "omg I love!",
      ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    firstName: "Chiamaka",
    lastName: "James",
    location: "Chicago, IL",
    description:
      "I love ART )",
    picturePath: "post5.jpg",
    userPicturePath: "p8.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      "amazing",
      "lovely!",
      "superb",
      "great job! ",
      "wonderful!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    firstName: "Jessica",
    lastName: "Dunn",
    location: "London, UK",
    description:
      "Hmu for all your creative needs!",
    picturePath: "post6.jpg",
    userPicturePath: "p9.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),

    comments: [
      "great omg",
      "this is so good!",
      "you ate that!",
      "love love love it!.",
      "definitely inspiring.",
    ],
  },
];