import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Carlos",
  lastName: "Ariza",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Ingeniero Civil Informático",
  avatar: "/images/avatar.jpg",
  location: "America/Santiago", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Español", "Inglés"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/carlosarizap",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/carlosarizap/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:carlosariza7459@gmail.com",
  },
];

const home = {
  label: "Inicio",
  title: "Portafolio de Carlos Ariza",
  description: "Sitio web de portafolio mostrando mi trabajo como Ingeniero Civil Informático",
  headline: <>Ingeniero Civil Informático y Desarrollador</>,
  subline: (
    <>
      ¡Hola! Soy Carlos Ariza, un Ingeniero Civil Informático especializado en el desarrollo de aplicaciones
      web y móviles. Trabajo con tecnologías como <InlineCode>React.js</InlineCode>, <InlineCode>Next.js</InlineCode>, <InlineCode>.NET</InlineCode> y más...
    </>
  ),
};


const about = {
  label: "Sobre mí",
  title: "Acerca de mí",
  description: `Conoce a ${person.name}, ${person.role} en ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introducción",
    description: (
      <>
        👋 ¡Hola! Soy Carlos Ariza, un Ingeniero Civil Informático apasionado por el desarrollo Full Stack, con un enfoque en Frontend.
        <br />
        ✨ Construyo interfaces dinámicas y fluidas con React, Next.js y TypeScript, y desarrollo APIs robustas en .NET y Node.js, optimizando bases de datos con PostgreSQL y MongoDB.
        <br />
        🚀 Siempre en busca de nuevas tecnologías para crear experiencias web rápidas, escalables y centradas en el usuario.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencia Laboral",
    experiences: [
      {
        company: "Sigue Seguro Corredores",
        timeframe: "Agosto 2024 - Presente",
        role: "Desarrollador Fullstack",
        achievements: [
          <>
            Implementé mejoras en el sistema de cotización de seguros utilizando <InlineCode>Next.js</InlineCode> y <InlineCode>React</InlineCode>, optimizando la velocidad y usabilidad de la plataforma.
          </>,
          <>
            Integré nuevas aseguradoras como <InlineCode>Mapfre</InlineCode> y <InlineCode>BCI</InlineCode>, ampliando la oferta de seguros en línea.
          </>,
          <>
            Diseñé informes personalizados con visualización de datos en tiempo real, mejorando la toma de decisiones de los usuarios.
          </>,
        ],
        images: [
          {
            src: "/images/projects/sigueseguro/sigue1.png",
            alt: "Sistema de Cotización de Seguros",
            width: 20,
            height: 9,
          },
          {
            src: "/images/projects/sigueseguro/sigue2.png",
            alt: "Sistema de Cotización de Seguros",
            width: 20,
            height: 9,
          },
          {
            src: "/images/projects/sigueseguro/sigue3.png",
            alt: "Sistema de Cotización de Seguros",
            width: 20,
            height: 9,
          },
          {
            src: "/images/projects/sigueseguro/sigue4.png",
            alt: "Sistema de Cotización de Seguros",
            width: 20,
            height: 9,
          },
        ],
      },

      {
        company: "RockBlast",
        timeframe: "Agosto 2024 - Diciembre 2024",
        role: "Desarrollador Frontend",
        achievements: [
          <>
            Desarrollé la interfaz de usuario del dashboard de monitoreo hidrogeológico utilizando <InlineCode>React</InlineCode> y <InlineCode>Next.js</InlineCode>.
          </>,
          <>
            Implementé la integración de mapas interactivos con <InlineCode>Mapbox</InlineCode> para visualizar sensores y datos en tiempo real.
          </>,
          <>
            Optimicé la visualización de datos con <InlineCode>Charts.js</InlineCode> y <InlineCode>Recharts</InlineCode>, mejorando la experiencia del usuario en la toma de decisiones.
          </>,
        ],
        images: [
          {
            src: "/images/projects/rockblast/rock1.png",
            alt: "Dashboard de Monitoreo Hidrogeológico",
            width: 20,
            height: 9,
          },
          {
            src: "/images/projects/rockblast/rock2.png",
            alt: "Dashboard de Monitoreo Hidrogeológico",
            width: 20,
            height: 9,
          },
          {
            src: "/images/projects/rockblast/rock3.png",
            alt: "Dashboard de Monitoreo Hidrogeológico",
            width: 20,
            height: 9,
          },
          {
            src: "/images/projects/rockblast/rock4.png",
            alt: "Dashboard de Monitoreo Hidrogeológico",
            width: 20,
            height: 9,
          },
          {
            src: "/images/projects/rockblast/rock5.png",
            alt: "Dashboard de Monitoreo Hidrogeológico",
            width: 20,
            height: 9,
          },
          {
            src: "/images/projects/rockblast/rock6.png",
            alt: "Dashboard de Monitoreo Hidrogeológico",
            width: 20,
            height: 9,
          },

        ],
      },
      {
        company: "Oppa",
        timeframe: "Enero 2023 - Diciembre 2023",
        role: "Desarrollador Mobile y Fullstack",
        achievements: [
          <>
            Rediseñé y desarrollé desde cero la aplicación móvil de Oppa en <InlineCode>Xamarin/.NET C#</InlineCode>, priorizando la estabilidad y la experiencia de usuario.
          </>,
          <>
            Implementé una nueva base de datos en <InlineCode>MongoDB</InlineCode> optimizando el almacenamiento y recuperación de datos.
          </>,
          <>
            Creé la plataforma de administración web con <InlineCode>React</InlineCode> y <InlineCode>MongoDB</InlineCode>, facilitando la gestión de servicios y usuarios.
          </>,
        ],
        images: [
          {
            src: "/images/projects/oppa/oppa1.png",
            alt: "App Móvil de Oppa",
            width: 9,
            height: 16,
          },
          {
            src: "/images/projects/oppa/oppa2.png",
            alt: "App Móvil de Oppa",
            width: 9,
            height: 16,
          },
          {
            src: "/images/projects/oppa/oppa3.png",
            alt: "App Móvil de Oppa",
            width: 9,
            height: 16,
          },
          {
            src: "/images/projects/oppa/oppa4.png",
            alt: "App Móvil de Oppa",
            width: 9,
            height: 16,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Educación",
    institutions: [
      {
        name: "Universidad San Sebastián (2020-2024)",
        description: (
          <>
            Titulado como <InlineCode>Ingeniero Civil Informático</InlineCode>, con un promedio
            general de <InlineCode>6.5</InlineCode>. Destacado por excelencia académica con becas en
            <InlineCode>2023</InlineCode> y <InlineCode>2024</InlineCode>.
          </>
        ),
      },
      {
        name: "Experiencia Académica",
        description: (
          <>
            • Ayudante en Ecuaciones Diferenciales (2022).
            <br/>• Scrum Master en Introducción a la Ingeniería Informática (2023).
            <br/>• Ayudante en Programación Orientada a Objetos (2024).
            <br/>• Participación en proyectos de desarrollo y modelado de sistemas informáticos.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "React & Next.js",
        description: (
          <>
            Desarrollo de aplicaciones modernas con <InlineCode>React</InlineCode> y <InlineCode>Next.js</InlineCode>. 
            Implementación de UI dinámicas y optimización de rendimiento con SSR y CSR.
          </>
        ),
        images: [
          {
            src: "/images/logos/react.png",
            alt: "Dashboard desarrollado con React & Next.js",
            width: 5.5,
            height: 5,
          },
          {
            src: "/images/logos/next-js.png",
            alt: "Dashboard desarrollado con React & Next.js",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Node.js & .NET",
        description: (
          <>
            Creación de APIs robustas con <InlineCode>Node.js</InlineCode> y <InlineCode>.NET</InlineCode>. 
            Especializado en integración de bases de datos y optimización de endpoints.
          </>
        ),
        images: [
          {
            src: "/images/logos/node-js.png",
            alt: "Dashboard desarrollado con React & Next.js",
            width: 5,
            height: 5,
          },{
            src: "/images/logos/net.png",
            alt: "Dashboard desarrollado con React & Next.js",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Bases de Datos (PostgreSQL & MongoDB)",
        description: (
          <>
            Diseño y gestión de bases de datos SQL y NoSQL, optimizando consultas y estructuras en 
            <InlineCode>PostgreSQL</InlineCode> y <InlineCode>MongoDB</InlineCode>.
          </>
        ),
        images: [
          {
            src: "/images/logos/postgre.png",
            alt: "Dashboard desarrollado con React & Next.js",
            width: 5,
            height: 5,
          },
          {
            src: "/images/logos/mongo.png",
            alt: "Dashboard desarrollado con React & Next.js",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Xamarin & Desarrollo Móvil",
        description: (
          <>
            Desarrollo de aplicaciones móviles con <InlineCode>Xamarin</InlineCode> y <InlineCode>.NET C#</InlineCode>, 
            optimizando rendimiento y experiencia de usuario.
          </>
        ),
        images: [
          {
            src: "/images/logos/xam.png",
            alt: "Dashboard desarrollado con React & Next.js",
            width: 12,
            height: 5,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
