import { useLang } from '@rspress/core/runtime';
import {
  getCustomMDXComponent,
  renderInlineMarkdown,
} from '@rspress/core/theme';
import * as React from 'react';
import { BlogAvatar } from './avatar';
import { useBlogPages } from './hooks/use-blog-pages';

export function BlogList() {
  const { h2: H2, p: P, a: A, hr: Hr } = getCustomMDXComponent();

  const blogPages = useBlogPages();
  const lang = useLang();

  return (
    <>
      {blogPages.map(({ date, description, link, title, authors }, index) => (
        <React.Fragment key={link || index}>
          {title && (
            <H2 id={link}>
              <A href={link}>{title}</A>
            </H2>
          )}
          {date && (
            <P>
              <em>
                {new Intl.DateTimeFormat(lang, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }).format(date)}
              </em>
            </P>
          )}
          {authors && (
            <>
              {authors.map(author => (
                <BlogAvatar author={author} key={author} />
              ))}
            </>
          )}
          {description && <P {...renderInlineMarkdown(description)} />}
          {index < blogPages.length - 1 && <Hr />}
        </React.Fragment>
      ))}
    </>
  );
}
