import { NewsPage } from "@components/creators/pages/NewsPage";
import { ProductPage } from "@components/creators/pages/ProductPage";
import { ContentPage } from "./ContentPage";

const pages = {
  page: ContentPage,
  blogpost: null,
  contactForm: null,
  jobPage: null,
  news: NewsPage,
  newsletterSubscribePage: null,
  newsletterUnsubscribePage: null,
  productPage: ProductPage,
  productfinder: null,
  searchPage: null,
};

export interface PageCreatorProps {
  searchParams?: Record<string, string | string[]>;
}

export type PageId = keyof typeof pages;

export const PageCreator = (id: PageId) => pages[id];
