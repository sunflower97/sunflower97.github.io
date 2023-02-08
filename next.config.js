const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
    loader: "custom"
  },
  swcMinify: true,
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true
  },
  assetPrefix: assetPrefix,
  basePath: basePath
};
