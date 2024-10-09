import { Metadata } from 'next';
import { Header } from '~/src/app/components/header';
import { InternalLink } from '~/src/app/components/ui/buttons';

export const metadata: Metadata = {
  title: '404 Error',
  description:
    "Oops! It looks like the page you're trying to access doesn't exist. Don't worry, you can explore other areas of CodeDevils to find what you're looking for. If you need assistance, feel free to contact us.",
  openGraph: {
    title: '404 Error',
    description:
      "Oops! It looks like the page you're trying to access doesn't exist. Don't worry, you can explore other areas of CodeDevils to find what you're looking for. If you need assistance, feel free to contact us.",
  },
};

export default function NotFoundCatchAll() {
  return (
    <div className='flex h-full items-center justify-center'>
      <Header>
        <h1 className='text-7xl font-bold'>404 Error</h1>
        <article className='space-y-4'>
          <p className='text-base'>
            Huh? 🤔 seems like this page doesn&apos;t exist. Maybe it never did
            🤷
          </p>
          <p className='text-base'>
            <InternalLink href='/'>Go to the Home Page</InternalLink>

            <InternalLink href='/support'>Get Support</InternalLink>
          </p>
        </article>
      </Header>
    </div>
  );
}
