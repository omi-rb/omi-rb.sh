// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    "home",
    "roadmap",
    {
      type: "category",
      label: "Reference",
      collapsed: true,
      items: ["reference/architecture", "reference/glossary"],
    },
  ],
};

module.exports = sidebars;
