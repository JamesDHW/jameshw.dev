"use-client";

/* eslint-disable @typescript-eslint/ban-ts-comment */
import dynamic from "next/dynamic";

export const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then(async (m) => {
    // additional prism syntaxes
    await Promise.all([
      // @ts-ignore
      import("prismjs/components/prism-markup-templating.js"),
      // @ts-ignore
      import("prismjs/components/prism-markup.js"),
      // @ts-ignore
      import("prismjs/components/prism-bash.js"),
      // @ts-ignore
      import("prismjs/components/prism-c.js"),
      // @ts-ignore
      import("prismjs/components/prism-csharp.js"),
      // @ts-ignore
      import("prismjs/components/prism-docker.js"),
      // @ts-ignore
      import("prismjs/components/prism-java.js"),
      // @ts-ignore
      import("prismjs/components/prism-js-templates.js"),
      // @ts-ignore
      import("prismjs/components/prism-coffeescript.js"),
      // @ts-ignore
      import("prismjs/components/prism-diff.js"),
      // @ts-ignore
      import("prismjs/components/prism-git.js"),
      // @ts-ignore
      import("prismjs/components/prism-go.js"),
      // @ts-ignore
      import("prismjs/components/prism-graphql.js"),
      // @ts-ignore
      import("prismjs/components/prism-handlebars.js"),
      // @ts-ignore
      import("prismjs/components/prism-less.js"),
      // @ts-ignore
      import("prismjs/components/prism-makefile.js"),
      // @ts-ignore
      import("prismjs/components/prism-markdown.js"),
      // @ts-ignore
      import("prismjs/components/prism-objectivec.js"),
      // @ts-ignore
      import("prismjs/components/prism-ocaml.js"),
      // @ts-ignore
      import("prismjs/components/prism-python.js"),
      // @ts-ignore
      import("prismjs/components/prism-reason.js"),
      // @ts-ignore
      import("prismjs/components/prism-rust.js"),
      // @ts-ignore
      import("prismjs/components/prism-sass.js"),
      // @ts-ignore
      import("prismjs/components/prism-scss.js"),
      // @ts-ignore
      import("prismjs/components/prism-solidity.js"),
      // @ts-ignore
      import("prismjs/components/prism-sql.js"),
      // @ts-ignore
      import("prismjs/components/prism-stylus.js"),
      // @ts-ignore
      import("prismjs/components/prism-swift.js"),
      // @ts-ignore
      import("prismjs/components/prism-wasm.js"),
      // @ts-ignore
      import("prismjs/components/prism-yaml.js"),
    ]);

    return m.Code;
  })
);
