module.exports = {
  docs: [
    {
      type: "category",
      label: "Getting started",
      items: [
        "faq",
        {
          type: "category",
          label: "Installation",
          items: [
            "installation/docker",
            "installation/synology-nas",
            "installation/flyio",
            "installation/windows-wsl2",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: ["guides/1panel"],
    },
    {
      type: "category",
      label: "Integrations",
      items: [
        "integrations/mqtt",
      ],
    },
    {
      type: "category",
      label: "Advanced Configuration",
      items: ["configuration/environment_variables"],
    },
    {
      type: "category",
      label: "Maintenance",
      items: [
        "upgrading",
      ],
    },
    {
      type: "doc",
      id: "contributing",
    },
  ],
};
