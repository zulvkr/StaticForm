import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

const Git = createClass({
  render() {
    const entry = this.props.entry;
    const repo = entry.getIn(["data", "repo"]);
    const branch = entry.getIn(["data", "branch"]);
    let type = "";

    if (/github\.com/.test(repo)) {
      type = "GitHub";
    } else if (/gitlab\.com/.test(repo)) {
      type = "GitLab";
    }

    return html`
      <div class="p-5">
        <p>Repository: ${repo}</p>
        <p>Branch: ${branch}</p>
        <p>Type: ${type}</p>
        <div class="my-3 prose">
          ${type === "GitHub" && branch
            ? html`
                Quick Links to notable configuration files:
                <ul>
                  <li>
                    <a href="${repo}/blob/${branch}/.eleventy.js"
                      >.eleventy.js: Eleventy configuration file.</a
                    >
                  </li>
                  <li>
                    <a href="${repo}/blob/${branch}/package.json"
                      >package.json: NPM configuration file.</a
                    >
                  </li>
                  <li>
                    <a href="${repo}/blob/${branch}/postcss.config.js"
                      >package.json: PostCSS configuration file.</a
                    >
                  </li>
                  <li>
                    <a href="${repo}/blob/${branch}/.eleventyignore"
                      >.eleventyignore: Eleventy ignored file list.</a
                    >
                  </li>
                  <li>
                    <a href="${repo}/blob/${branch}/netlify.toml"
                      >netlify.toml: Netlify configuration file</a
                    >
                  </li>
                  <li>
                    <a href="${repo}/blob/${branch}/src/admin/config.yml.njk"
                      >src/admin/config.yml.njk: Netlify CMS config.yml
                      mini-pipeline.</a
                    >
                  </li>
                  <li>
                    <a
                      href="${repo}/blob/${branch}/src/styles/tailwind.config.js"
                      >src/styles/tailwind.config.js: Tailwind CSS configuration
                      file.</a
                    >
                  </li>
                  <li>
                    <a href="${repo}/blob/${branch}/src/styles/tailwind.css"
                      >src/styles/tailwind.css: Tailwind CSS entry point.</a
                    >
                  </li>
                </ul>
              `
            : type === "GitLab" && branch
            ? html`
                Quick Links to notable configuration files:
                <ul>
                  <li>
                    <a href="${repo}/-/blob/${branch}/.eleventy.js"
                      >.eleventy.js: Eleventy configuration file.</a
                    >
                  </li>
                  <li>
                    <a href="${repo}/-/blob/${branch}/package.json"
                      >package.json: NPM configuration file.</a
                    >
                  </li>
                  <li>
                    <a href="${repo}/-/blob/${branch}/postcss.config.js"
                      >package.json: PostCSS configuration file.</a
                    >
                  </li>
                  <li>
                    <a href="${repo}/-/blob/${branch}/.eleventyignore"
                      >.eleventyignore: Eleventy ignored file list.</a
                    >
                  </li>
                  <li>
                    <a href="${repo}/-/blob/${branch}/netlify.toml"
                      >netlify.toml: Netlify configuration file</a
                    >
                  </li>
                  <li>
                    <a href="${repo}/-/blob/${branch}/src/admin/config.yml.njk"
                      >src/admin/config.yml.njk: Netlify CMS config.yml
                      mini-pipeline.</a
                    >
                  </li>
                  <li>
                    <a
                      href="${repo}/-/blob/${branch}/src/styles/tailwind.config.js"
                      >src/styles/tailwind.config.js: Tailwind CSS configuration
                      file.</a
                    >
                  </li>
                  <li>
                    <a href="${repo}/-/blob/${branch}/src/styles/tailwind.css"
                      >src/styles/tailwind.css: Tailwind CSS entry point.</a
                    >
                  </li>
                </ul>
              `
            : ""}
        </div>
        <a
          class="basic-button mx-auto w-full block"
          href="https://zulvkr.github.io/staticformdocs/"
          >See Documentation</a
        >
      </div>
    `;
  }
});

CMS.registerPreviewTemplate("git", Git);
