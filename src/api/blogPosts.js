export default {
  fetchBlogPosts: () =>
    new Promise((resolve, reject) =>
      resolve([
        {
          title: "One Calc",
          labels: ["android", "vr"],
          img: "",
          highlight: true
        }
      ])
    )
}
