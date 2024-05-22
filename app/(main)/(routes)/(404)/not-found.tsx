import { Header } from '~/components/header';
import { InternalLink } from '~/components/ui/buttons';

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
