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
            "installation/1panel",
            "installation/synology-nas",
            "installation/flyio",
            "installation/windows-wsl2",
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
      label: "Advanced Configuration",
      items: [
        "configuration/environment_variables",
        "configuration/roles_config",
        "configuration/advanced_roles_config",
      ],
    },
    {
      type: "category",
      label: "Octopus Dev Suit",
      items: ["dev-suit/quickstart", "dev-suit/partsinfo", "dev-suit/configure_keys"],
    },
    {
      type: "category",
      label: "Guides",
      items: ["guides/emqx"],
    },
    {
      type: "category",
      label: "Integrations",
      items: ["integrations/mqtt"],
    },
    {
      type: "category",
      label: "Maintenance",
      items: ["upgrading"],
    },
    {
      type: "category",
      label: "Web Tool",
      items: ["web-tool", "esp-tool"],
    },
    {
      type: "category",
      label: "AT Command",
      items: ["at-command",],
    },
    {
      type: "category",
      label: "Folotoy Manual",
      items: ["manual/folotoy-manual", "manual/cactus-manual", "manual/wifi-connect"],
    },
    {
      type: "doc",
      id: "contributing",
    },
    {
      type: "doc",
      id: "community",
    },
  ],
};
