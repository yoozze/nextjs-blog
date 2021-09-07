import React from 'react';
import dynamic from 'next/dynamic';
import type { CMS, InitOptions } from 'netlify-cms-core'

import config from '../cms/config.js';

const NetlifyCMS = dynamic<React.ReactNode>(
    () => 
        import('netlify-cms-app').then((cms) => {
            (cms as unknown as CMS).init({ config } as InitOptions);
        }) as never,
    { ssr: false, loading: () => <p>Loading...</p> as React.ReactElement}
);

const AdminPage: React.FC = () => <NetlifyCMS />;

export default AdminPage;
