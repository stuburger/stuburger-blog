import { StackContext, NextjsSite } from "sst/constructs";

export function Website({ stack, app }: StackContext) {
  const site = new NextjsSite(stack, "Site", {
    customDomain: app.stage === "production" ? "stuburger.com" : undefined,
    path: "packages/blog",
  });

  stack.addOutputs({
    URL: site.url,
    domain: site.customDomainUrl,
  });
}
