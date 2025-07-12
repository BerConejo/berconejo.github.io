import About from '../pages/About';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';


export default function Pages({ activeTab }) {
  switch (activeTab) {
    case 'About':
      return <About />;
    case 'Resume':
      return <Resume />;
    case 'Contact':
      return <Contact />;
    default:
      return <About />;
  }
}