module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/static/scss/main.scss";
          `,
      },
    },
  },
};
