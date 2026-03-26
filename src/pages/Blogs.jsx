import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Blogs.css';

const allBlogs = [
  {
    id: 'calisthenics-1',
    sport: 'Calisthenics',
    title: 'Why I Quit the Gym and Never Looked Back',
    preview: 'Three years ago I cancelled my gym membership. Honestly? Best decision I made for my body...',
    image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&q=80&w=800',
    content: (
      <>
        <p>Three years ago I cancelled my gym membership. Honestly? Best decision I made for my body.</p>
        <p>I was spending ₹2,400 a month to wait in line for a bench press. Half the time the equipment I needed was taken, the trainer barely knew my name, and I was driving 25 minutes each way just to be there. The whole setup stopped making sense.</p>
        <div className="live-element pulse-border" />
        <p>I started training in my building's terrace with nothing. Pull-up bar bolted to the door frame. That's it. And within four months, I was stronger than I'd ever been at the gym.</p>
        <p><mark>Calisthenics works because it doesn't let you cheat the movement.</mark> You can load a bar with plates and still have terrible mechanics. But when your bodyweight is the resistance, there's nowhere to hide. Your joints, your tendons, your stabilizers — they all get involved. <strong>You build real, functional strength.</strong></p>
        <div className="blog-image-wrapper">
          <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800" alt="Training outside" />
        </div>
        <p>The progression is what keeps you hooked. You start with basic push-ups, then diamond, then archer, then eventually you're working toward a one-arm push-up and suddenly you realise you've been training consistently for months without even thinking about it. The goals feel like puzzles, not chores.</p>
        <p>The biggest myth I keep hearing is that calisthenics can't build size. That's just wrong. Look up any bar athlete who's been training for two to three years. The muscle density is different — thicker, not just bigger — because the time under tension and the range of motion in bodyweight movements are genuinely superior for certain muscle groups.</p>
        <div className="highlight-box">
          <p>You don't need a gym to be serious about training. You need consistency, patience, and enough floor space to do a push-up. Start there. Everything else follows.</p>
        </div>
      </>
    )
  },
  {
    id: 'calisthenics-2',
    sport: 'Calisthenics',
    title: 'The Move That Changed How I Train Forever',
    preview: 'I remember the exact moment calisthenics stopped being a "beginner thing" to me...',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    content: (
      <>
        <p>I remember the exact moment calisthenics stopped being a "beginner thing" to me.</p>
        <p>I was watching a guy at the park do a full planche — body completely horizontal, held off the ground by just his palms. No machines, no weights, no spotter. Just years of work made visible in one still position. I stood there for a full minute just watching.</p>
        <p>That day I went home and started from scratch.</p>
        <div className="live-element expand-line" />
        <p>What most people don't understand about calisthenics is that the skill elements change your relationship with training entirely. In a gym, the goal is usually straightforward — more weight, more reps. That's fine, but it gets old. <mark>Calisthenics introduces a different kind of goal. You're not just building strength; you're learning movement.</mark> The human flag, the muscle-up, the front lever — these aren't just party tricks. They require full-body tension, proprioception, and coordination that standard gym training doesn't develop the same way.</p>
        <div className="blog-image-wrapper">
          <img src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=800" alt="Core rigidity" />
        </div>
        <p>Your core, for example. Every advanced calisthenics skill demands a level of core rigidity that isolating abs on a crunch machine simply doesn't build. <strong>Your whole midsection has to learn to act as a single locked unit.</strong> That carries over into everything — posture, injury prevention, how you move in daily life.</p>
        <p>The outdoor training aspect matters too. There's something about training at a park or on a rooftop that keeps the ego in check. No mirrors, no audience, no one to impress. Just you and the bar and the work.</p>
        <p>The community around calisthenics is also different. Street workout culture tends to attract people who genuinely love movement — not aesthetics, not Instagram, just the craft.</p>
        <p>If you've been going through the motions at the gym, try a month of bodyweight-only training. You'll feel the difference by week two.</p>
      </>
    )
  },
  {
    id: 'football-1',
    sport: 'Football',
    title: 'The Beautiful Game',
    preview: 'Football, often called the “beautiful game,” is more than just a sport. It’s a universal language...',
    image: 'https://images.unsplash.com/photo-1518605368461-1e129615eab4?auto=format&fit=crop&q=80&w=800',
    content: (
      <>
        <p>Football, often called the “beautiful game,” is more than just a sport. It’s a universal language that connects millions across cultures, continents, and generations. From crowded streets in Mumbai to massive stadiums in Europe, the passion for football is unmatched.</p>
        <p>At its core, football is simple: 22 players, one ball, and 90 minutes. Yet, within that simplicity lies incredible depth. There is strategy, teamwork, skill, and emotion. Legends like Lionel Messi and Cristiano Ronaldo have turned the sport into an art form, inspiring young players to dream big and work hard.</p>
        <div className="live-element pulse-border" />
        <p>Major tournaments such as the FIFA World Cup bring the world together like few events can. Countries pause, rivalries ignite, and unforgettable moments happen. Last-minute goals, dramatic penalties, and underdog victories all become part of history.</p>
        <div className="blog-image-wrapper">
          <img src="https://images.unsplash.com/photo-1574629810360-7efbb1925536?auto=format&fit=crop&q=80&w=800" alt="Grassroots football" />
        </div>
        <p><mark>Beyond the professional stage, football thrives at the grassroots level.</mark> It is played in schools, parks, and narrow alleys, needing little more than a ball and open space. This accessibility makes football truly global. <strong>It teaches discipline, teamwork, and resilience.</strong> These values extend far beyond the pitch.</p>
        <p>In recent years, football has evolved with technology, analytics, and global broadcasting, making it more engaging than ever. Fans can now follow their teams and players in real time. This creates a deeper connection with the game.</p>
        <p>Ultimately, football is not just about winning or losing. It’s about the joy of play, the thrill of competition, and the unity it fosters among people. Whether you are a player or a fan, football finds a way to become a part of your life. Once you fall in love with it, there is no going back.</p>
      </>
    )
  },
  {
    id: 'cricket-1',
    sport: 'Cricket',
    title: 'Why Cricket Feels Like More Than Just a Game',
    preview: 'Cricket has always been more than a sport for me. It’s something I’ve grown up watching, discussing...',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800',
    content: (
      <>
        <p>Cricket has always been more than a sport for me. It’s something I’ve grown up watching, discussing, and even playing with friends in my building. For many people, especially in India, cricket isn’t just a game; it’s part of everyday life. When our Indian players take the field everyone comes close together and they cheers,celebrate. <strong>In short its like a Sea of blue waves specially in stadium.</strong></p>
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
      </>
    )
  },
  {
    id: 'cricket-2',
    sport: 'Cricket',
    title: 'Cricket Has Changed A Lot Over Time',
    preview: 'If we look at cricket now and compare it to how it was played the difference is really big...',
    image: 'https://images.unsplash.com/photo-1555519803-fd800dfa43ce?auto=format&fit=crop&q=80&w=800',
    content: (
      <>
        <p>If we look at cricket now and compare it to how it was played the difference is really big. Cricket has changed a lot mostly to make it more fun for people who watch it today.</p>
        <p>Before people mostly played Test cricket and matches went on for five days. This type of cricket required a lot of skill and patience. Not everyone had the time to watch such long matches. That is when shorter types of cricket started to become popular.</p>
        <div className="live-element pulse-border" />
        <p>First we got One Day Internationals, which made cricket shorter and more exciting because there was a result at the end.. The thing that really changed cricket was T20 cricket. Because T20 matches last a few hours it became more fun and easier to watch. Even people who did not like cricket that much started to enjoy it.</p>
        <p><mark>Another big change in cricket is the use of technology like computers and special machines.</mark> Things like replays, decision reviews and ball tracking make cricket more fair and accurate. It also makes watching cricket fun because you can see everything that happens.</p>
        <div className="blog-image-wrapper">
          <img src="https://images.unsplash.com/photo-1624526267942-ab0f0b5800ca?auto=format&fit=crop&q=80&w=800" alt="Cricket technology" />
        </div>
        <p>Cricket players today are also much healthier and more serious about the game. They practice harder. Focus a lot on how they play. Cricket is not just about being good at the game it is also about being disciplined and consistent.</p>
        <p>With all the changes the main idea of cricket is still the same. It is still, about working as a team having a good plan and enjoying cricket.</p>
        <p>Overall cricket has stayed popular because it has changed with the times. That is probably why so many people still love cricket. <strong>In cricket it is said that this game is not for the weak hearted person. Its a game of margins.</strong></p>
      </>
    )
  }
];

const categories = ['Calisthenics', 'Football', 'Cricket', 'Swimming', 'Powerlifting', 'Taekwondo'];

function Blogs() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sportParam = queryParams.get('sport');
  const idParam = queryParams.get('id');

  // Find particular blog if ID is selected
  const activeBlog = idParam ? allBlogs.find(b => b.id === idParam) : null;

  // Filter blogs if sport is selected but no ID
  const displayedBlogs = sportParam 
    ? allBlogs.filter(b => b.sport.toLowerCase() === sportParam.toLowerCase())
    : [];

  return (
    <div className="blogs-page container fade-in" style={{ padding: '4rem 15px' }}>
      
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
