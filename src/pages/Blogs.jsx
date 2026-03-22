import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Blogs.css';

const dummyBlogs = [
  {
    id: 1,
    sport: 'General',
    title: 'The Science of Hypertrophy',
    preview: 'Building muscle takes more than just lifting heavy weights. It requires a proper understanding of progressive overload...',
    full: 'Building muscle takes more than just lifting heavy weights. It requires a proper understanding of progressive overload, nutrition, and rest. During high-intensity resistance training, micro-tears occur in the muscle fibers. In the recovery phase, satellite cells rush to the damaged areas, fusing to muscle fibers and increasing the cross-sectional area. It is vital to consume 1.6-2.2g of protein per kg of bodyweight to optimize this repair process.'
  },
  {
    id: 2,
    sport: 'Football',
    title: 'Explosive Speed on the Pitch',
    preview: 'Football demands rapid acceleration and deceleration. Here is how you structure your plyometrics...',
    full: 'Football demands rapid acceleration and deceleration. Here is how you structure your plyometrics. Focusing on single-leg bounds and broad jumps can directly translate to breakaway speed. Additionally, developing hamstring strength via Nordic curls acts as an armor against common sprint-related injuries.'
  },
  {
    id: 3,
    sport: 'Cricket',
    title: 'Rotational Power for Batsmen',
    preview: 'Generating boundary-clearing power starts from the ground up, moving through your hips and core before reaching the bat...',
    full: 'Generating boundary-clearing power starts from the ground up, moving through your hips and core before reaching the bat. Anti-rotational exercises like Pallof presses combined with explosive medicine ball throws will drastically increase your striking force. Furthermore, ankle mobility ensures a stable base during the shot execution.'
  },
  {
    id: 4,
    sport: 'Swimming',
    title: 'Lactate Threshold Training',
    preview: 'For endurance swimmers, pushing the lactate threshold is key. Interval training in the pool alters your metabolic clearance rate...',
    full: 'For endurance swimmers, pushing the lactate threshold is key. Interval training in the pool alters your metabolic clearance rate, allowing you to maintain a higher pace without fatiguing. Incorporating 100m repeats with tight rest intervals forces cellular adaptation.'
  },
  {
    id: 5,
    sport: 'Powerlifting',
    title: 'Mastering the Setup',
    preview: 'Before the bar even moves, the lift is decided. Tension, bracing, and grip mechanics are foundational...',
    full: 'Before the bar even moves, the lift is decided. Tension, bracing, and grip mechanics are foundational. The Valsalva maneuver creates intra-abdominal pressure that protects the spine. Engaging your lats to "bend" the bar on your back ensures upper back rigidity.'
  },
  {
    id: 6,
    sport: 'Calisthenics',
    title: 'Unlocking the Planche',
    preview: 'The planche is the ultimate test of straight-arm strength. It demands immense shoulder flexion strength and lower back control...',
    full: 'The planche is the ultimate test of straight-arm strength. It demands immense shoulder flexion strength and lower back control. Start with tuck planches and pseudo planche pushups. Consistency and tendon conditioning are required as the biceps tendon is placed under massive strain.'
  },
  {
    id: 7,
    sport: 'Taekwondo',
    title: 'Dynamic Flexibility for High Kicks',
    preview: 'Head kicks require not just passive flexibility, but active mobility. You need the strength to lift the leg into position...',
    full: 'Head kicks require not just passive flexibility, but active mobility. You need the strength to lift the leg into position. Combining PNF stretching with isometric holds at end-ranges will trick your nervous system into releasing muscle tension, allowing for faster and higher strikes.'
  },
  {
    id: 8,
    sport: 'Bonus',
    title: '🏆 TOP SECRET: The Mastery Blueprint',
    preview: 'Congratulations on beating the high score! Here is your exclusive insight into ultimate neurological adaptation...',
    full: 'Congratulations on beating the high score! Here is your exclusive insight into ultimate neurological adaptation.\n\n The secret to continuous peak performance is periodized nervous system down-regulation, often achieved through heart rate variability (HRV) biofeedback breathing. 5 minutes of resonance frequency breathing post-workout flips your nervous system from sympathetic overload to parasympathetic repair instantly.\n\nBut that is just the beginning. Real mastery requires syncing your circadian rhythms with your intensive training blocks. Elite athletes plan their max-effort sessions exactly during their body temperature peak, usually between 2:00 PM and 6:00 PM. By doing this, they literally hijack their biological clock to recruit an additional 10-15% of high-threshold motor units during lifts.\n\nFurthermore, neuroplasticity is driven by a chemical cascade initiated by intense focus followed immediately by deep rest (non-sleep deep rest or NSDR). Once you complete a heavy session, attempting to learn a new skill or immediately engaging in high-stress mental tasks completely blunts adaptation. Instead, lying perfectly still for exactly 12 minutes in a dark room allows your brain to replay the newly learned motor patterns at 20 times normal speed. Yes, you are actively learning while doing nothing!\n\nKeep crushing those scores, champion, and never stop optimizing your hardware!'
  }
];

const sportDescriptions = {
  Cricket: 'Cricket demands agility, robust rotational core strength, and explosive power for striking and fast bowling.',
  Football: 'Football emphasizes aerobic endurance, multi-directional sprinting, and lightning-fast agility.',
  Taekwondo: 'Taekwondo focuses on explosive leg power, rapid hip rotation, and extreme dynamic flexibility.',
  Swimming: 'Swimming requires high VO2 max, muscular endurance, and flawless biomechanical efficiency.',
  Calisthenics: 'Calisthenics relies on superior relative body strength, joint stability, and total body alignment.',
  Powerlifting: 'Powerlifting is the ultimate expression of absolute strength, requiring peak neurological output and flawless technique.',
  Bonus: 'You proved your clicking prowess! Enjoy this exclusive, secret knowledge reserved only for champions.'
};

function Blogs() {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const sportParam = queryParams.get('sport');

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        const parsedUser = JSON.parse(userStr);
        setUser(parsedUser);
      } catch (e) {
        navigate('/login');
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const displayedBlogs = sportParam 
    ? dummyBlogs.filter(b => b.sport.toLowerCase() === sportParam.toLowerCase())
    : dummyBlogs;

  return (
    <div className="blogs-page container fade-in">
      <h1 className="page-title">
        {sportParam ? `${sportParam} ` : 'Performance '} <span>Insights</span>
      </h1>
      
      {sportParam && sportDescriptions[sportParam] && (
        <div className="sport-description">
          <p>{sportDescriptions[sportParam]}</p>
        </div>
      )}

      {!user && (
        <div className="coming-soon-wrapper">
          <h2 className="coming-soon-text">Exclusive Knowledge</h2>
          <p>Sign in to unlock full access to our premium performance insights.</p>
        </div>
      )}

      <div className="blog-grid active-grid" style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Coming Soon</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>The PeakForge experts are currently finalizing these performance protocols.<br/>Check back shortly for premium content.</p>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
