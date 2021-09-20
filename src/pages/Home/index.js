import React, { useRef, useState } from 'react';
import './style.scss';
import { ReactComponent as Scroll } from '../../assets/scroll.svg';
import UdaanVideo from '../../assets/udaan.mp4';
import Slider from 'react-slick';
import { ReactComponent as BackArrow } from '../../assets/left-arrow.svg';
import { ReactComponent as NewArrow } from '../../assets/right-arrow.svg';
import { ReactComponent as Icon1 } from '../../assets/icon1.svg';
import { ReactComponent as Icon2 } from '../../assets/icon2.svg';
import { ReactComponent as Icon3 } from '../../assets/icon3.svg';
import { ReactComponent as Icon4 } from '../../assets/icon4.svg';
import { ReactComponent as Icon5 } from '../../assets/icon5.svg';
import { ReactComponent as Icon6 } from '../../assets/icon6.svg';
import { ReactComponent as Quote } from '../../assets/quote.svg';
import { ReactComponent as Fb } from '../../assets/fb.svg';
import { ReactComponent as Tweet } from '../../assets/tweet.svg';
import { ReactComponent as Yt } from '../../assets/yt.svg';
import { ReactComponent as Insta } from '../../assets/insta.svg';
import GanArn from '../../assets/ganesh_arnaal.png';
import AyusM from '../../assets/ayush_mah.png';
import PankSi from '../../assets/pankaj_singh.png';
import GanRama from '../../assets/ganesh_rama.png';

import Piyush from '../../assets/piyesh.png';
import Isha from '../../assets/Isha.png';
import Souvik from '../../assets/souvik.png';
import Vineet from '../../assets/vineet.png';
import Arjun from '../../assets/arjun.png';
import Harshad from '../../assets/harshad.png';
import Krishna from '../../assets/krishna.png';
import Ajay from '../../assets/ajay.png';
import Sanskar from '../../assets/sanskar.png';
import Yash from '../../assets/yash.png';
import Akanksha from '../../assets/akanksha.png';
import Bidipto from '../../assets/bd.png';
import Akshita from '../../assets/akshita.png';

import P1 from '../../assets/p1.png';
import P2 from '../../assets/p2.png';
import DemoDonation from '../../assets/demo-to-donate.gif';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from '../../component/Modal';
import { db } from '../../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const Goals = [
  {
    icon: <Icon1 />,
    text: 'Web Platform with complete translation workbench',
  },
  {
    icon: <Icon2 />,
    text: 'Machine Learning models for translation and post editing to augment human translators',
  },
  {
    icon: <Icon3 />,
    text: 'Domain specific Linguistic resource (Dictionaries, translation memory) for efficient and consistent quality translation',
  },
  {
    icon: <Icon4 />,
    text: 'To setup parallel corpus in technical domain (>30,00,000 words) to speed up the translation and post editing research',
  },
  {
    icon: <Icon5 />,
    text: 'To translate and publish 500 books in native languages for engineering curriculum and make it accessible in cost effective manner',
  },
  {
    icon: <Icon6 />,
    text: 'Active ecosystem of seed translators, reviewer, proof readers around the platform',
  },
];

const Team = {
  tech: [
    {
      img: GanRama,
      name: 'Prof. Ganesh Ramakrishnan',
      desc: `Institute Chair Professor
Department of Computer Science and Engineering IIT Bombay`,
      link: 'https://www.cse.iitb.ac.in/~ganesh',
    },
    {
      img: PankSi,
      name: 'Pankaj Singh',
      desc: 'Director, Aify Innovation Labs',
      link: 'https://www.linkedin.com/in/pankaj-singh-b000894a/',
    },
    {
      img: AyusM,
      name: 'Ayush Maheshwari',
      desc: `Ekal Fellow and Phd student, Cse, 
IIT Bombay`,
      link: 'https://www.cse.iitb.ac.in/~ayusham',
    },
    {
      img: GanArn,
      name: 'Ganesh Arnaal',
      desc: `Linguistic expert and a pioneer in Indian language computing`,
      text: 'We at CSE, IIT-B have been working closely with Shri Ganesh Arnaal, a linguistic expert since 2013. He is a Chartered Accountant by qualification and he runs a boutique investment bank in Mumbai. His passion for Indian languages and Indian language computing brought him to CSC. His firm Bharat Bhasha Sanganan has developed a complete User Interface in HIndi for Open Office. Shri Arnaal has advocated the development of lexical resources and human aid to support machine translation. We would like to acknowledge his role in the development of our Udaan project. He has agreed to take up translation and post-edit work on technical books in Engineering.',
    },
  ],
  student: [
    {
      img: Piyush,
      name: 'Piyush Sharma',
      desc: `M.Tech, CSE`,
      link: 'https://www.cse.iitb.ac.in/~piyusharma/',
    },
    {
      img: Isha,
      name: 'Isha Panday',
      desc: `M.Tech, CSE`,
      link: 'https://www.cse.iitb.ac.in/~iishapandey/',
    },
    {
      img: Souvik,
      name: 'Souvik Pal',
      desc: `DD, CMINDS`,
      link: 'https://www.linkedin.com/in/souvik-pal-75b1b1178/',
    },
    {
      img: Vineet,
      name: 'Vineet Dorna',
      desc: `BTech, CSE`,
      link: 'https://www.cse.iitb.ac.in/~vineethdorna/',
    },
    {
      img: Arjun,
      name: 'Arjun Kashettiwar',
      desc: `BTech, CSE`,
      link: 'https://www.cse.iitb.ac.in/~arjunk/',
    },
    {
      img: Harshad,
      name: 'Harshad Ingole',
      desc: `BTech, CSE`,
      link: 'https://www.cse.iitb.ac.in/~harshadingole',
    },
    {
      img: Krishna,
      name: 'Krishnakant Bhatt',
      desc: `MS, CSE`,
      link: 'https://www.cse.iitb.ac.in/~kkbhatt/',
    },
    {
      img: Ajay,
      name: 'Ajay Ravindran',
      desc: `MTech, CSE`,
      link: 'https://www.linkedin.com/in/ajay-r-376673132',
    },
  ],
  intern: [
    {
      img: Sanskar,
      name: 'Sanskar  Sehgal',
      desc: 'Intern, IIT Bomabay',
      link: 'http://www.linkedin.com/in/sanskar-sehgal',
    },
    {
      img: Yash,
      name: 'Yash  Kadam',
      desc: 'Intern, IIT Bomabay',
      link: 'https://bit.ly/3z35NtP',
    },
    {
      img: Bidipto,
      name: 'Bidipto Bose',
      desc: 'Intern, IIT Bomabay',
      link: 'https://bdbose.tech/',
    },
    {
      img: Akanksha,
      name: 'Akanksha Mategaonkar',
      desc: 'Intern, IIT Bomabay',
      link: '#',
    },
    {
      img: Akshita,
      name: 'Akshita Shivani',
      desc: 'Intern, IIT Bomabay',
      link: '#',
    },
  ],
};

const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NewArrow />,
    prevArrow: <BackArrow />,
  };
  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const newsRef = useRef();
  const addEmail = async () => {
    try {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const validator = re.test(String(newsRef.current.value).toLowerCase());
      if (!validator) {
        return alert('Please add a valid email!');
      }
      const arr = await getDoc(doc(db, 'Udaan', 'subscribers'));

      setDoc(doc(db, 'Udaan', 'subscribers'), {
        email: [...arr.data().email, newsRef.current.value.toLowerCase()],
      }).then((res) => {
        alert('Thank You!');
        newsRef.current.value = '';
      });
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <>
      <Modal message={modalText} setOpen={setOpen} open={open} />
      <div className='home-wrapper'>
        <div className='hero-wrapper'>
          <h1>Project UDAAN</h1>
          <h2>"Breaking the Language Barrier in Education"</h2>
          <h3>
            Under the aegis of the office of{' '}
            <span>Alumni and Corporate Relations IIT Bombay</span>
          </h3>
          <p>
            The Udaan project enables translation of textbooks and learning
            materials in Engineering and all main streams of Higher learning,
            from English to Hindi and all Indian languages.{' '}
          </p>
          <div className='hero-btns'>
            <button className='donate'>Donate</button>
            <button className='subscribe'>Subscribe</button>
          </div>
          <Scroll />
        </div>

        <div className='project-detail-wrapper'>
          <video src={UdaanVideo} controls />
          <div className='project-detail-container'>
            <h2>UDAAN - TRANSLATION WORKBENCH</h2>
            <span>Demonstration of our UDAAN translation tool.</span>
            <p>
              Our in-house translation workbench from efficient translation of
              documents in various Indian languages. We invite contributions
              from people interested in translating documents (either slides or
              text).
            </p>
          </div>
        </div>

        <div className='event-wrapper'>
          <Slider {...settings}>
            <div className='event-container'>
              <div>
                <h2>Events</h2>
                <span>Project Launch</span>
                <p>
                  Our in-house translation workbench from efficient translation
                  of documents in various Indian languages. We invite
                  contributions from people interested in translating documents
                  (either slides or text).
                </p>
              </div>
              <img
                src='https://images.unsplash.com/photo-1563968625401-05ea064969f5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'
                alt=''
              />
            </div>
            <div className='event-container'>
              <div>
                <h2>Events</h2>
                <span>Project Launch</span>
                <p>
                  Our in-house translation workbench from efficient translation
                  of documents in various Indian languages. We invite
                  contributions from people interested in translating documents
                  (either slides or text).
                </p>
              </div>
              <img
                src='https://images.unsplash.com/photo-1563968625401-05ea064969f5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'
                alt=''
              />
            </div>
          </Slider>
        </div>
        <div className='about-wrapper'>
          <h1>About</h1>
          <p>
            In India, every year, more than 1 crore students appear in CBSE,
            ICSE, and state board class 10th and 12th exams.
            <span>
              {' '}
              Out of these students, more than 65% students study in non-English
              medium schools.
            </span>{' '}
            Often, such students when join higher education institutes where the
            primary language of instruction is English, face language barriers.
            Even when they wish to understand the content from supplementary
            resources such as the internet or trying to keep up with
            contemporary research, they face the similar issue. We are leaving
            behind such potential minds.
          </p>
          <p>
            The lack of native language instruction also has a significant
            economic impact. Of the top twenty countries in GDP per capita, all
            of them use the language of the common people for higher and
            technical education. Most of these countries do not use English. In
            the bottom twenty economies, most of the countries are those which
            persist with a colonial language, not the mother tongue of the
            majority of people. The transition to mother tongue education
            requires significant investment in language infrastructure.
          </p>
          <div className='card-wrapper'>
            <div className='card'>
              <h1>Mission</h1>
              <span>
                To have textbooks resources with the entire engineering and
                medical curriculum translated into the many Indian languages.
              </span>
            </div>
            <div className='card'>
              <h1>Our Vision</h1>
              <span>
                BREAKING THE LANGUAGE BARRIER IN THE INDIAN HIGHER EDUCATION
                SYSTEM
              </span>
            </div>
          </div>
        </div>
        <div className='goal-wrapper'>
          <h1>Our Goals</h1>
          <div className='goal-container'>
            {Goals.map((i) => {
              return (
                <div className='goal-card'>
                  {i.icon}
                  <span>{i.text}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className='team-wrapper'>
          <h1>Our Team</h1>
          <div className='team-container'>
            <h2>Technical Team</h2>
            <div className='tech-team-conatainer'>
              {Team.tech.map((i) => {
                if (i.text) {
                  return (
                    <div
                      className='team-card'
                      onClick={() => {
                        setOpen(true);
                        setModalText(i.text);
                      }}>
                      <img src={i.img} alt='' />
                      <h3>{i.name}</h3>
                      <span>{i.desc}</span>
                    </div>
                  );
                }
                return (
                  <a href={i.link}>
                    <div className='team-card'>
                      <img src={i.img} alt='' />
                      <h3>{i.name}</h3>
                      <span>{i.desc}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <div className='team-container'>
            <h2>Students</h2>
            <div className='student-team-conatainer'>
              {Team.student.map((i) => {
                return (
                  <a href={i.link}>
                    <div className='team-card student-card'>
                      <img src={i.img} alt='' />
                      <h3>{i.name}</h3>
                      <span>{i.desc}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <div className='team-container'>
            <h2>Interns</h2>
            <div className='student-team-conatainer'>
              {Team.intern.map((i) => {
                return (
                  <a href={i.link}>
                    <div className='team-card intern-card'>
                      <img src={i.img} alt='' />
                      <h3>{i.name}</h3>
                      <span>{i.desc}</span>
                    </div>
                  </a>
                );
              })}
            </div>
            <h2>Associated Publishers</h2>

            <div className='associate-wrapper'>
              <a href='https://www.garudaprakashan.com/about-us/'>
                <div className='associate-card'>
                  <img src={P1} alt='' />
                  <h3>Garuda Prakashan</h3>
                  <span>CEO, MD, Sankrant Sanu</span>
                </div>
              </a>
              <div className='associate-card'>
                <img src={P2} alt='' />
                <h3>Somayaji Arnaal Publishers</h3>
                <span>Founder, Ganesh Arnal</span>
              </div>
            </div>
          </div>
        </div>
        <div className='donation-wrapper' id='donation'>
          <h2>Donation</h2>
          <div className='donation-container'>
            <div className='donation-details'>
              <span>Willing to donate? </span>
              <h3>Here's how you can donate to strengthen our community</h3>
              <ul>
                <li>Follow the Donate button below to our donation portal</li>
                <li>Enter the amount you wish to donate</li>
                <li>Select Project - "PROJECT UDAAN"</li>
                <li>Select your affiliation with the project.</li>
                <li>Enter your details in the form.</li>
                <li>
                  Click on "Donate". You will be redirected to select the mode
                  of payment
                </li>
              </ul>
              <h6>
                We support Online banking and UPI for now. Support to be
                extended soon.
              </h6>
              <button className='donate'>Donate</button>
              <h6>You will be redirected to our donation portal.</h6>
            </div>
            <img src={DemoDonation} style={{ width: '50%' }} alt='' />
          </div>
        </div>
        <div className='feature-wrapper'>
          <h1>Feature and News</h1>
          <div className='feature-container'>
            <div className='left-col'>
              <img
                src='https://images.unsplash.com/photo-1593096966468-c7869f66def9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'
                alt=''
              />
              <span>Madhumay Mallik </span>
              <h5>In search of the Divine Duck</h5>
              <a href='/'>{'Read All ->'}</a>
            </div>
            <div className='right-col'>
              <div className='news-card'>
                <img
                  src='https://images.unsplash.com/photo-1492706590583-5c43c7a708af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'
                  alt=''
                />
                <div>
                  <h4>News</h4>
                  <span>
                    WTI’s Rescue Team Reunites Leopard Cub with its Mother
                  </span>
                </div>
              </div>
              <div className='news-card'>
                <img
                  src='https://images.unsplash.com/photo-1461418749540-8c49a1d7369e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'
                  alt=''
                />
                <div>
                  <h4>News</h4>
                  <span>
                    WTI’s Rescue Team Reunites Leopard Cub with its Mother
                  </span>
                </div>
              </div>
              <a href='/'>{'Read All ->'}</a>
            </div>
          </div>
        </div>
        <div className='related-projects-wrapper'>
          <h1>Related Projects</h1>
          <Slider {...settings} dots={true}>
            <div className='relate-container'>
              <img
                src='https://www.udaanproject.org/assets/img/marati_conversion.jpg'
                alt=''
              />
              <div className='related-card'>
                <h2>RUDDER</h2>
                <h3>cRoss lingUal viDeo anD tExt Retrieval.</h3>
                <p>
                  RUDDER consists of 492(to be updated) videos, with an average
                  length of 80 seconds and around 7 sentences describing every
                  video. A video is present in multiple languages namely HINDI,
                  TAMIL, MALAYALAM, URDU, KANNADA. (Note: All videos do not have
                  audio in every language mentioned earlier)
                </p>
                <button className='donate'>More Information</button>
              </div>
            </div>
            <div className='relate-container'>
              <img
                src='https://www.udaanproject.org/assets/img/marati_conversion.jpg'
                alt=''
              />
              <div className='related-card'>
                <h2>RUDDER</h2>
                <h3>cRoss lingUal viDeo anD tExt Retrieval.</h3>
                <p>
                  RUDDER consists of 492(to be updated) videos, with an average
                  length of 80 seconds and around 7 sentences describing every
                  video. A video is present in multiple languages namely HINDI,
                  TAMIL, MALAYALAM, URDU, KANNADA. (Note: All videos do not have
                  audio in every language mentioned earlier)
                </p>
                <button className='donate'>More Information</button>
              </div>
            </div>
          </Slider>
        </div>
        <div className='publishers-wrapper'>
          <h1>Publications</h1>
          <Slider {...settings} slidesToScroll={4} slidesPerRow={4}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
              return (
                <div className='pub-card'>
                  <h3>
                    GLISTER: Generalization based Data Subset Selection for
                    Efficient and Robust Learning
                  </h3>
                  <p>
                    Krishnateja Killamsetty, Durga Sivasubramanian, Ganesh
                    Ramakrishnan, Rishabh Iyer In Proceedings of The 35th AAAI
                    Conference on Artificial Intelligence (AAAI 2021).
                  </p>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className='review-wrapper'>
          <h1>What they say?</h1>
          <Slider {...settings} dots={true}>
            {[1, 2].map((i) => {
              return (
                <div className='quote-card'>
                  <Quote id='quote' />
                  <div className='quote-details'>
                    <img
                      src='https://images.unsplash.com/photo-1450133064473-71024230f91b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'
                      alt=''
                    />
                    <div className='quote-text'>
                      <h2>AKSHAR ANVESHINI</h2>
                      <h3>Optical Character Recognition (OCR) and </h3>
                      <p>
                        Inhouse OCR(Optical Character Recognition) model for the
                        digitization of Sanskrit books.It uses state of the art
                        technology.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className='contact-wrapper'>
          <div className='contact-container'>
            <h1>Contact Us</h1>
            <form>
              <h2>Enquiry</h2>
              <span>Name</span>
              <input type='text' required />
              <span>Email</span>
              <input type='email' required />
              <span>Category</span>
              <select>
                <option>Select</option>
              </select>
              <span>Message</span>
              <textarea />
              <button>Submit</button>
            </form>
          </div>
          <div className='contact-side'>
            <h3>Contact Information</h3>
            <p>
              Feel free to contact us anytime. We will get back to you as soon
              as possible.
            </p>
            <div className='contact-elements'>
              SI-A418, KReSIT, IIT-Bombay, Mumbai, Maharastra
            </div>
            <div className='contact-elements'>ganesh@cse.iitb.ac.in</div>
            <div className='contact-elements'>+91-022-25767728</div>
          </div>
        </div>
        <div className='newsletter-wrapper'>
          <h1>Newsletter</h1>
          <p>
            Keep up with our latest news and events. Subscribe to our Newsletter
          </p>
          <div className='input-wrapper'>
            <input ref={newsRef} type='email' placeholder='Email' />
            <button onClick={addEmail}>Subscribe</button>
          </div>
        </div>
        <footer>
          <div className='left-col'>
            <ul>
              <h3>WHO WE ARE?</h3>
              <a href='/'>About</a>
              <a href='/'>Our Team</a>
              <a href='/'>Related Projects</a>
              <a href='/'>Publications</a>
            </ul>
            <ul>
              <h3>SUPPORT</h3>
              <a href='/'>Contact Us</a>
              <a href='/'>Donate</a>
            </ul>
          </div>
          <div className='right-col'>
            <h3>FOLLOW US ON</h3>
            <div>
              <a href='/'>
                <Insta />
              </a>
              <a href='/'>
                <Fb />
              </a>
              <a href='/'>
                <Tweet />
              </a>
              <a href='/'>
                <Yt />
              </a>
            </div>
          </div>
        </footer>
        <section>
          <h2>Project UDAAN</h2>
          <div>
            <span>"Breaking the Language Barrier in Education"</span>
            <span style={{ color: '#fb5517' }}>
              Under the aegis of the office of Alumni and Corporate Relations
              IIT Bombay
            </span>
          </div>
          <hr />
          <div>
            <h4>Copyright © 2021 IIT Bombay</h4>
            <h4
              style={{
                marginRight: 0,
              }}>
              Don’t forget to give credits
            </h4>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
