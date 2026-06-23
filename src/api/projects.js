// eslint-disable-next-line
export default {
  fetchProjects: () =>
    new Promise((resolve, reject) =>
      resolve([
        {
          id: "Not Too Sweet",
          name: "Not Too Sweet",
          subtitle: "",
          description:
            "The site was built to make NOT TOO SWEET drinks easily accessible online, allowing customers to learn about the brand, explore flavors, and purchase directly in a simple and convenient way.",
          links: [
            {
              url: "https://nottoosweetlife.com/",
              name: "Open the website",
              icon: "fas fa-external-link-alt"
            }
          ],
          secondaryLinks: [],
          labels: [
            "Shopify Templates",
            "Web design",
            "Shopify",
            "API Integration"
          ],
          imgSmall: "images/project/shopify-1.png",
          img: "images/project/shopify-1.png",
          highlight: true
        },
        {
          id: "Mowellens store",
          name: "Mowellens store",
          subtitle: "",
          description:
            "The site was built to showcase Mowellens’ bestselling massage oil, making it easy for customers to explore its benefits, learn about natural ingredients, and purchase directly through a seamless shopping experience.",
          links: [
            {
              url: "https://mowellens.com/",
              name: "Open the website",
              icon: "fas fa-external-link-alt"
            }
          ],
          secondaryLinks: [],
          labels: [
            "Shopify Templates",
            "Web design",
            "Shopify",
            "API Integration"        
          ],
          imgSmall: "images/project/shopify-2.png",
          img: "images/project/shopify-2.png",
          highlight: true
        },
        {
          id: "Blackhalo store",
          name: "Blackhalo store",
          subtitle: "",
          description:
            "The site was built to showcase BlackHalo’s bestselling massage oil, making it easy for customers to explore its benefits, learn about natural ingredients, and purchase directly through a seamless shopping experience.",
          links: [
            {
              url: "https://www.blackhalo.com/",
              name: "Open the website",
              icon: "fas fa-external-link-alt"
            }
          ],
          secondaryLinks: [],
          labels: [
            "Shopify Templates",
            "Web design",
            "Shopify",
            "API Integration"      
          ],
          imgSmall: "images/project/shopify-3.png",
          img: "images/project/shopify-3.png",
          highlight: true
        },
        {
          id: "Docubee website",
          name: "Docubee website",
          subtitle: "",
          description:
            "Figma to WordPress using Elementor",
          links: [
            {
              url: "https://docubee.com/",
              name: "Open the website",
              icon: "fas fa-external-link-alt"
            }
          ],
          secondaryLinks: [],
          labels: [
            "Elementor",
            "HTML",
            "Figma to WordPress",
            "CSS"
                
          ],
          imgSmall: "images/project/wp-1.png",
          img: "images/project/wp-1.png",
          highlight: true
        },
        {
          id: "WordPress website",
          name: "WordPress website",
          subtitle: "",
          description:
            "Figma to WordPress using ACF and Bootstrap",
          links: [
            {
              url: "https://b2communications.com",
              name: "Open the website",
              icon: "fas fa-external-link-alt"
            }
          ],
          secondaryLinks: [],
          labels: [
           "ACF",
           "WordPress",
           "Bootstrap"
          ],
          imgSmall: "images/project/wp-2.png",
          img: "images/project/wp-2.png",
          highlight: true
        },
        {
          id: "Trade Map",
          name: "Trade Map",
          subtitle: "DataViz - Interactive Trade Map",
          description:
            "The interactive map shows trade route with Libya from other countires. The data is time series data, and added the playable timeline.",
          links: [
            {
              url: "https://c4ads-libya-trade-map.web.app/",
              name: "Open the website",
              icon: "fas fa-external-link-alt"
            }
          ],
          secondaryLinks: [],
          labels: ["DeckGL", "Map", "Mapbox", "React", "D3.js", "DataViz"],
          imgSmall:
            "https://s3.amazonaws.com/poly-screenshots.angel.co/Project/d1/1160340/829e0c24bdc69a076b94e91d34d0c7fe-original.JPG",
          img: "https://s3.amazonaws.com/poly-screenshots.angel.co/Project/d1/1160340/829e0c24bdc69a076b94e91d34d0c7fe-original.JPG",
          highlight: true
        },
        {
          id: "Route Tool",
          name: "Route Tool",
          subtitle: "DataViz - Interactive Route Map",
          description:
            "This is to take some flight route data and create a single page visualization that renders the flight route selected with some summary statistics about wildlife trafficking along that route, and any other route that was also used in conjunction with that route to traffic wildlife. The user will have two filters on the left side of the screen and will select two cities for origin and destination. Then all instances of wildlife trafficking will list on the right side of the screen and the user can see specifics related to trafficking along that particular route.",
          links: [
            {
              url: "http://d25wluwm378t31.cloudfront.net/",
              name: "Open the website",
              icon: "fas fa-external-link-alt"
            }
          ],
          secondaryLinks: [],
          labels: ["DeckGL", "Map", "Mapbox", "React", "D3.js", "DataViz"],
          imgSmall:
            "https://s3.amazonaws.com/poly-screenshots.angel.co/Project/ea/1160344/d57b243c0f7524a05280eedc953a3ad3-original.JPG",
          img: "https://s3.amazonaws.com/poly-screenshots.angel.co/Project/ea/1160344/d57b243c0f7524a05280eedc953a3ad3-original.JPG",
          highlight: true
        },
        {
          id: "Country Profile",
          name: "Country Profile",
          subtitle: "DataViz - Interactive Globe",
          description:
            "The interactive Country Profile Map provides an overview of the wildlife seizures made in airports around the world by country.",
          links: [
            {
              url: "https://d327zvdnkttgtq.cloudfront.net/",
              name: "Open the website",
              icon: "fas fa-external-link-alt"
            }
          ],
          secondaryLinks: [],
          labels: ["Amcharts", "React", "D3.js", "DataViz"],
          imgSmall:
            "https://s3.amazonaws.com/poly-screenshots.angel.co/Project/f5/1160355/62f695c23a8138f97f8b3d3fa03c2769-original.JPG",
          img: "https://s3.amazonaws.com/poly-screenshots.angel.co/Project/f5/1160355/62f695c23a8138f97f8b3d3fa03c2769-original.JPG",
          highlight: true
        },
        {
          id: "Routes Dashboard",
          name: "Routes Dashboard",
          subtitle: "Interactive Wildlife Seizure Dashboard",
          description:
            "The ROUTES Dashboard is an interactive website providing graphics on wildlife trafficking through airports between 2009 and 2020. The Dashboard’s graphics are derived from open source wildlife seizure data collected by C4ADS under the ROUTES Partnership.",
          links: [
            {
              url: "http://www.routesdashboard.org/",
              name: "Open the website",
              icon: "fas fa-external-link-alt"
            }
          ],
          secondaryLinks: [],
          labels: ["R", "Vue.js", "D3.js", "DataViz", "Amcharts"],
          imgSmall:
            "https://s3.amazonaws.com/poly-screenshots.angel.co/Project/b7/1160361/3970e70b468f3d499038bc2a3c8a56ea-original.JPG",
          img: "https://s3.amazonaws.com/poly-screenshots.angel.co/Project/b7/1160361/3970e70b468f3d499038bc2a3c8a56ea-original.JPG",
          highlight: true
        },
        {
          id: "Doctornyla website",
          name: "Doctornyla website",
          subtitle: "",
          description:
            "Figma to WordPress using ACF and Bootstrap",
          links: [
            {
              url: "https://doctornyla.com",
              name: "Open the website",
              icon: "fas fa-external-link-alt"
            }
          ],
          secondaryLinks: [],
          labels: [
           "ACF",
           "WordPress",
           "Bootstrap"
          ],
          imgSmall: "images/project/wp-3.png",
          img: "images/project/wp-3.png",
          highlight: true
        },
        {
          id: "Next.js website",
          name: "Next.js website",
          subtitle: "",
          description:
            "The website was built using next.js and react.js",
          links: [
            {
              url: "https://about.zaubar.com/en",
              name: "Open the website",
              icon: "fas fa-external-link-alt"
            }
          ],
          secondaryLinks: [],
          labels: [
           "Next.js",
           "React.js",
           "Material UI"
          ],
          imgSmall: "images/project/react1.png",
          img: "images/project/react1.png",
          highlight: true
        },
        {
          id: "Skincare website",
          name: "Skincare website",
          subtitle: "",
          description:
            "Skincare website using WordPress and ACF",
          links: [
            {
              url: "https://www.natalikelly.com/",
              name: "Open the website",
              icon: "fas fa-external-link-alt"
            }
          ],
          secondaryLinks: [],
          labels: [
           "ACF",
           "WordPress",
           "Bootstrap"
          ],
          imgSmall: "images/project/wp-4.png",
          img: "images/project/wp-4.png",
          highlight: true
        },
        {
          id: "Shopping website using Laravel and Vue.js",
          name: "Shopping website using Laravel and Vue.js",
          subtitle: "",
          description:
            "Shopping website using Laravel and Vue.js",
          links: [
            {
              url: "https://www.cardkingdom.com/",
              name: "Open the website",
              icon: "fas fa-external-link-alt"
            }
          ],
          secondaryLinks: [],
          labels: [
           "Laravel",
           "Vue.js",
           "Bootstrap"
          ],
          imgSmall: "images/project/laravel1.png",
          img: "images/project/laravel1.png",
          highlight: true
        },
        {
          id: "Shopping website using Laravel and Angular",
          name: "Shopping website using Laravel and Angular",
          subtitle: "",
          description:
            "Shopping website using Laravel and Angular",
          links: [
            {
              url: "https://www.katom.com/",
              name: "Open the website",
              icon: "fas fa-external-link-alt"
            }
          ],
          secondaryLinks: [],
          labels: [
           "Laravel",
           "Angular",
           "Bootstrap"
          ],
          imgSmall: "images/project/laravel2.png",
          img: "images/project/laravel2.png",
          highlight: true
        },
      ])
    )
}
