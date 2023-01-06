import { FC } from "react";

import { BookIcon } from "icons/book";
import { VideoIcon } from "icons/video";
import { ChannelIcon } from "icons/channel";
import { ArticleIcon } from "icons/article";
import { LinkIcon } from "icons/link";
import { EnvelopeIcon } from "icons/envelope";

export const RESOURCE_ICONS: { [k: string]: FC<JSX.IntrinsicElements["svg"]> } =
  {
    BOOK: BookIcon,
    VIDEO: VideoIcon,
    CHANNEL: ChannelIcon,
    ARTICLE: ArticleIcon,
    WEBSITE: LinkIcon,
    NEWSLETTER: EnvelopeIcon,
  };
