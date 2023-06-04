import { BookIcon } from "src/icons/book";
import { VideoIcon } from "src/icons/video";
import { ChannelIcon } from "src/icons/channel";
import { ArticleIcon } from "src/icons/article";
import { LinkIcon } from "src/icons/link";
import { EnvelopeIcon } from "src/icons/envelope";

export type ResourceType = keyof typeof RESOURCE_ICONS;
export const RESOURCE_ICONS = {
  BOOK: BookIcon,
  ARTICLE: ArticleIcon,
  CHANNEL: ChannelIcon,
  VIDEO: VideoIcon,
  NEWSLETTER: EnvelopeIcon,
  WEBSITE: LinkIcon,
} as const;
