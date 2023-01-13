import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";

register("ko", koLocale);

export const formatAgo = (data, lang = "en-US") => {
  return format(data, lang);
};
