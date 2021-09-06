import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

type LinkProps = Omit<NextLinkProps, 'href' | 'passHref'> &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { to: NextLinkProps['href'] };

function Link({
    children,
    to,
    as,
    replace,
    scroll,
    shallow,
    prefetch,
    locale,
    ...anchorProps
}: PropsWithChildren<LinkProps>): JSX.Element {
    return (
        <NextLink {...{ href: to, as, replace, scroll, shallow, prefetch, locale }}>
            <a {...anchorProps}>{children}</a>
        </NextLink>
    );
}

export default Link;
