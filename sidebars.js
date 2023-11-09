module.exports = {
  docs: [
    {
      type: "category",
      label: "Getting started",
      items: [
        "faq",
        {
          type: "category",
          label: "Server Installation",
          items: [
            "installation/docker",
            "installation/synology-nas",
            "installation/flyio",
            "installation/windows-wsl2",
            "installation/1panel",
          ],
        },
        {
          type: "category",
          label: "Toy PCB Replacement",
          items: [
            "toy-pcb-replacement/video-tutorial",
            "toy-pcb-replacement/alilo-g6",
            "toy-pcb-replacement/alilo-f6",
            "toy-pcb-replacement/mitu-c1",
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
      type: "category",
      label: "Web Tool",
      items: [
        "web-tool",
      ],
    },
    {
      type: "doc",
      id: "contributing",
    },
  ],
};
