
import AOS from 'aos';
import 'aos/dist/aos.css';

export default async ({ Vue }) => {
  Vue.prototype.$aos = AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });
};
