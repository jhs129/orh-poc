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
