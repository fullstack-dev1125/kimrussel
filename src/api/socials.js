// eslint-disable-next-line
export default {
  fetchSocials: () =>
    new Promise((resolve, reject) =>
      resolve([
        {
          name: "email",
          text: "sorianokimrussel0@gmail.com",
          icon: null,
          url: "mailto:sorianokimrussel0@gmail.com"
        },
        // {
        //   name: "linkedin",
        //   text: "",
        //   icon: "fab fa-linkedin",
        //   url: "https://www.linkedin.com/in/sahibzada-khan-12829a1b5/"
        // }       
      ])
    )
}
