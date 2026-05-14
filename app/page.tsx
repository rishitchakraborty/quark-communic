/* eslint-disable */
import { headers } from 'next/headers';
import { App } from '@/components/app/app';
import { getAppConfig } from '@/lib/utils';

interface PageProps {
  searchParams: Promise<{
    agentName?: string;
  }>;
}

export default async function Page({ searchParams }: PageProps) {
  const hdrs = await headers();

  const params = await searchParams;

  const appConfig = await getAppConfig(hdrs);

  // Dynamic agent selection
  appConfig.agentName = params.agentName || 'nism-assistant';

  console.log('Selected Agent:', appConfig.agentName);

  return <App appConfig={appConfig} />;
}