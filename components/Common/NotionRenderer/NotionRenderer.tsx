import { useTheme } from "next-themes";
import { NotionRenderer as Renderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";

import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Equation } from "react-notion-x/build/third-party/equation";
import { Modal } from "react-notion-x/build/third-party/modal";
import { Pdf } from "react-notion-x/build/third-party/pdf";

import { FC } from "react";

export interface NotionRendererProps {
  recordMap: ExtendedRecordMap;
}

export const NotionRenderer: FC<NotionRendererProps> = ({ recordMap }) => {
  const { resolvedTheme } = useTheme();

  return (
    <Renderer
      darkMode={(resolvedTheme ?? "light") === "dark"}
      recordMap={recordMap}
      showCollectionViewDropdown={false}
      showTableOfContents={false}
      linkTableTitleProperties={false}
      hideBlockId
      previewImages
      components={{
        Code,
        Collection,
        Equation,
        Modal,
        Pdf,
      }}
    />
  );
};
