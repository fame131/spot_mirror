const album = [
  {
    id: 1,
    name: [
      'Adore You',
      'As It Was',
      'Watermelon Sugar'
    ],
    artist: 'Harry Styles',
    artistImg: '/images/harry.jpg',
    songs: [
      { name: 'Adore You', file: '/songs/adore.mp3' },
      { name: 'As It Was', file: '/songs/asitwas.mp3' },
      { name: 'Watermelon Sugar', file: '/songs/water.mp3' }
    ],
    image: '/images/harry.jpg',
    Genre: 'Pop / Soft Rock',
    Release: 'December 6, 2019',
    Album: 'Fine Line',
    type: 'Single',
    Sound: 'A lush and dreamy soft-pop landscape filled with floating guitar textures, warm basslines, and gentle atmospheric layers that feel like a slow sunrise. The production builds a soothing emotional cushion, mixing polished modern pop with subtle vintage influences. Harry’s vocals glide effortlessly across the track, carrying a silky vulnerability that blends whisper-like softness with controlled power. The song’s arrangement is intentionally spacious, creating a glowing, weightless feeling as if drifting through a cinematic daydream.',
    Theme: 'Unconditional affection, pure admiration, and the desire to give someone your full emotional warmth. “Adore You” speaks to the kind of love that feels gentle yet overwhelming—where every small detail about a person becomes precious. It explores themes of emotional safety, devotion without demands, and the courage to express deep fondness openly. Beneath the sweetness lies vulnerability—the fear of wanting someone so sincerely that you expose more of yourself than you planned.',
    Inspiration: 'The song emerged from Harry’s exploration of emotional honesty during the Fine Line era. It draws inspiration from personal reflections on learning to love without fear and embracing softness as a strength. The whimsical, storybook-inspired visuals (like the island of Eroda) mirror the song’s heart: a surreal world built from raw emotion and symbolic storytelling. Harry wanted the track to feel like offering someone a safe place, shaped by his growth, introspection, and desire to create music that radiates warmth and acceptance.',
    bgCol: 'gold',
    wall: '/images/harry.jpg'
  },

  {
    id: 2,
    name: [
      'Attention',
      'Changes',
      "We Don't Talk Anymore"
    ],
    artist: 'Charlie Puth',
    artistImg: '/images/charlie.webp',
    songs: [
      { name: 'Attention', file: '/songs/attention.mp3' },
      { name: 'Changes', file: '/songs/changes.mp3' },
      { name: "We Don't Talk Anymore", file: '/songs/light.mp3' }
    ],
    image: '/images/charlie.webp',
    Genre: 'Pop / Funk-Pop',
    Release: 'April 21, 2017',
    Album: 'Voicenotes',
    type: 'Single',
    Sound: 'A sharp, rhythm-focused blend of modern funk-pop built around a clean, addictive bassline that instantly hooks the listener. Crisp percussion, tight guitar plucks, and Charlie’s silky falsetto create a sleek and seductive sound that feels like emotional tension turned into music. The production is minimal yet powerful—every instrument hits with purpose, leaving space for the vocals to cut through with clarity. The track’s groove-driven structure gives it a seductive nighttime energy, like the soundtrack to a heated confrontation.',
    Theme: 'Manipulation, emotional confusion, and the painful realization that someone enjoys your affection only when it benefits them. “Attention” unpacks the frustration of being drawn in by a person who doesn’t truly care but hates losing their emotional power over you. It explores the push-and-pull dynamic of toxic relationships—jealousy games, mixed signals, and the exhaustion of wanting closure that never comes. Underneath the catchy melody lies a narrative of reclaiming self-worth.',
    Inspiration: 'Charlie based the song on real emotional experiences where he felt played by someone who thrived on his reactions. The track was written to capture the exact psychological tension of that moment—the irritation, the desire, the clarity, and the final emotional break. Musically, Charlie wanted a bassline that “felt like the person walking into the room,” embodying both their charm and their toxicity. The result mirrors his personal growth and his shift into more mature, emotionally layered songwriting.',
    bgCol: 'skyblue',
    wall: '/images/puth.jpeg'
  },

  {
    id: 3,
    name: [
      'Senorita',
      'Holding Me Back',
      'Stitches'
    ],
    artist: 'Shawn Mendes',
    artistImg: '/images/shawn.jpg',
    songs: [
      { name: 'Senorita', file: '/songs/senorita.mp3' },
      { name: 'Holding Me Back', file: '/songs/back.mp3' },
      { name: 'Stitches', file: '/songs/stitches.mp3' }
    ],
    image: '/images/shawn.webp',
    Genre: 'Pop / Pop Rock / Acoustic',
    Release: 'September 23, 2016',
    Album: 'Illuminate',
    type: 'Album',
    Sound: 'An emotionally charged fusion of acoustic pop and soft rock rooted in heartfelt storytelling and expressive guitar work. The sound is intimate yet powerful, built on warm acoustic strums, soulful vocal runs, and airy arrangements that highlight Shawn’s emotional openness. Many tracks feel like private confessions sung from a quiet bedroom or late-night studio session. The combination of clean guitar tones, organic instrumentation, and controlled vocal intensity creates a deeply human, vulnerable sonic identity.',
    Theme: 'Personal growth, self-discovery, young love, emotional vulnerability, and the search for authenticity. The album reflects the mental and emotional transitions that come with stepping out of adolescence and learning to communicate honestly. Themes of longing, confusion, fear, and tenderness run through the project, painting a portrait of someone learning to navigate their heart in real time. It’s about both the beauty and the discomfort of becoming emotionally mature.',
    Inspiration: 'Shawn crafted the album during a period where he wanted to break free from the image of a “teen pop star” and show a more honest, raw version of himself. He drew inspiration from acoustic storytellers, soulful ballads, and his own experiences with love and emotional pressure. Illuminate represents his first major step into deeper songwriting—songs built not just to sound good, but to express truth, vulnerability, and emotional depth. The project reflects late-night writing sessions, realizations about relationships, and a desire to grow both musically and personally.',
    bgCol: 'lightgreen',
    wall: '/images/mendes.webp'
  },
  {
    id: 5,
    name: [
      'I Wanna Be Yours',
      "A certain romance"
    ],
    artist: 'Arctic Monkeys',
    artistImg: '/images/arctic.jpeg',
    songs: [
      { name: 'I Wanna Be Yours', file: '/songs/am.mp3' },
      { name: 'A certain romance', file: '/songs/rom.mp3' }
    ],
    image: '/images/arctic.jpeg',
    Genre: 'Indie Rock / Alternative Rock',
    Release: 'September 9, 2013',
    Album: 'AM',
    type: 'Album',
    Sound: 'A seductive, late-night fusion of indie rock, alternative grooves, desert rock energy, and hip-hop-inspired rhythms. Heavy, rolling basslines give the album a moody heartbeat, while minimalist guitar riffs slice through with sharp attitude. The production feels smoky, stylish, and nocturnal—like a slow walk through dimly lit streets at midnight. Alex Turner’s vocals add a suave, poetic swagger, blending cool detachment with emotional ache. The sound is both raw and polished, edgy yet hypnotic, creating a unique musical identity that defined a new era for the band.',
    Theme: 'Desire, emotional tension, late-night thoughts, romantic confusion, and the restless energy of being young and unsure. The album captures moments of longing, miscommunication, impulsive choices, and the loneliness hidden inside late-night encounters. Many songs explore complex feelings that surface only after midnight—jealousy, temptation, vulnerability, and introspection. It’s an album about wanting, waiting, regretting, and thinking too much.',
    Inspiration: 'Arctic Monkeys were inspired by the swagger of classic rock, the swagger of 70s desert rock, and the rhythmic influence of hip-hop and R&B. The band sought to reinvent their sound with darker colors and smoother grooves, drawing from nightlife, late-night writing sessions, and emotional experiences that hit hardest in the quiet hours. Alex Turner’s poetic lyricism, cinematic imagery, and fascination with the moods of nighttime all shape the album’s identity. AM represents the band stepping into a bold, mature, and stylish new phase.',
    bgCol: 'black',
    wall: '/images/am.jpeg'
  },

  {
    id: 4,
    name: [
      'Blinding Lights',
      'One of the Girls',
      'Starboy'
    ],
    artist: 'The Weeknd',
    artistImg: '/images/weekndAl.jpeg',
    songs: [
      { name: 'Blinding Lights', file: '/songs/lights.mp3' },
      { name: 'One of the Girls', file: '/songs/one.mp3' },
      { name: 'Starboy', file: '/songs/starboy.mp3' }
    ],
    image: '/images/weekndAl.jpeg',
    Genre: 'R&B / Synth-Pop / Alternative',
    Release: 'March 20, 2020',
    Album: 'After Hours',
    type: 'Album',
    Sound: 'A sweeping, cinematic blend of dark synth-pop, alternative R&B, and 80s-inspired electronic textures. Pulsing bass and haunting synth pads fill the soundscape with emotional weight, while reverb-soaked vocals create a sense of haunting loneliness. The production feels like wandering through neon-lit city streets at 3AM—cold, beautiful, and echoing with internal conflict. Retro drum machines and atmospheric layering give the project a timeless yet futuristic edge, merging nostalgic aesthetics with modern emotional storytelling.',
    Theme: 'Heartbreak, inner turmoil, destructive habits, emotional isolation, and the painful contrast between external success and internal emptiness. The album explores the psychological fallout of fame, regret from past decisions, and the struggle to maintain real connection amidst chaos. Themes of guilt, desire, longing, self-destruction, and desperate self-reflection shape the narrative, turning the project into a journey through emotional darkness.',
    Inspiration: 'The Weeknd drew inspiration from his personal struggles, failed relationships, and the emotional weight of living in the public eye. Visually and musically, the album is influenced by 80s cinema, noir storytelling, retro synth soundtracks, and psychological thrillers. The project serves as a confession, a character study, and a symbolic exploration of his inner demons. It reflects sleepless nights, personal realizations, and his desire to craft a cohesive emotional world where every sound and theme fits into a larger narrative.',
    bgCol: 'crimson',
    wall: '/images/week.avif'
  },


];

export default album;
