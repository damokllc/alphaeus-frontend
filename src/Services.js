import React from 'react';
import FancyGallery from './FancyGallery';

// Main gallery images (mix of your images and stock)
const mainGalleryImages = [
  { original: '/images/house1.jpg', thumbnail: '/images/house1.jpg' },
  { original: '/images/house2.jpg', thumbnail: '/images/house2.jpg' },
  { original: '/images/kitchen1.jpg', thumbnail: '/images/kitchen1.jpg' },
  { original: '/images/kojoshoes.jpg', thumbnail: '/images/kojoshoes.jpg' },
  { original: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80' },
  { original: 'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&w=600', thumbnail: 'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&w=100' }
];

const services = [
  {
    title: "Manufacturing of Wayfinding Totems",
    description: "We design and manufacture wayfinding systems that enhance navigation and improve visitor experiences in urban environments, universities, and tourist sites."
  },
  {
    title: "Manufacturing of Bus Shelters",
    description: "Our innovative and durable bus shelters combine aesthetics with functionality, ensuring the comfort and safety of commuters."
  },
  {
    title: "Digital Display and Advertising Solutions",
    description: "We offer modern digital display systems, ideal for advertising and information dissemination in high-traffic areas."
  },
  {
    title: "Smart City Solutions",
    description: "Our expertise in technology and engineering allows us to provide smart city infrastructure, including IoT-enabled systems for urban management."
  },
  {
    title: "Highway Maintenance",
    description: "From road repairs to signage and lighting, we ensure that highways remain safe and efficient for all users."
  },
  {
    title: "Telecom Infrastructure",
    description: "Building and maintaining telecom infrastructure for utility companies."
  },
  {
    title: "New Builds and Extensions",
    description: "Whether residential, commercial, or industrial, we undertake new construction projects and extensions with an emphasis on quality and sustainability."
  },
  {
    title: "Architectural Solutions",
    description: "Our design and engineering teams collaborate to deliver architectural solutions that combine aesthetics with functionality, tailored to meet the unique needs of each project."
  }
];

function Services() {
  return (
    <div>
      <h2>Our Work</h2>
      <FancyGallery images={mainGalleryImages} />
      <h2 className="mt-4">Our Services</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {services.map((service, idx) => (
          <li key={idx} style={{ marginBottom: 24, borderBottom: '1px solid #eee', paddingBottom: 16 }}>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;