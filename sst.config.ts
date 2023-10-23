import { SSTConfig } from "sst";
import { Website } from "./stacks/Website";

export default {
  config(_input) {
    return {
      name: "stuburger-blog",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(Website);
  },
} satisfies SSTConfig;
