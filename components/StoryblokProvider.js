"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
 
/** Import your components */
import Page from "./Page";
import Teaser from "./Teaser";
import Feature from "./Feature";
import Grid from "./Grid";
 
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};
 
storyblokInit({
  apiOptions: {
    region: "us",
  },
  accessToken: "bvV8xz48QStXHSbihdRNNQtt",
  use: [apiPlugin],
  components:components
});
 
export default function StoryblokProvider({ children }) {
  return children;
}
