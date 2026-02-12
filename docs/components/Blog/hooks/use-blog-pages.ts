import type { BlogItem } from '../types';
import { useLang, usePages } from '@rspress/core/runtime';

export function useBlogPages(): BlogItem[] {
  const { pages } = usePages();
  const lang = useLang();

  const blogPages = pages
    .filter(page => page.lang === lang)
    .filter(
      page =>
        page.routePath.includes('/blog/') && !page.routePath.endsWith('/blog/'),
    )
    .sort((a, b) => {
      const dateA = a.frontmatter?.date
        ? new Date(a.frontmatter?.date as string)
        : new Date(0);
      const dateB = b.frontmatter?.date
        ? new Date(b.frontmatter?.date as string)
        : new Date(0);
      return dateB.getTime() - dateA.getTime();
    });

  return blogPages.map(
    ({
      frontmatter: { description, date, authors, badge_text },
      routePath,
      title,
    }) => {
      const itemDate = date ? new Date(date as string) : undefined;
      // Extract filename from routePath, e.g. '/en/blog/lynx-3-5' -> 'lynx-3-5'
      const filename = routePath.split('/').pop();
      return {
        date: itemDate,
        description,
        link: routePath,
        title,
        authors: authors as string[] | undefined,
        badgeText: badge_text as string | undefined,
        filename,
      };
    },
  );
}
