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
      ],
    },
    {
      type: "category",
      label: "ChatGPT Learning Dev Suit",
      items: ["dev-suit/quickstart", "dev-suit/partsinfo"],
    },
    /*{
      type: "category",
      label: "Guides",
      items: [
        "guides/emqx",
        "guides/mosquitto",
        "guides/nginx"
      ],
    },
    */
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
      items: ["web-tool"],
    },
    {
      type: "doc",
      id: "contributing",
    },
  ],
};
