import { builder, Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(
  dynamic(() => import("./components/ui/Button")),
  {
    name: "Button",
    inputs: [
      { name: "text", type: "string", defaultValue: "[Label]"},
      { name: "target", type: "url" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/ui/logo-carousel")),
  {
    name: "Logo Carousel",
    inputs: [
      { name: "headline", type: "string", defaultValue: "[Headline]"},
      {
        name: "slides",
        type: "list",
        subFields: [
          {
            name: "image",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
          },
          { name: "altText", defaultValue: "default alt text", type: "string" },
        ],
      },
    ],
  }
);