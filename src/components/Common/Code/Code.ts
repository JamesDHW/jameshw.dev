"use-client";

/* eslint-disable @typescript-eslint/ban-ts-comment */
import dynamic from "next/dynamic";

export const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then(async (m) => {
    // additional prism syntaxes
    await Promise.all([
      // @ts-ignore
      import("prismjs/components/prism-bash.js"),
      // @ts-ignore
      import("prismjs/components/prism-docker.js"),
      // @ts-ignore
      import("prismjs/components/prism-java.js"),
      // @ts-ignore
      import("prismjs/components/prism-jsx.js"),
      // @ts-ignore
      import("prismjs/components/prism-javascript.js"),
      // @ts-ignore
      import("prismjs/components/prism-tsx.js"),
      // @ts-ignore
      import("prismjs/components/prism-typescript.js"),
      // @ts-ignore
      import("prismjs/components/prism-diff.js"),
      // @ts-ignore
      import("prismjs/components/prism-git.js"),
      // @ts-ignore
      import("prismjs/components/prism-graphql.js"),
      // @ts-ignore
      import("prismjs/components/prism-markdown.js"),
      // @ts-ignore
      import("prismjs/components/prism-python.js"),
      // @ts-ignore
      import("prismjs/components/prism-sql.js"),
      // @ts-ignore
      import("prismjs/components/prism-swift.js"),
      // @ts-ignore
      import("prismjs/components/prism-yaml.js"),
    ]);

    return m.Code;
  })
);
