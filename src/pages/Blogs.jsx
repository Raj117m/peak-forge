import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './Blogs.css';

const allBlogs = [
  {
    id: 'calisthenics-1',
    sport: 'Calisthenics',
    author: 'Rajdeep Malladeb',
    title: 'I Tried the Best Gyms in the City and Ended Up Training in My Society',
    preview: 'I have trained at some genuinely good gyms. Cult.Fit for the classes, a proper iron gym for heavy lifting...',
    image: '/images/home_gym_trainer_one_1775556043274.png',
    content: (
      <>
        <p>I have trained at some genuinely good gyms. Cult.Fit for the classes, a proper iron gym for heavy lifting, even a premium place near college that had everything — cables, racks, turf, the full setup. I was serious about it. Paid the fees, showed up consistently, tracked my lifts.</p>
        <div className="paywalled-content">
          <p>But second year of college hit and everything started falling apart logistically.</p>
          <div className="live-element pulse-border" />
          <p>My mornings started with catching a Cityflo to college. By the time lectures ended and I got back it was already evening with barely any energy left. The bus was comfortable enough but the schedule was fixed — miss it and your whole day shifts. Between that and assignments piling up, the gym kept slipping. Missing two days became missing a week. That week became a month.</p>
          <p><mark>The gym wasn't the problem. Fitting it into an actual college day was.</mark></p>
          <div className="blog-image-wrapper">
             <img src="/images/home_gym_inner_one_1775556077648.png" alt="Training" />
          </div>
          <p>A trainer started coming to my society gym three times a week. No commute, no rushing, no losing an evening to travel. Just walking downstairs and getting to work.</p>
          <p>But what actually surprised me was how good the training itself was. This guy knew both worlds — heavy compound lifting and bodyweight progressions. He built a programme combining whatever equipment the society gym had with calisthenics work.</p>
          <p>What I didn't know before was that compound bodyweight movements recruit more muscle fibres simultaneously than most isolation machine exercises. Your stabiliser muscles are working constantly through every rep. That's something a cable machine simply doesn't replicate the same way.</p>
          <p><strong>Within three months my strength was better than at any premium gym I had paid for.</strong></p>
          <div className="highlight-box">
             <p>No missed Cityflo panic. No wasted evenings. Just training that finally fit around my actual life.</p>
          </div>
        </div>
      </>
    )
  },
  {
    id: 'calisthenics-2',
    sport: 'Calisthenics',
    author: 'Rajdeep Malladeb',
    title: 'The Best Gym I Ever Trained at Was in My Own Society',
    preview: 'For almost two years I did everything right on paper. Premium membership, four sessions a week, structured programmes...',
    image: '/images/home_gym_reflective_two_1775556120148.png',
    content: (
      <>
        <p>For almost two years I did everything right on paper. Premium membership, four sessions a week, structured programmes, progressive overload tracked properly. Barbell work, cable machines, free weights — I genuinely enjoyed it and was making real progress.</p>
        <div className="paywalled-content">
          <p>Then third semester started and everything got complicated.</p>
          <div className="live-element expand-line" />
          <p>My entire morning revolved around catching the Cityflo on time. Miss it and college timing falls apart completely. So I was up early, out fast, in college till late afternoon, back home by evening completley drained. The idea of then changing and heading across the city to a gym felt genuinely unrealistic on most days.</p>
          <div className="blog-image-wrapper">
             <img src="/images/home_gym_inner_two_1775556149354.png" alt="Society Gym Training" />
          </div>
          <p><mark>I tried pushing through it for a while. But motivation doesn't survive a packed schedule indefinetly.</mark> Slowly my consistency — something I had built carefully over months — just collapsed quietly.</p>
          <p>A trainer started coming to my society gym three mornings a week, right before my Cityflo timing. That one decision changed everything. The gym was literally in my building. No excuses, no travel, no wasted time.</p>
          <p>The quality of training surprised me more than the convenience did though. This trainer understood both heavy lifting and skill based calisthenics properly. He explained things no commercial gym trainer ever had.</p>
          <p>That bodyweight training naturally increases time under tension. That movements like scapular pull ups and controlled dip progressions build tendon strength that regular machine work often neglects completley. That slow boring progressions compound into real strength over months even when daily progress feels invisible.</p>
          <p><strong>I started basic. Improved slowly. Showed up every single day because the gym was always just downstairs.</strong></p>
          <div className="highlight-box">
             <p>Removing the logistical friction was honestly the most important fitness decision I ever made.</p>
          </div>
        </div>
      </>
    )
  },
  {
    id: 'football-1',
    sport: 'Football',
    author: 'Faisal',
    title: 'The Beautiful Game',
    preview: 'Football, often called the “beautiful game,” is more than just a sport. It’s a universal language...',
    image: 'https://images.unsplash.com/photo-1518605368461-1e129615eab4?auto=format&fit=crop&q=80&w=800',
    content: (
      <>
        <p>Football, often called the “beautiful game,” is more than just a sport. It’s a universal language that connects millions across cultures, continents, and generations. From crowded streets in Mumbai to massive stadiums in Europe, the passion for football is unmatched.</p>
        <div className="paywalled-content">
          <p>At its core, football is simple: 22 players, one ball, and 90 minutes. Yet, within that simplicity lies incredible depth. There is strategy, teamwork, skill, and emotion. Legends like Lionel Messi and Cristiano Ronaldo have turned the sport into an art form, inspiring young players to dream big and work hard.</p>
          <div className="live-element pulse-border" />
          <p>Major tournaments such as the FIFA World Cup bring the world together like few events can. Countries pause, rivalries ignite, and unforgettable moments happen. Last-minute goals, dramatic penalties, and underdog victories all become part of history.</p>
          <div className="blog-image-wrapper">
            <img src="https://images.unsplash.com/photo-1574629810360-7efbb1925536?auto=format&fit=crop&q=80&w=800" alt="Grassroots football" />
          </div>
          <p><mark>Beyond the professional stage, football thrives at the grassroots level.</mark> It is played in schools, parks, and narrow alleys, needing little more than a ball and open space. This accessibility makes football truly global. <strong>It teaches discipline, teamwork, and resilience.</strong> These values extend far beyond the pitch.</p>
          <p>In recent years, football has evolved with technology, analytics, and global broadcasting, making it more engaging than ever. Fans can now follow their teams and players in real time. This creates a deeper connection with the game.</p>
          <p>Ultimately, football is not just about winning or losing. It’s about the joy of play, the thrill of competition, and the unity it fosters among people. Whether you are a player or a fan, football finds a way to become a part of your life. Once you fall in love with it, there is no going back.</p>
        </div>
      </>
    )
  },
  {
    id: 'football-2',
    sport: 'Football',
    author: 'Faisal',
    title: 'Football: The Game That Feels Like Home',
    preview: 'Football isn’t just a sport—it’s something you feel. It’s that excitement before a match starts...',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=800',
    content: (
      <>
        <p>Football isn’t just a sport—it’s something you feel. It’s that excitement before a match starts, the tension during a close game, and the pure joy when your team scores. Even if you’re not on the field, somehow, you’re part of it.</p>
        <div className="paywalled-content">
          <p>Think about it—how many times have you played football with friends, using anything as a goalpost? No fancy equipment, no rules sometimes, just fun. That’s the beauty of it. Football doesn’t ask for much, but it gives you so much in return.</p>
          <div className="live-element expand-line" />
          <p>For fans, it goes even deeper. <mark>Supporting a club like Manchester United or FC Barcelona isn’t just about watching matches—it becomes a part of who you are.</mark> You celebrate the wins like your own achievements and feel the losses just as strongly. Match days turn into little festivals, whether you're at a stadium or just watching with friends.</p>
          <div className="blog-image-wrapper">
            <img src="https://images.unsplash.com/photo-1486286701208-1d58e833161c?auto=format&fit=crop&q=80&w=800" alt="Match day" />
          </div>
          <p>And then there are those moments—last-minute goals, unexpected victories, or even heartbreaking defeats—that stay with you for years. That’s what makes football so real. It’s unpredictable, emotional, and completely alive.</p>
          <div className="highlight-box">
            <p><strong>In the end, football is about connection.</strong> It brings people together, creates memories, and gives you stories to tell. Whether you’re playing on a dusty ground or watching on a screen, football always finds a way to feel like home.</p>
          </div>
        </div>
      </>
    )
  },
  {
    id: 'cricket-1',
    sport: 'Cricket',
    author: 'Maanya Jain',
    title: 'Why Cricket Feels Like More Than Just a Game',
    preview: 'Cricket has always been more than a sport for me. It’s something I’ve grown up watching, discussing...',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800',
    content: (
      <>
        <p>Cricket has always been more than a sport for me. It’s something I’ve grown up watching, discussing, and even playing with friends in my building. For many people, especially in India, cricket isn’t just a game; it’s part of everyday life. When our Indian players take the field everyone comes close together and they cheers,celebrate. <strong>In short its like a Sea of blue waves specially in stadium.</strong></p>
        <div className="paywalled-content">
          <p>What makes cricket so special is the emotions it brings out. One moment you’re stressed while watching a close match, and the next you’re celebrating after a big win. Even those who don’t usually follow sports get involved when there’s an important match.</p>
          <div className="live-element expand-line" />
          <p><mark>One of the best things about cricket is that anyone can play it.</mark> You don’t need a proper field or expensive gear. Growing up, we played with a tennis ball and random items as wickets. Those small games were just as fun as watching international matches.</p>
          <div className="blog-image-wrapper">
            <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800" alt="Cricket memories" />
          </div>
          <p>Cricket has also changed a lot over time. Matches used to last for days, but now shorter formats like T20 make the game more exciting and fast. It’s easier for people to watch and enjoy, especially with busy schedules.</p>
          <p>At the same time, the game teaches important lessons like teamwork, patience, and handling pressure. Whether it’s a professional player or someone playing for fun, these lessons always apply.</p>
          <div className="highlight-box">
            <p>In the end, cricket is not just about runs or wickets. It’s about the memories, the excitement, and how it brings people together. That’s what makes it truly special.</p>
          </div>
        </div>
      </>
    )
  },
  {
    id: 'cricket-2',
    sport: 'Cricket',
    author: 'Maanya Jain',
    title: 'Cricket Has Changed A Lot Over Time',
    preview: 'If we look at cricket now and compare it to how it was played the difference is really big...',
    image: 'https://images.unsplash.com/photo-1624526267942-ab0f0b5800ca?auto=format&fit=crop&q=80&w=800',
    content: (
      <>
        <p>If we look at cricket now and compare it to how it was played the difference is really big. Cricket has changed a lot mostly to make it more fun for people who watch it today.</p>
        <div className="paywalled-content">
          <p>Before people mostly played Test cricket and matches went on for five days. This type of cricket required a lot of skill and patience. Not everyone had the time to watch such long matches. That is when shorter types of cricket started to become popular.</p>
          <div className="live-element pulse-border" />
          <p>First we got One Day Internationals, which made cricket shorter and more exciting because there was a result at the end.. The thing that really changed cricket was T20 cricket. Because T20 matches last a few hours it became more fun and easier to watch. Even people who did not like cricket that much started to enjoy it.</p>
          <p><mark>Another big change in cricket is the use of technology like computers and special machines.</mark> Things like replays, decision reviews and ball tracking make cricket more fair and accurate. It also makes watching cricket fun because you can see everything that happens.</p>
          <div className="blog-image-wrapper">
            <img src="https://images.unsplash.com/photo-1588661730048-2bfaaee32882?auto=format&fit=crop&q=80&w=800" alt="Cricket technology" />
          </div>
          <p>Cricket players today are also much healthier and more serious about the game. They practice harder. Focus a lot on how they play. Cricket is not just about being good at the game it is also about being disciplined and consistent.</p>
          <p>With all the changes the main idea of cricket is still the same. It is still, about working as a team having a good plan and enjoying cricket.</p>
          <p>Overall cricket has stayed popular because it has changed with the times. That is probably why so many people still love cricket. <strong>In cricket it is said that this game is not for the weak hearted person. Its a game of margins.</strong></p>
        </div>
      </>
    )
  },
  {
    id: 'powerlifting-1',
    sport: 'Powerlifting',
    author: 'PeakForge Science',
    title: 'What\'s Actually Happening in Your Muscles When You Max Out',
    preview: 'Most powerlifters think about the bar. The weight. The attempt. But the real story of a heavy lift starts somewhere most people never think about...',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800',
    content: (
      <>
        <p>Most powerlifters think about the bar. The weight. The attempt. But the real story of a heavy lift starts somewhere most people never think about — a cluster of neurons sitting in your spinal cord.</p>
        <div className="paywalled-content">
          <p>Every muscle contraction you've ever made began with a motor neuron firing an electrical signal. That signal, called an action potential, travels down the axon at up to 80 metres per second and reaches your muscle fibers in milliseconds. When it arrives, calcium floods into the muscle cell, and that's what actually triggers your contractile proteins to grab onto each other and produce force. No calcium release, no contraction. It's that mechanical.</p>
          <div className="live-element pulse-border" />
          <p><mark>Here's something that should change how you think about training heavy.</mark> Your nervous system recruits motor units in a specific order — always smallest first, largest last. The large, powerful fast-twitch units only come online when the demand is genuinely high. This is called the Size Principle. It means grinding through near-maximal attempts isn't just building muscle. It's teaching your nervous system to access the units it otherwise keeps in reserve.</p>
          <div className="blog-image-wrapper">
             <img src="https://images.unsplash.com/photo-1584466977773-e625c37cdd50?auto=format&fit=crop&q=80&w=800" alt="Powerlifting Barbell" />
          </div>
          <p>Rate coding matters just as much as recruitment. A motor unit firing at higher frequency produces dramatically more force than the same unit firing slowly. Research shows that discharge rates can double after several weeks of strength training — which explains why you get stronger before you visibly get bigger. <strong>The neural adaptation comes first.</strong></p>
          <p>The type FF motor units — the ones responsible for explosive, heavy output — fatigue fast. That's by design. They're not built for endurance. They're built for moments. Max attempts, competition lifts, PRs.</p>
          <p>Train accordingly. Heavy, infrequent, intentional.</p>
          <div className="highlight-box">
             <p><strong>References:</strong> Enoka, R.M. <em>Motor Unit</em>. Physiology of the Motor Neuron and the Motor Unit. In: Handbook of Clinical Neurophysiology, Vol. 4 (Ed. Eisen, A.), Elsevier, 2004.</p>
          </div>
        </div>
      </>
    )
  },
  {
    id: 'powerlifting-2',
    sport: 'Powerlifting',
    author: 'PeakForge Science',
    title: 'The Weight Cut Conversation Nobody in Powerlifting Is Having Honestly',
    preview: 'Almost nine out of ten competitive powerlifters cut weight before a meet. Most of them learned how from a training partner or a random post online...',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    content: (
      <>
        <p>Almost nine out of ten competitive powerlifters cut weight before a meet. Most of them learned how from a training partner or a random post online. That gap between how common it is and how poorly it's understood is where athletes get hurt.</p>
        <div className="paywalled-content">
          <p>The research breaks down weight cutting into three main methods: reducing gut content, depleting glycogen, and losing water. Each one works differently and carries a different risk profile.</p>
          <div className="live-element expand-line" />
          <p>The gut cut is the most overlooked and probably the safest starting point. Dropping dietary fiber below 10 grams per day for three to four days can reduce body mass by up to 0.75% — without touching hydration or energy levels. <mark>The catch is that the popular "nuts and candy" version of this approach is physiologically backwards.</mark> Nuts are high in fiber. Candy and ice cream contain less water than plain white rice. If you're doing a gut cut but eating almonds and gummy bears, you're likely actually dehydrating yourself without realising it.</p>
          <p>Glycogen depletion matters less in powerlifting than in most sports. A max squat or deadlift is an alactic effort — it runs on phosphocreatine, not stored carbohydrate. Multiple studies show short-term carbohydrate restriction doesn't meaningfully hurt maximal strength. This is one area where powerlifting is genuinely different from team sports.</p>
          <p>Dehydration is where things get dangerous fast. Cuts beyond 3% of body mass carry real risks — acute kidney stress, cardiovascular strain, and strength loss that may not fully reverse in a two-hour weigh-in window.</p>
          <div className="highlight-box">
             <p>The bottom line: start with the gut, use glycogen depletion carefully, treat dehydration as a last resort, and always have a rehydration plan ready the moment you step off the scale.</p>
          </div>
          <p><strong>References:</strong> Renner, A., Helms, E.R., Csapo, R. et al. <em>Short-Term Body Mass Management in Powerlifting.</em> Journal of the International Society of Sports Nutrition, 2025.</p>
        </div>
      </>
    )
  },
  {
    id: 'swimming-1',
    sport: 'Swimming',
    author: 'Kaushik Roy',
    title: 'The Pool Doesn\'t Lie',
    preview: 'I used to think clarity was something you found by sitting still. Journaling, breathing exercises, all of it. Tried most of them...',
    image: 'https://images.unsplash.com/photo-1519315901367-f34f9274ce80?auto=format&fit=crop&q=80&w=800',
    content: (
      <>
        <p>I used to think clarity was something you found by sitting still. Journaling, breathing exercises, all of it. Tried most of them. None of it stuck the way the water did.</p>
        <div className="paywalled-content">
          <p>There's a specific moment in a long freestyle set — maybe four or five laps in — where your brain stops negotiating. You're not thinking about tomorrow. You're not replaying a conversation from last week. You're just counting strokes, managing your breath, hitting the wall and turning. That's it. The rest of the world goes quiet without you asking it to.</p>
          <div className="live-element pulse-border" />
          <p><mark>What I didn't expect from swimming was how much it would teach me about fear.</mark> The deep end of a pool, when you first encounter it as a kid, is genuinely terrifying. There's nothing rational about it but the panic is completely real. Learning to stay calm and keep moving in a situation where every instinct tells you to freeze — that's not a swimming skill. <strong>That's a life skill.</strong></p>
          <div className="blog-image-wrapper">
             <img src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=800" alt="Swimming pool" />
          </div>
          <p>Floating taught me something too. You can't force it. Tense up, and you sink. Try too hard, and you sink. The moment you stop fighting the water and just trust it, your body rises. I've thought about that more times than I can count in situations that had nothing to do with a pool.</p>
          <p>And the flow state swimming puts you in is different from anything else. You're moving fast, working hard, lungs burning — and somehow it feels like rest. Not the rest of doing nothing. The rest of being completely present.</p>
          <div className="highlight-box">
             <p>Most sports give you a workout. Swimming gives you that plus ten minutes of silence inside your own head. That's harder to find than people realise.</p>
          </div>
        </div>
      </>
    )
  },
  {
    id: 'taekwondo-1',
    sport: 'Taekwondo',
    author: 'Kaushik Roy',
    title: 'What the Mat Actually Teaches You',
    preview: 'Most people hear Taekwondo and think kicks, competitions, breaking boards. That\'s the surface. Spend a few real years on the mat...',
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=800',
    content: (
      <>
        <p>Most people hear Taekwondo and think kicks, competitions, breaking boards. That's the surface. Spend a few real years on the mat and you realise the sport is about something quieter than any of that.</p>
        <div className="paywalled-content">
          <p>The physical side is obvious. You get fitter, faster, more coordinated. But the thing nobody warns you about is what consistent hard training does to your head. When you've drilled the same combination forty times and your legs are burning and you still haven't got it clean — and then you go back the next day and try again — something shifts in how you handle difficulty in general. <mark>The mat conditions you to not quit when things are uncomfortable. That carries.</mark></p>
          <div className="live-element expand-line" />
          <p>A good Taekwondo coach doesn't motivate you with speeches. They just show up, correct your form, and expect you to do the same. That kind of quiet consistency is more instructive than anything they could say. <strong>You learn that improvement isn't dramatic. It's just repetition, done honestly, over a long time.</strong></p>
          <div className="blog-image-wrapper">
             <img src="https://images.unsplash.com/photo-1580261450046-d0a30080fa9f?auto=format&fit=crop&q=80&w=800" alt="Taekwondo kicks" />
          </div>
          <p>What surprised me most was what exhaustion felt like after a real session. Not the tired you feel after a bad day. Something cleaner. When your body has genuinely emptied itself out, your mind stops running in circles. There's nothing left to burn. And in that stillness — hair plastered, uniform soaked, lungs pulling deep — everything that had been loud goes quiet.</p>
          <p>I think people underestimate how much mental noise gets resolved through physical effort. Not because you've solved anything. Simply because you've used everything you had and there's nothing left to worry with.</p>
          <div className="highlight-box">
             <p>Taekwondo gave me that regularly. A repeatable way to find stillness by going through exhaustion first. Most people are still searching for a shortcut to that feeling. There isn't one.</p>
          </div>
        </div>
      </>
    )
  },
  {
    id: 'basketball-1',
    sport: 'Basketball',
    author: 'Satvik Nalawde',
    title: 'The History of Basketball: From Innovations to Global Phenomenon',
    preview: 'Basketball is one of the most popular sports in the world today, but its history is not ancient when compared to other sports...',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800',
    content: (
      <>
        <p>Basketball is one of the most popular sports in the world today, but its history is not ancient when compared to other sports and games. Basketball was invented in 1891 by James Naismith, who was a physical education instructor in the United States, in a college called Springfield College. Naismith was given the task of inventing an indoor game that could be played during the cold winter months when physical education activities could not be performed outdoors. Naismith came up with a set of 13 simple rules and used a soccer ball and two peach baskets as the goalposts, and thus basketball came into existence.</p>
        <p>Basketball soon became popular through the YMCA movement and spread throughout the United States and eventually other parts of the world. It became one of the most popular sports in the United States and other countries in the early 20th century, and in 1936, basketball became an official game in the Olympics.</p>
        <div className="live-element expand-line" />
        <p>The modern version of professional basketball started developing in the mid-20th century with the creation of basketball leagues, the most famous of which is the NBA, established in 1946. This led to the development of basketball into a worldwide phenomenon, featuring some of the most legendary basketball players and spreading the popularity of the game through television.</p>
        <div className="blog-image-wrapper">
          <img src="https://images.unsplash.com/photo-1519861531473-920026076248?auto=format&fit=crop&q=80&w=800" alt="Basketball history" />
        </div>
        <p>Basketball has developed significantly in the past few decades, changing the rules, equipment, and the way the players play the game. Basketball has also had a great impact on the lives of millions of people around the world.</p>
        <div className="highlight-box">
          <p>Basketball is now practiced at both amateur and professional levels worldwide. From its humble origins in a small gymnasium to its current status as a global game, the history of basketball is one of innovation, expansion, and popularity.</p>
        </div>
      </>
    )
  },
  {
    id: 'basketball-2',
    sport: 'Basketball',
    author: 'Satvik Nalawde',
    title: 'The Global Growth of Basketball',
    preview: 'Basketball is one of the fastest-growing sports globally. According to global studies, the fan base of the sport is above 3.3 billion...',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800',
    content: (
      <>
        <p>Basketball is one of the fastest-growing sports globally. According to global studies, the fan base of the sport is above 3.3 billion, making it one of the most watched sports globally, next to soccer or football. According to the FIBA website, the popularity of the sport has increased globally in recent times, especially among the younger age group of 16-29 years, where nearly 80% show their interest in the sport.</p>
        <p>The popularity of basketball globally can be largely attributed to the NBA. The NBA is watched in more than 215 countries, showing the popularity of the sport globally. It is watched by more than 1.5 billion people every year. Recently, the NBA has seen increased popularity in its viewership, with record-breaking television ratings and increased social media engagement. This shows how the sport has adapted to the changing trends of the modern era.</p>
        <div className="live-element pulse-border" />
        <p>Another important factor in the contemporary global standing of basketball is the increasing number of international players. Players from Europe, Asia, and Africa are now superstars, making the sport more diverse and representative globally. Furthermore, there are increasing grassroots programs and youth development initiatives in places like Europe and Asia, which are strengthening the foundation of the sport globally.</p>
        <div className="blog-image-wrapper">
          <img src="https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=800" alt="Global basketball" />
        </div>
        <p>Basketball is also becoming more economically viable. The basketball market is expected to grow considerably in the coming years, both globally and at the individual level. This is due to the increasing number of players, urbanization, and the need for sports equipment.</p>
        <p>The increasing number of emerging economies is also adding to the growth of the basketball market globally. More courts are being built, providing more opportunities for players.</p>
        <div className="highlight-box">
          <p>In conclusion, the current state of basketball globally is very positive. With its enormous fan base, rising talent pool, extensive media coverage, and economic boom, the sport is continuing to grow beyond its geographical limits. Basketball is not just a sport; it is a global cultural phenomenon that is dictating the future of sports globally.</p>
        </div>
      </>
    )
  }
];

const categories = ['Calisthenics', 'Football', 'Cricket', 'Swimming', 'Powerlifting', 'Taekwondo', 'Basketball'];

function Blogs() {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sportParam = queryParams.get('sport');
  const idParam = queryParams.get('id');

  // Find user and trigger explicit Analytics click inside the Blog read page
  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        const parsed = JSON.parse(userStr);
        setUser(parsed);
      } catch(e) { }
    }

    if (idParam) {
      // ONLY trigger analytics click when they open a specific article!
      let anonId = localStorage.getItem('anon_id');
      if (anonId && !userStr) {
        // Send actual click directly via supabase RPC or generic update
        const trackAnalytics = async () => {
          const { data: anonData } = await supabase.from('anonymous_analytics').select('clicks').eq('anon_id', anonId).single();
          if (anonData) {
            await supabase.from('anonymous_analytics').update({ clicks: (anonData.clicks || 0) + 1 }).eq('anon_id', anonId);
          }
        };
        trackAnalytics();
      }
    }
  }, [idParam]);

  // Find particular blog if ID is selected
  const activeBlog = idParam ? allBlogs.find(b => b.id === idParam) : null;

  // Filter blogs if sport is selected but no ID
  const displayedBlogs = sportParam 
    ? allBlogs.filter(b => b.sport.toLowerCase() === sportParam.toLowerCase())
    : [];

  return (
    <div className="blogs-page container fade-in">
      
      {!activeBlog ? (
        <>
          <h1 className="page-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            {sportParam ? `${sportParam} ` : 'Performance '} <span>Insights</span>
          </h1>

          {!sportParam && (
             <div className="categories-grid">
               {categories.map(c => (
                 <Link key={c} to={`/blogs?sport=${c}`} className="category-card live-hover">
                   <h3>{c}</h3>
                   <div className="category-overlay">Explore Articles</div>
                 </Link>
               ))}
             </div>
          )}

          {sportParam && (
            <div className="selected-category-container">
              <Link to="/blogs" className="back-link">← Back to Categories</Link>
              {displayedBlogs.length === 0 ? (
                <div className="coming-soon-wrapper">
                  <h2 className="coming-soon-text" style={{fontSize: '2rem'}}>Coming Soon</h2>
                  <p>Content for {sportParam} is actively being developed.</p>
                </div>
              ) : (
                <div className="blog-grid active-grid">
                  {displayedBlogs.map(blog => (
                    <Link to={`/blogs?sport=${sportParam}&id=${blog.id}`} key={blog.id} className="blog-card live-hover">
                      <div className="blog-image" style={{ backgroundImage: `url(${blog.image})` }}></div>
                      <div className="blog-content">
                        <h4>{blog.title}</h4>
                        <p>{blog.preview}</p>
                        <p style={{fontSize: '0.8rem', color: 'var(--accent)', marginTop: 'auto', marginBottom: '10px'}}>By {blog.author}</p>
                        <span className="read-more">Read Full Article →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      ) : (
        <article className="full-blog-container live-reveal">
          <Link to={`/blogs?sport=${sportParam}`} className="back-link">← Back to {sportParam}</Link>
          <div className="blog-hero" style={{ backgroundImage: `url(${activeBlog.image})` }}>
            <div className="blog-hero-overlay">
              <span className="blog-tag pulse-border">{activeBlog.sport}</span>
              <h1 className="blog-master-title">{activeBlog.title}</h1>
              <p className="blog-author-label">Written by {activeBlog.author}</p>
            </div>
          </div>
          
          <div className="blog-body">
            {activeBlog.content}
          </div>
        </article>
      )}
    </div>
  );
}

export default Blogs;
