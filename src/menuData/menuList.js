import { Grid, Home, Mail, AtSign, Archive, HelpCircle } from 'react-feather';
import HomePage from '../components/Home/HomePage';
import NotFound from '../components/missing/NotFound';
//import Contact from '../components/contact/Contact';
//import About from '../components/about/About';
//import HelpCenter from '../components/help/HelpCenter';
//import Documentation from '../components/doc/Documentation';

export default [
  { to: '/', exact: true, label: 'Home', Icon: Home, desc: 'Welcome to Rotax;tech site', component: HomePage },
  { to: '/blog', label: 'Blog', Icon: Grid, desc: 'Our web blog', component: NotFound },
  {
    label: 'Documents',
    Icon: Archive, 
    items: [
      { to: '/doc', label: 'Documentation', desc: 'Documentation site', component: NotFound },
      { to: '/react', label: 'React doc', desc: 'Some helpful react resources', component: NotFound }
    ]
  },
  { to: '/about', label: 'About', Icon: AtSign, desc: 'About our company', component: NotFound },
  { to: '/contact', label: 'Contact', Icon: Mail, desc: 'Contact informations', component: NotFound },
  {
    to: '/help-center',
    label: 'Help Center',
    Icon: HelpCircle,
    desc: 'How we can help you?',
    component: NotFound,
    items: [
      { to: '/privacy-policy', label: 'Privacy Policy', component: NotFound },
      { to: '/tos', label: 'Terms of Service', desc: 'Our terms of service', component: NotFound },
      { to: '/partners', label: 'Partners', desc: 'All our partners', component: NotFound },
      {
        to: '/faq',
        label: 'FAQ',
        desc: 'You have some questions for us?',
        component: NotFound,
        items: [
          { to: '/faq/newsletter', label: 'Newsletter FAQs', desc: 'Newsletter FAQs', component: NotFound },
          { to: '/faq/career', label: 'Employment/Career FAQs', desc: ' FAQs about employment or Career in our company', component: NotFound },
        ],
      },
    ],
  },
]