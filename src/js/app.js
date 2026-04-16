// Main App Entry Point
import '../styles/main.scss';
import { stickyHeader } from '../components/stickyHeader';
import { topButton } from '../components/topButton';
import { carousel } from '../components/carousel';
import { newsAccordion } from '../components/newsAccordion';
import { modal } from '../components/modal';
import { shopAccordion } from '../components/shopAccordion';

// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  stickyHeader();
  topButton();
  carousel();
  newsAccordion();
  modal();
  shopAccordion();
});
