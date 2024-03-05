import { builder, Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(
  dynamic(() => import("./components/ui/button")),
  {
    name: "Button",
    inputs: [
      { name: "text", type: "string", defaultValue: "[Label ]"},
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
      { name: "subheadline", type: "string"},
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

Builder.registerComponent(
  dynamic(() => import("./components/ui/practice-card")),
  {
    name: "Practice Card",
    inputs: [
      { name: "name", type: "string", defaultValue: "[name]" },
      { name: "title", type: "string", defaultValue: "[title]" },
      { name: "thumbnail", type: "file" },
      { name: "altText", type: "string", defaultValue: "[altText]" },
    ],
  },  
);