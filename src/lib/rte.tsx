import { NeoHeadline } from "@components/shared/NeoHeadline/NeoHeadline";
import React, { Children, PropsWithChildren } from "react";
import {
  Options,
  documentToReactComponents,
} from "@contentful/rich-text-react-renderer";
import { NeoLink } from "@components/shared/NeoLink/NeoLink";
import { ContentfulRichText } from "@type/contentful/ContentfulRichText";
import { NeoParagraph } from "@components/shared/NeoParagraph/NeoParagraph";
import { NeoList } from "@components/shared/NeoList/NeoList";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export interface RteProps {
  content?: ContentfulRichText;
}

export const Rte: React.FC<RteProps> = ({ content }) => {
  if (!content) {
    return null;
  }

  return documentToReactComponents(content, rteRenderer);
};

export const rteRenderer: Options = {
  renderNode: {
    [INLINES.ENTRY_HYPERLINK]: (children, node) => {
      // TODO: fix more edgecases
      const { slug, url } = children?.data?.target;
      const path = url ?? `../${slug}`;

      return (
        <NeoLink
          noUppercase={true}
          href={path}
          target={path.startsWith("http") ? "_blank" : "_self"}
        >
          {node}
        </NeoLink>
      );
    },
    [INLINES.HYPERLINK]: (children, node) => {
      const url = children?.data?.uri;
      return (
        <NeoLink noUppercase={true} href={url}>
          {node}
        </NeoLink>
      );
    },
    [BLOCKS.UL_LIST]: (_, node: React.ReactNode) => {
      const children = Children.toArray(node)
        .map((node) =>
          React.isValidElement(node)
            ? unwrapChildren(node.props.children)
            : node,
        )
        .map((child, key) => <li key={key}>{child}</li>);
      return <NeoList>{children}</NeoList>;
    },
    [BLOCKS.OL_LIST]: (_, node: React.ReactNode) => {
      const children = Children.toArray(node)
        .map((node) =>
          React.isValidElement(node)
            ? unwrapChildren(node.props.children)
            : node,
        )
        .map((child, key) => <li key={key}>{child}</li>);
      return <NeoList ordered>{children}</NeoList>;
    },
    [BLOCKS.PARAGRAPH]: (_, node) => {
      return <NeoParagraph>{node}</NeoParagraph>;
    },
    [BLOCKS.HEADING_1]: (_, node) => {
      return <NeoHeadline level={1}>{node}</NeoHeadline>;
    },
    [BLOCKS.HEADING_2]: (_, node) => {
      return <NeoHeadline level={2}>{node}</NeoHeadline>;
    },
    [BLOCKS.HEADING_3]: (_, node) => {
      return <NeoHeadline level={3}>{node}</NeoHeadline>;
    },
    [BLOCKS.HEADING_4]: (_, node) => {
      return <NeoHeadline level={4}>{node}</NeoHeadline>;
    },
  },
  renderText: (node) => {
    return <span dangerouslySetInnerHTML={{ __html: node }} />;
  },
};

const unwrapChildren = (children: React.ReactNode) => {
  const target = Array.isArray(children) ? children[0] : children;
  return React.isValidElement<PropsWithChildren>(target)
    ? target.props.children
    : children;
};

export const isRte = (value: any): value is ContentfulRichText => {
  return "nodeType" in value;
};
