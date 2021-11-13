export default {
  tree: {
    $className: "DataModel",

    ReplicatedStorage: {
      $className: "ReplicatedStorage",
      Modules: {
        $path: "src/shared",
      },
      roarn_modules: {
        $path: "roarn_modules",
      },
    },

    ServerScriptService: {
      Server: {
        $path: "src/server",
      },
    },

    StarterPlayer: {
      StarterPlayerScripts: {
        Client: {
          $path: "src/client",
        },
      },
    },

    Workspace: {
      $properties: {
        FilteringEnabled: true,
      },
      Baseplate: {
        $className: "Part",
        $properties: {
          Anchored: true,
          Color: [0.38823, 0.37254, 0.38823],
          Locked: true,
          Position: [0, -10, 0],
          Size: [512, 20, 512],
        },
      },
    },
    Lighting: {
      $properties: {
        Ambient: [0, 0, 0],
        Brightness: 2,
        GlobalShadows: true,
        Outlines: false,
        Technology: "Voxel",
      },
    },
    SoundService: {
      $properties: {
        RespectFilteringEnabled: true,
      },
    },
  },
};
