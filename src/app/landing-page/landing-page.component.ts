import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as AOS from 'aos';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink]
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  @ViewChild('counterSection') counterSection!: ElementRef;

  public animateTitle = false;

slides = [
  {
    image: 'a7305dd5-3c43-4041-8bf6-918cad47b7ae.png',
     title: "Unga App – For Students",
    description: "Unga enables students to instantly find meanings of words by taking a photo, translating into their mother tongue, exploring explanations via YouTube, storing meanings permanently, creating voice/text/video notes, and privately reviewing history of learnt words anytime across the year.",    
    button: 'EXPLORE MORE',
  },
  {
    image: 'img/allmodulesimage.png',
    title: 'LEAD GENERATION TO PRODUCT DELIVERY ',
    description: 'CRM+ERP+MES Combo',
    button: 'LEARN MORE',
  }
];



services = [
  {
    icon: 'bi bi-cpu-fill',
    title: 'ELECTRONICS MANUFACTURING',
    description: 'Advanced electronic assembly and precision PCB manufacturing tailored to your industry needs.'
  },
  {
    icon: 'bi bi-box-seam',
    title: 'PLASTICS MANUFACTURING',
    description: 'High-quality plastic components and custom injection molding solutions for diverse applications.'
  },
  {
    icon: 'bi bi-gear-fill',
    title: 'INDUSTRIAL SYSTEMS',
    description: 'Integrated automation and industrial control systems for streamlined manufacturing operations.'
  }
];




  techServices = [
  // SOFTWARE PRODUCTS
  {
    title: 'MES-EMS',
    description: 'Manufacturing Execution and Energy Management System to monitor and optimize factory operations in real time.',
    image: 'img/content_image/buildsync/01.jpg'
  },
  {
    title: 'Polyflow',
    description: 'Streamline your production process with our flexible and scalable workflow automation platform.',
    image: 'img/content_image/buildsync/02.jpg'
  },
  {
    title: 'Warehouse Management',
    description: 'Intelligent warehouse tracking and logistics software for real-time inventory control.',
    image: 'img/content_image/buildsync/05.jpg'
  },
  {
    title: 'CEM (Customer Engagement Module)',
    description: 'Enhance customer experience with integrated engagement, feedback, and CRM tools.',
    image: 'img/content_image/buildsync/06.jpg'
  },
  {
    title: 'BOM Costing Tool',
    description: 'Accurately calculate Bill of Materials costs to support pricing and procurement strategies.',
    image: 'img/content_image/buildsync/01.jpg'
  },

  // EMBEDDED PRODUCTS
  {
    title: 'Troffer LED',
    description: 'Energy-efficient embedded lighting system designed for industrial and commercial environments.',
    image: 'img/content_image/buildsync/02.jpg'
  },
  {
    title: 'Thawing Machine',
    description: 'Embedded thawing technology for precise temperature control and safe food processing.',
    image: 'img/content_image/buildsync/05.jpg'
  },
  {
    title: 'Ambient Sensor',
    description: 'Monitor environmental conditions like temperature, humidity, and light using embedded sensors.',
    image: 'img/content_image/buildsync/06.jpg'
  },
  {
    title: 'HMI Display',
    description: 'High-resolution Human-Machine Interfaces for industrial machine control and automation.',
    image: 'img/content_image/buildsync/01.jpg'
  },
  {
    title: 'E-Fresh Room',
    description: 'Embedded environmental system to extend product shelf life with temperature and humidity regulation.',
    image: 'img/content_image/buildsync/02.jpg'
  },
  {
    title: 'Hygrometer',
    description: 'Compact embedded device for precise humidity measurements in smart environments.',
    image: 'img/content_image/buildsync/05.jpg'
  },
  {
    title: 'IoT Platform',
    description: 'Seamless device integration and real-time data monitoring with our embedded IoT ecosystem.',
    image: 'img/content_image/buildsync/06.jpg'
  },
  {
    title: 'Hidden Brain',
    description: 'Smart AI-powered embedded system that enables automation, diagnostics, and analytics in real time.',
    image: 'img/content_image/buildsync/01.jpg'
  }
];
softwareServices = [
  {
    title: 'MES-EMS',
    slug: 'mes-ems',
    description: 'Manufacturing Execution and Energy Management System to monitor and optimize factory operations in real time.',
    image: 'img/content_image/buildsync/01.jpg'
  },
  {
    title: 'Polyflow',
    slug: 'polyflow',
    description: 'Streamline your production process with our flexible and scalable workflow automation platform.',
    image: 'img/content_image/buildsync/02.jpg'
  },
  {
    title: 'Warehouse Management',
    slug: 'warehouse-management',
    description: 'Intelligent warehouse tracking and logistics software for real-time inventory control.',
    image: 'img/content_image/buildsync/05.jpg'
  },
  {
    title: 'CEM (Customer Engagement Module)',
    slug: 'cem-customer-engagement-module',
    description: 'Enhance customer experience with integrated engagement, feedback, and CRM tools.',
    image: 'img/content_image/buildsync/06.jpg'
  },
  {
    title: 'BOM Costing Tool',
    slug: 'bom-costing-tool',
    description: 'Accurately calculate Bill of Materials costs to support pricing and procurement strategies.',
    image: 'img/content_image/buildsync/01.jpg'
  }
];

embeddedProducts = [
  {
    title: 'Troffer LED',
    slug: 'troffer-led',
    description: 'Energy-efficient embedded lighting system designed for industrial and commercial environments.',
    image: 'img/content_image/buildsync/02.jpg'
  },
  {
    title: 'Thawing Machine',
    slug: 'thawing-machine',
    description: 'Embedded thawing technology for precise temperature control and safe food processing.',
    image: 'img/content_image/buildsync/05.jpg'
  },
  {
    title: 'Ambient Sensor',
    slug: 'ambient-sensor',
    description: 'Monitor environmental conditions like temperature, humidity, and light using embedded sensors.',
    image: 'img/content_image/buildsync/06.jpg'
  },
  {
    title: 'HMI Display',
    slug: 'hmi-display',
    description: 'High-resolution Human-Machine Interfaces for industrial machine control and automation.',
    image: 'img/content_image/buildsync/01.jpg'
  },
  {
    title: 'E-Fresh Room',
    slug: 'e-fresh-room',
    description: 'Embedded environmental system to extend product shelf life with temperature and humidity regulation.',
    image: 'img/content_image/buildsync/02.jpg'
  },
  {
    title: 'Hygrometer',
    slug: 'hygrometer',
    description: 'Compact embedded device for precise humidity measurements in smart environments.',
    image: 'img/content_image/buildsync/05.jpg'
  },
  {
    title: 'IoT Platform',
    slug: 'iot-platform',
    description: 'Seamless device integration and real-time data monitoring with our embedded IoT ecosystem.',
    image: 'img/content_image/buildsync/06.jpg'
  },
  {
    title: 'Hidden Brain',
    slug: 'hidden-brain',
    description: 'Smart AI-powered embedded system that enables automation, diagnostics, and analytics in real time.',
    image: 'img/content_image/buildsync/01.jpg'
  }
];

  clientsCount = 0;
  projectsCount = 0;
  expertisePercent = 0;
  satisfactionPercent = 0;
  currentSlideIndex = 0;
  counterAnimated = false;

  formData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.currentSlideIndex = 0;
    this.animateTitle = true;
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });

      setTimeout(() => {
        this.setupCounterObserver();
      }, 100);
    }
  }

  get currentSlide() {
    return this.slides[this.currentSlideIndex];
  }

  changeSlide(index: number): void {
    this.currentSlideIndex = index;

    // Re-trigger title animation
    this.animateTitle = false;
    setTimeout(() => {
      this.animateTitle = true;
    }, 10);
  }

  submitForm() {
    console.log('Submitted Data:', this.formData);
    alert('Your request has been submitted!');
  }

  animateCounters() {
    let clientTarget = 123;
    let projectTarget = 87;
    const duration = 2000;

    const clientInterval = setInterval(() => {
      if (this.clientsCount < clientTarget) {
        this.clientsCount++;
      } else {
        clearInterval(clientInterval);
      }
    }, duration / clientTarget);

    const projectInterval = setInterval(() => {
      if (this.projectsCount < projectTarget) {
        this.projectsCount++;
      } else {
        clearInterval(projectInterval);
      }
    }, duration / projectTarget);
  }

  animateProgressBars() {
    setTimeout(() => {
      this.expertisePercent = 95;
      this.satisfactionPercent = 98;
    }, 500);
  }

  setupCounterObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.counterAnimated) {
            this.counterAnimated = true;
            this.animateCounters();
            this.animateProgressBars();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (this.counterSection?.nativeElement) {
      observer.observe(this.counterSection.nativeElement);
    }
  }
}
