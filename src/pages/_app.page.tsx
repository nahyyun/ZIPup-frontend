import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Layout from '@components/Layout';
import ReactQueryClient from '@contexts/ReactQueryContext';
// import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';

import '@styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (window.Kakao.isInitialized()) return;

    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
  }, []);

  return (
    <Layout>
      <RecoilRoot>
        <ReactQueryClient>
          <Component {...pageProps} />
          {/* <ToastContainer
              position="bottom-center"
              autoClose={3000}
              hideProgressBar={false}
              closeOnClick
              rtl={false}
              theme="light"
            /> */}
        </ReactQueryClient>
      </RecoilRoot>
    </Layout>
  );
}
